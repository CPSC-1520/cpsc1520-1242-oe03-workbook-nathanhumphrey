// Required input variables
let principal;
let interestRate;
let numberOfMonths;
let payment;

const form = document.querySelector('#payment-form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let isValid = true;

  // Check the principal
  principal = parseInt(form.elements.principal.value);
  if (isNaN(principal) || principal < 100) {
    isValid = false; // the form is NOT valid
    form.elements.principal.classList.add('is-invalid'); // show the user
    form.elements.principal.select(); // select the invalid value
  } else {
    form.elements.principal.classList.remove('is-invalid');
  }

  // TODO: complete the validation for the following fields
  interestRate = parseFloat(form.elements.rate.value) / 1200;
  numberOfMonths = parseInt(form.elements.term.value) * 12;

  if (isValid == true) {
    payment = calculatePayment(principal, interestRate, numberOfMonths);
    console.log(payment);
    displayPayment(payment);
  }
});

/**
 * Calculate the monthly payment for a loan.
 * You can use the following site (or any other site) to check your results:
 * https://www.calculator.net/payment-calculator.html
 *
 * @param {number} p principal amount
 * @param {number} i monthly interest rate
 * @param {number} n number of months
 * @returns {number} monthly payment
 */
function calculatePayment(p, i, n) {
  // Monthly payment formula: https://en.wikipedia.org/wiki/Mortgage_calculator#Monthly_payment_formula
  let upper = i * Math.pow(1 + i, n);
  let bottom = Math.pow(1 + i, n) - 1;
  return p * (upper / bottom);
}

/**
 * Displays the payment in the document
 * @param {number} payment
 */
function displayPayment(payment) {
  // Using contcat
  // document.querySelector('.output').innerHTML = '$' + payment.toFixed(2);

  // Using a formatter
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const formattedPayment = formatter.format(payment);

  // Using template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  document.querySelector('.output').innerHTML = `${formattedPayment}`;
}
