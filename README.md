# Functions, Callbacks and Higher Order Functions

## Functions

In JavaScript, functions are a way to create repeatable parts of our code which we can then _call_ or _invoke_ at a later time.

e.g. The following function will take in a number, multiply it by itself and return the result:

```javascript
function square(number) {
  return number * number
}
```

### Creating Functions

Functions can be defined in a couple different ways.

#### Function Declarations

Function Declarations start with the keyword `function` followed by a name for the function. That function can then be invoked by name later on in the program.

```javascript
// Declaration
function sayHi() {
  console.log('Hi')
}

// Invokation
sayHi() // Logs to the console "Hi"
```

##### Caveat

One thing to remember about Function Declarations; just like `var`s these declarations are hoisted to the top of the scope they're declared in. This allows us to call functions before they're declared:

```javascript
// Invokation, this works because `sayHi` has been hoisted to the top of the scope

sayHi() // Logs "Hi" to the console

// Declaration
function sayHi() {
  console.log('Hi')
}
```

#### Function Expressions

Another way to create functions is by using the Function Expression syntax:

```javascript
// Expression
const sayHi = function() {
  console.log('Hi')
}

// Invokation
sayHi() // Logs "Hi" to the console
```

In the above example, since the function has no name we call this an **anonymous** function.

##### Arrow Functions

Another way of creating function expressions is to use an *Arrow Function*. These functions look like the following:

```javascript
// Function Expression with an Arrow function
const sayHi = () => {
  console.log('Hi')
}

// Invokation
sayHi()
```

Arrow functions also have a few special syntax niceties:

1. If you only have one argument you can omit the parenthesis:
    ```javascript
    const square = number => {
      return number * number
    }
    ```
2. If you omit the `{}` of the function body, the first expression is automatically returned
    ```javascript
    const square => number => number * number
    ```

In both the examples above the functionality is the same, just a slight difference in the syntax

### Functions as Values

Functions, like most other things in JavaScript are just plain values that we can assign and pass around, just like most other values.

See the code in [01_asValues.js](./01_asValues.js) as an example.

### Higher-order Function

> In mathematics and computer science, a higher-order function is a function that does at least one of the following:
>
> - takes one or more functions as arguments (i.e. procedural parameters),
> - returns a function as its result.
> 
> [Higher-order Function](https://en.wikipedia.org/wiki/Higher-order_function)

Higher-order functions allow us to separate out or genericize the inner workings of a function by passing a function as an argument.

This lets us keep to the [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle) and keep our functions only dealing with one thing.

![Never half ass two things; full ass one thing](https://media.giphy.com/media/XV5OBcAqkQba8/giphy.gif)

In the rest of these notes we'll be dealing just with functions which take another function as an argument. For an example of a function which returns a function take a look at [02_higherOrder.js](./02_higherOrder.js)

### `forEach`

`forEach` is a common higher-order function, its job is to loop through an array of elements and perform some action upon each element of the array.

Let's start with a simple example:

```javascript
const forEach = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i])
  }
}

forEach([1,2,3,4,5]) // Prints the numbers 1,2,3,4,5 to the console
```

Here our example `forEach` is stuck to doing `console.log`s. That's not really great if we want to do something else with the value from the array. So lets refactor this function:

```javascript
const forEach = (array) => {
  const logger = (value) => {
    console.log(value)
  }

  for (let i = 0; i < array.length; i++) {
    logger(array[i])
  }
}

forEach([1,2,3,4,5])
```

Here we've just extracted the call to `console.log` out from inside the for loop and into its own function which we invoke through each iteration.

Now if we want to move that out of the function, we just have to add a parameter to the function and pass it when the `forEach` function is invoked. We'll call this function `callback`

```javascript
const forEach = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i])
  }
}

// The anonymous arrow function here is being passed as the callback
forEach([1,2,3,4,5], (value) => {
  console.log(value)
})
```

To see a more examples take a look at [03_forEach.js](./03_forEach.js) and [04_forEach_reverse.js](./04_forEach_reverse.js)

### Other Higher-order functions

#### `filter()`

> The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.
> 
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

The `filter` function loops through an array and only keeps the items for which the callback returns `true`.

See [05_filter.js](./05_filter.js) for more examples

#### `map()`

> The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.
> 
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

The `map()` function loops through an array and transforms each element by using the callback function. The return value of the callback replaces the element in the new array which is created.

More examples can be seen in [06_map.js](./06_map.js)

#### `reduce()`

> The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
>
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

The reduce function take an `initial` value, and passes the initial (or previously returned value from the callback) and the next element in the array to the callback. The return result from the callback is used in the next iteration.

More examples can be seen in [07_reduce.js](./07_reduce.js)
