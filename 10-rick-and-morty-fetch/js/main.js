const endpoint = 'https://rickandmortyapi.com/api/character/?name=';

document.querySelector('#frm-search').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const searchValue = evt.target.elements.search.value;
  const response = await fetch(`${endpoint}${searchValue}`);

  if (response.status == 200) {
    const {results} = await response.json();
    document.querySelector('tbody').innerHTML = results.map(createCharacterRow).join('');
  } else {
    document.querySelector('tbody').innerHTML = '<tr><td colspan="3">No results found.</td></tr>';
  }
});

/**
 * Creates the row markup for a character.
 * @param {Object} char - a Rick & Morty character
 * @returns A row for the table
 */
function createCharacterRow(char) {
  return `<tr>
            <td><img src="${char.image}" alt="${char.name}"></td>
            <td>${char.name}</td>
            <td>${char.status}</td>
          </tr>`;
}