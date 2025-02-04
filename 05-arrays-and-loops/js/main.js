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
