function sayHello() {
  console.log('Say Hello')
}

const sayHi = function () {
  console.log('Say Hi')
}

// Functions can be referenced just like any other value
let saySomething = sayHi

// Invoking a function means we put the `()` after the name of the function.
// This will actually execute the code in the function as opposed to just referencing the function itself
// In this case, invoking `saySomething()` will invoke `sayHi()`
saySomething()

// We can also reassign them
saySomething = sayHello

// And now invoking `saySomething()` invokes `sayHello()`
saySomething()
