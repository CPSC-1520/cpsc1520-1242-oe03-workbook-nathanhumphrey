// Create an array of "customer" objects
// Braces represent object literal values {}
const customers = [
  {
    id: 1000,
    firstName: 'Jane',
    lastName: 'Doe',
    preferred: false,
  },
  {
    id: 1001,
    firstName: 'Sally',
    lastName: 'Anne',
    preferred: true,
  },
  {
    id: 1002,
    firstName: 'Mary',
    lastName: 'Jane',
    preferred: false,
  },
];

// Task: render a table of all the customers

/**
 * Renders a customer table in the element withe selector
 * `renderSelector`.
 * @param {array} customers
 * @param {string} renderElSelector
 */
function renderCustomerTable(customers, renderElSelector) {
  const renderEl = document.querySelector(renderElSelector);
  let tableHtml = `<table class="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Preferred</th>
                        </tr>
                        </thead>
                        <tbody class="table-group-divider">`;

  // build the customer rows
  // Option 1: loop
  //   for (let idx = 0; idx < customers.length; idx += 1) {
  //     tableHtml += buildCustomerRow(customers[idx]);
  //   }

  // Option 2: forEach
  //   customers.forEach((customer) => {
  //     tableHtml += buildCustomerRow(customer);
  //   });

  // Option 3: map with join
  tableHtml += customers.map(buildCustomerRow).join('');

  tableHtml += `</tbody></table>`;

  renderEl.innerHTML = tableHtml;
}

/**
 * Creates a row for the customer table.
 * @param {*} customer the customer object to render
 * @returns an HTML string for the table row
 */
function buildCustomerRow(customer) {
  // TODO: update the output row to include a checkbox
  // for the preferred attribute. Check if true, unchecked
  // if false.
  return `
        <tr>
            <th scope="row">${customer.id}</th>
            <td>${customer.firstName}</td>
            <td>${customer.lastName}</td>
            <td>${customer.preferred}</td>
        </tr>
    `;
}
