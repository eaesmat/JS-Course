// Basic Methods
// build-in funciton built by JS
// push(), shift() log()
// user-defined Built by users
let students = ['Najwa', 'Shafiqa', 'Spogami'];

// Add elements
// 1. push(elnt): Push is used to insert an element at the end of array.
console.log(students)
students[3] = 'Nargis';
console.log(students)
const pushed = students.push('Alia');
students.push(1000)
console.log(pushed)
console.log(students)

// 2. unshift(add element): Push is used to insert an element at the start of array.
const unshifed = students.unshift('Fatima');
console.log(unshifed)
console.log(students)

students.push('abc');
const members = []
members.push(1000);
console.log(students)

// Remove Element
// 3. pop(): to remove an element from the end.

const poped = students.pop();
console.log(poped);
console.log(students)

// 4. shift() to remove the element at the start.

const shifted = students.shift();
console.log(shifted);
console.log(students);
students.splice('Fatima')
console.log(students)


