const images = [
    'img/beach1.jpg',
    'img/beach2.jpg',
    'img/beach3.jpg',
];

document.querySelector('#next-img').addEventListener('click', () => {
    document.querySelector('.gallery img').src = images[1];
});

function preloadImages(imgArray) {
    imgArray.forEach(imgSrc => {
        const img = new Image();
        img.src = imgSrc;
    });
}

preloadImages(images);