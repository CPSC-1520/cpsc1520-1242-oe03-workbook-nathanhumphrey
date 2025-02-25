// Each button will fetch a different data type and display
document.querySelector('.btn-text').addEventListener('click', () => {
  fetch('data/data.txt')
    .then((res) => res.text())
    .then((text) => {
      document.querySelector('.text-output').innerText = text;
    });
});
