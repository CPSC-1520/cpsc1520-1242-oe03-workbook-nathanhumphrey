const images = [
  'img/beach1.jpg', // 0
  'img/beach2.jpg', // 1
  'img/beach3.jpg', // 2
]; // length 3

let currentImageIndex = 0;

document.querySelector('.controls').addEventListener('click', (evt) => {
  const target = evt.target;
  // Wrap around solution
  switch (target.id) {
    case 'prev-img':
      currentImageIndex -= 1;
      if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }
      displayImage(currentImageIndex);

      break;
    case 'next-img':
      currentImageIndex += 1;

      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
      displayImage(currentImageIndex);

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

function displayImage(index) {
  document.querySelector('.gallery img').src = images[index];
}

function preloadImages(imgArray) {
  imgArray.forEach(imgSrc => {
    const img = new Image();
    img.src = imgSrc;
  });
}

preloadImages(images);