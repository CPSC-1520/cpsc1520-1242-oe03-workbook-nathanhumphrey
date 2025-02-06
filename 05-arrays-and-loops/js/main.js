// Declare an array of names
let names = ['Sally', 'Jane', 'Bob', 'Anne', 'Jon'];

// While loop to display the names
let count = 0;
while (count < names.length) {
  console.log(names[count]);
  count += 1;
}

// Same display but with a for loop, note the 'idx' var
// is scoped to the loop, not global
for (let idx = 0; idx < names.length; idx += 1) {
  console.log(names[idx]);
}

// Clever way
// let n;
// while ((n = names[count++])) {
//   console.log(n);
// }

// Display the names in the ul.names-list
const list = document.querySelector('#names-list');

// Using array methods
list.innerHTML = names
  .map((item) => {
    return `<li>${item}</li>`;
  })
  .join('');

/*
let namesItems = '';

// Prefer this functional approach over loops
names.forEach((item) => {
  namesItems += `<li>${item}</li>`;
});
*/

// for loop version
// for (let idx = 0; idx < names.length; idx += 1) {
//   namesItems = namesItems + '<li>' + names[idx] + '</li>';
// }

// list.innerHTML = namesItems;

// ARRAY AND NODELIST WORK

// Get all paragraphs in a NodeList
let paras = document.querySelectorAll('.nodelist p');

// NodeList does not support the full Array API
console.log('Has filter()? ', paras.filter != undefined);

// Create an array using Array.from() or the spred operator (...)

let pArrayFrom = Array.from(paras);
let pArraySpread = [...paras];

// The rest operator (...)
// A function that expects at least two params, but
// can operate on any number of params by collecting
// them into a 'rest param'.

// ex. sum(1, 2, 3, 4) would pass a=1, b=2, args=[3, 4]

function sum(a, b, ...args) {
  // What is args?
  console.log(args);

  let sum = a + b;
  if (args && args.length > 0) {
    args.forEach((arg) => (sum += arg));
    // for (let i = 0; i < args.length; i += 1) {
    //   sum += args[i];
    // }
  }
  return sum;
}

// Call with any number of arguments
console.log(sum(1, 2, 3, 4, 5));

// Can use the spread operator to pass the args
const nums = [1, 2, 3, 4, 5];

console.log(sum(...nums));
