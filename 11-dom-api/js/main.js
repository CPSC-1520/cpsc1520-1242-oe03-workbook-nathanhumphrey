// DOM API Access to elements/nodes

// Second paragraph of main
const p2 = document.body.firstElementChild.nextElementSibling.lastElementChild;
console.log(p2);

// Accessing a parent
const main = p2.parentElement;
console.log(main);

// Accessing a sibling
const p1 = p2.previousElementSibling;
console.log(p1);

// Doing the following will overwrite the existing paragraphs in main
// main.innerHTML = main.innerHTML + '<p>String text</p>';


// Build a DOM fragment to ADD to the existing document elements
const p = document.createElement('p');
const text = document.createTextNode('Another new text');
// The following are quicker ways to assign text, but, keep in mind you still
// end up with a #text node child
// p.textContent = 'Text content way';
// p.innerText = 'Inner text way';

p.appendChild(text);
main.appendChild(p);