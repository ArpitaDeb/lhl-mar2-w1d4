const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const log = function (value, index) {
  console.log(index, value)
}

const otherLog = function (value, _index, array) {
  console.log(value / array.length)
}

/**
 * `forEach()` iterates through the given array, invoking the `callback` on each element.
 * @param {[]} array The array to iterate through
 * @param {(element, index, array) => void} callback The callback to invoke for each element, passing along the element itself, the index and the array
 */
const forEach = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array)
  }
}

// Functions can be referenced and passed as values
// N.B. As we're referencing the functions here, we don't include `()` after.
forEach(numbers, otherLog)
forEach(['a', 'b', 'c'], log)
