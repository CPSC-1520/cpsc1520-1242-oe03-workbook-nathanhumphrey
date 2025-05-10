console.log('output to the browser console, useful for debugging');

let updateText = document.querySelector('#update-text > p');
updateText.innerHTML = 'Correct the typos in this text.';

let updateHtml = document.querySelector('#update-html > p');
let currentText = updateHtml.innerHTML;
updateHtml.innerHTML = '<strong>' + currentText + '</strong>';

let updateColour = document.querySelector('#update-colour > p');
updateColour.style.color = 'blue';

console.log('Update Colour P', updateColour);

// on your own, try to wrap the corrected text in the first paragraph in <i> tags
// on your own, change the colour of the second h2 to red
