const filter = (array, callback) => {
  const result = [];

  for (let value of array) {
    if (callback(value)) {
      result.push(value);
    }
  }

  return result;
};

const inputArray = [1, 2, 3, 4, 5, 6];

const evens = filter(inputArray, value => value % 2 === 0);
console.log("evens", evens);
const odds = filter(inputArray, value => value % 2 === 1);
console.log("odds", odds);

console.log(inputArray);

const middle = filter(inputArray, value => value > 2);
console.log("middle", middle);

const people = [
  { name: "David", role: "Instructor", programs: ["ios", "web"] },
  { name: "Martin", role: "Instructor", programs: ["web"] },
  { name: "Tim", role: "Mentor", programs: ["web"] }
];

const instructors = filter(people, person => person.role === "Instructor");
console.log("instructors", instructors);

const iosInstructors = filter(people, person =>
  person.programs.includes("ios")
);
console.log("iosInstructors", iosInstructors);
