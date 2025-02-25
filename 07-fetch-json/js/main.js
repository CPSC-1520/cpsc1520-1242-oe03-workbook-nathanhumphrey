// Each button will fetch a different data type and display
document.querySelector('.btn-text').addEventListener('click', () => {
  // Using fetch with chained promise calls
  fetch('data/data.txt')
    .then((res) => res.text())
    .then((text) => {
      document.querySelector('.text-output').innerText = text;
    });
});

// Using fetch with async await
document.querySelector('.btn-html').addEventListener('click', async () => {
  const res = await fetch('data/data.html');
  const text = await res.text();

  document.querySelector('.html-output').innerHTML = text;
});

document.querySelector('.btn-json').addEventListener('click', async () => {
  const res = await fetch('data/data.json');
  // Using JSON explicitly
  // const text = await res.text();
  // const json = JSON.parse(text);

  // Using the response
  const json = await res.json();

  document.querySelector('.json-output').innerText = json.message;
});
