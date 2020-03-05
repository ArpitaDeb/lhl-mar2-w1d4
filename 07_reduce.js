/**
 * The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {[]} array The array to iterate through
 * @param {(accumulator, current) => any} callback This function takes the previous value (the result of the last call or `initial`) and the next value in the array, and returns the next value to use
 * @param {A} initial The initial value to start the accumulator at
 */
const reduce = (array, callback, initial) => {
  let result = initial

  for (const value of array) {
    result = callback(result, value)
  }

  return result
}

// Summing numbers using reduce is almost trivial
const sum = reduce([1, 2, 3, 4, 5, 6], (prev, curr) => prev + curr, 0)
console.log('sum', sum)

// We can also concatenate a bunch of characters into a word.
const word = reduce(['h', 'e', 'l', 'l', 'o'], (prev, curr) => prev + curr, '')
console.log('word', word)

// Or create objects by using reduce
const countedNumbers = reduce(['h', 'e', 'l', 'l', 'o'], (prev, curr) => {
  if (prev[curr]) {
    prev[curr] += 1
  } else {
    prev[curr] = 1
  }
  return prev
}, {})
console.log('countedNumbers', countedNumbers)
