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
