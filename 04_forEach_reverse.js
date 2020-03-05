/**
 * `forEachReverse` iterates through each element in the `array` in reverse order.
 * @param {*} array The array to loop through
 * @param {*} callback A callback which will do something with each element as we iterate through the `array`
 */
const forEachReverse = (array, callback) => {
  for (let i = array.length - 1; i >= 0; i--) {
    callback(array[i], i)
  }
}

// Arrow function:
forEachReverse([1, 2, 3, 4, 5], (value, i) => {
  console.log(value * i)
})

// Function declaration
forEachReverse([1, 2, 3, 4, 5], function (value, i) {
  console.log(value * i)
})

// Arrow functions that take a single parameter can ommit the `()`
forEachReverse(['a', 'b', 'c', 'd', 'e'], value => {
  console.log(value.charCodeAt(0))
})
