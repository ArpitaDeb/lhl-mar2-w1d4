/**
 * The `map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array.
 * @param {[]} array The array to map through
 * @param {(element) => *} callback Function that is called for every element of `array`. Each time `callback` executes, the returned value is added to the new array.
 *
 * @returns {[]} The new array containing the elements put through the `callback` function
 */
const map = (array, callback) => {
  const result = []

  for (const item of array) {
    result.push(callback(item))
  }

  return result
}

// Map can be use to perform some simple math on each element
const tens = map([1, 2, 3, 4, 5, 6], value => value * 10)
console.log('tens', tens)

// Helper functions for circles
const circumference = r => 2 * r * Math.PI
const diameter = r => 2 * r
const area = r => Math.PI * Math.pow(r, 2)

// We can also create an object for each number
// N.B. The callback here doesn't have a function body but returns an object literal, hence the parentheses around the `{}`
const circles = map([1, 2, 3, 4, 5, 6], r => ({
  circumference: circumference(r),
  diameter: diameter(r),
  area: area(r)
}))
console.log('circles', circles)

// Map is also useful to get individual values out of a list of objects
const people = [
  { name: 'David', role: 'Instructor', programs: ['ios', 'web'] },
  { name: 'Martin', role: 'Instructor', programs: ['web'] },
  { name: 'Tim', role: 'Mentor', programs: ['web'] }
]

const names = map(people, function (person) {
  return person.name
})
console.log('names', names)
