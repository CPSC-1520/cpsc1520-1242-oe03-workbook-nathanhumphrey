// Event Basics
// 1. find the element you're interested in
let btn = document.querySelector('.btn');
// 2. defing the event handler function
function btnHandler() {
  document.querySelector('.output').innerHTML = 'Button clicked';
  console.log('called from btnHandler');
}
// 3. add the listener
btn.addEventListener('click', btnHandler);

// Alternates for adding the listener
btn.addEventListener('click', function () {
  document.querySelector('.output').innerHTML = 'Button clicked x 2';
  console.log('called from anon function');
});

btn.addEventListener('click', () => {
  document.querySelector('.output').innerHTML = 'Button clicked x 3';
  console.log('called from arrow function');
});

// Event Propagation
let divProp = document.querySelector('.prop');
let btnProp = document.querySelector('.btn-prop');

divProp.addEventListener('mousedown', () => {
  alert('From div');
});

btnProp.addEventListener('mousedown', (evt) => {
  console.log(evt);
  if (evt.button == 2) {
    evt.stopPropagation();
  }

  alert('From button');
});

// document.addEventListener('click', () => {
//   alert('From document');
// });

// Event Default Behaviour
let link = document.querySelector('.link');

link.addEventListener('click', (evt) => {
  if (confirm('Are you sure you want to leave?') == false) {
    evt.preventDefault();
  }

  // Using the not (!) operator
  // if (!confirm('Are you sure you want to leave?')) {
  //   evt.preventDefault();
  // }
});
