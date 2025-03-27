const endpoint = 'https://rickandmortyapi.com/api/character/?name=';

const tbody = document.querySelector('tbody');

document.querySelector('#frm-search').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const searchValue = evt.target.elements.search.value;
  const response = await fetch(`${endpoint}${searchValue}`);

  // Clear the tbody
  tbody.innerHTML = '';

  if (response.status == 200) {
    const {results} = await response.json();
    // Create a fragment to hold all the rows
    const frag = document.createDocumentFragment();
    results.forEach((character) => frag.appendChild(createCharacterRow(character)));
    tbody.appendChild(frag);
  } else {
    tbody.appendChild(createNoResultsRow());
  }
});

/**
 * Creates a row for the table with no results
 * @returns a table row indicating no results found
 */
function createNoResultsRow() {
  // '<tr><td colspan="3">No results found.</td></tr>'
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const text = document.createTextNode('No results found.');

  td.setAttribute('colspan', '3');

  td.appendChild(text);
  tr.appendChild(td);

  return tr;
}

/**
 * Creates the row markup for a character.
 * @param {Object} char - a Rick & Morty character
 * @returns A row for the table
 */
function createCharacterRow(char) {
  const tr = document.createElement('tr');
  let td = document.createElement('td');
  const img = document.createElement('img');

  img.setAttribute('src', char.image);
  img.setAttribute('alt', char.name);

  td.appendChild(img);
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = char.name;
  tr.appendChild(td);

  td = document.createElement('td');
  td.innerText = char.status;
  tr.appendChild(td);

  return tr;
}