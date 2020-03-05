
/**
 * The `greet()` function returns a function which we can use to greet a specific person with different greetings
 * @param {string} name The name of the person to greet
 *
 * @returns {(greeting: string) => void} A greeter function for the given `name`
 */
const greet = function (name) {
  return function (greeting) {
    console.log(`${greeting} ${name}`)
  }
}

// Arrow function version of the above function
// Comment the function above and uncomment these lines to see it in action
// const greet = (name) => (greeting) => {
//   console.log(`${greeting} ${name}`)
// }

// `greeter` is now a function which will greet "Dave" with the given greeting
const greeter = greet('Dave')

greeter('Hello')
greeter('Hi')
greeter('Bonjour')
