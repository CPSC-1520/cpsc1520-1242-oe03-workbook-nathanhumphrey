// When button.thumbnails-size element is clicked, the corresponding size class (sm, md, or lg)
// should be added to the div.thumbnails element and the button should display the next size.
// This will apply the corresponding CSS rule to modify the display the of the thumbnail images.
// (e.g. if the button currently displays Small, then the clicking the button should update the
// div.thumbnails element with size class sm and should update the button to display Medium).
// As with previous examples, there are several ways to complete this task.

const button = document.querySelector('button.thumbnails-size');
const thumbnails = document.querySelector('div.thumbnails');

let buttonState = 'Small';

button.addEventListener('click', () => {
  // switch option
  switch (buttonState) {
    case 'Small':
      buttonState = 'Medium';

      thumbnails.classList.remove('lg');
      thumbnails.classList.add('sm');

      button.innerText = buttonState;
      break;
    case 'Medium':
      buttonState = 'Large';

      thumbnails.classList.remove('sm');
      thumbnails.classList.add('md');

      button.innerText = buttonState;
      break;
    case 'Large':
      buttonState = 'Small';

      thumbnails.classList.remove('md');
      thumbnails.classList.add('lag');

      button.innerText = buttonState;
      break;
    default:
      console.log('Should never see this');
      break;
  }

  /* if-else-if solution
  if (buttonState == 'Small') {
    buttonState = 'Medium';

    thumbnails.classList.remove('lg');
    thumbnails.classList.add('sm');

    button.innerText = buttonState;
  } else if (buttonState == 'Medium') {
    buttonState = 'Large';

    thumbnails.classList.remove('sm');
    thumbnails.classList.add('md');

    button.innerText = buttonState;
  } else {
    // must be Large
    buttonState = 'Small';

    thumbnails.classList.remove('md');
    thumbnails.classList.add('lag');

    button.innerText = buttonState;
  }
  */
});
