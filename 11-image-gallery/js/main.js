const images = [
  'img/beach1.jpg', // 0
  'img/beach2.jpg', // 1
  'img/beach3.jpg', // 2
]; // length 3

let currentImageIndex = 0;
let intervalId;
let isSlideshowPlaying = true;

document.addEventListener('keydown', (evt) => {
  switch (evt.code) {
    case 'ArrowLeft':
      updateCurrentImage(-1);
      break;
    case 'ArrowRight':
      updateCurrentImage(+1);
      break;
    case 'Space':
      if (isSlideshowPlaying) {
        stopSlideshow();
        isSlideshowPlaying = false;
        document.querySelector('#pause-img').innerText = 'Play';
      } else {
        startSlideshow();
        isSlideshowPlaying = true;
        document.querySelector('#pause-img').innerText = 'Pause';
      }
      break;
  }
});

document.querySelector('.controls').addEventListener('click', (evt) => {
  const target = evt.target;
  // Wrap around solution
  switch (target.id) {
    case 'prev-img':
      updateCurrentImage(-1);
      break;
    case 'next-img':
      updateCurrentImage(+1);
      break;
    case 'pause-img':
      if (isSlideshowPlaying) {
        stopSlideshow();
        isSlideshowPlaying = false;
        target.innerText = 'Play';
      } else {
        startSlideshow();
        isSlideshowPlaying = true;
        target.innerText = 'Pause';
      }
      break;
    default:
      console.log(`${target} clicked...`);
      break;
  }

  // Stop at the ends solution
  // switch (target.id) {
  //   case 'prev-img':
  //     if (currentImageIndex > 0) {
  //       currentImageIndex -= 1;
  //       displayImage(currentImageIndex);
  //     }

  //     break;
  //   case 'next-img':
  //     if (currentImageIndex < images.length - 1) {
  //       currentImageIndex += 1;
  //       displayImage(currentImageIndex);
  //     }

  //     break;
  //   default:
  //     console.log(`${target} clicked...`);
  //     break;
  // }
});

function updateCurrentImage(direction) {
  if (direction > 0) {
    currentImageIndex += 1;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    displayImage(currentImageIndex);
  } else {
    currentImageIndex -= 1;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    displayImage(currentImageIndex);
  }
}

function displayImage(index) {
  document.querySelector('.gallery img').src = images[index];
}

function startSlideshow() {
  // Set an interval to run through the slideshow
  intervalId = setInterval(() => {
    updateCurrentImage(+1);
  }, 3000);
}

function stopSlideshow() {
  clearInterval(intervalId);
}

function preloadImages(imgArray) {
  imgArray.forEach(imgSrc => {
    const img = new Image();
    img.src = imgSrc;
  });
}

// Preload images
preloadImages(images);

// Start the show
startSlideshow();