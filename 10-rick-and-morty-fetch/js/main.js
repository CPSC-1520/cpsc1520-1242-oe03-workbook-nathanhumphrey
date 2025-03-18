const endpoint = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

document.querySelector('#btn-fact').addEventListener('click', async () => {
  const response = await fetch(endpoint);
  const fact = await response.json();
  
  document.querySelector('#fact-text').innerText = fact.text;
});
