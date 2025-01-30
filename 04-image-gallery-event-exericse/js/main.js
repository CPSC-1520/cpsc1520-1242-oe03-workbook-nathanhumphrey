// Create a click event listener on the .image-links element.  The listener function
// should set the src attribute of the img.target-image element and prevent the default
// behaviour from occurring.

document.querySelector('.image-links').addEventListener('click', (evt) => {
  evt.preventDefault();

  if (evt.target.href) {
    // document.querySelector('.target-image').src = evt.target.href;
    document
      .querySelector('.target-image')
      .setAttribute('src', evt.target.getAttribute('href'));
  }
});
