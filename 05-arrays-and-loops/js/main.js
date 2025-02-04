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
