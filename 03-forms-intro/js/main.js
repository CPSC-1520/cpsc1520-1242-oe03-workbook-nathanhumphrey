// Prompt for required inputs and display a monthly payment

// Required input variables
let principal;
let interestRate;
let numberOfMonths;
let payment;

// Capture input from the user
// TODO: implement some type checking (if-else, loops, etc.) on all inputs
// Make use of isNaN to check for non-convertible values
principal = parseFloat(prompt('Enter principal amount'));
// Other options for converting to a number
// principal = Number(prompt('Enter principal amount'));
// principal = +prompt('Enter principal amount');

interestRate = parseFloat(prompt('Enter annual interest rate')) / 1200;
numberOfMonths = parseInt(prompt('Enter number of years')) * 12;

// If using a function expression, you must assign before use/calling.
// The calculatePayment function would need to be defined here, before
// it is called below to be valid.
//
// const calculatePayment = function (p, i, n) {
//   let upper = i * Math.pow(1 + i, n);
//   let bottom = Math.pow(1 + i, n) - 1;
//   return p * (upper / bottom);
// }

payment = calculatePayment(principal, interestRate, numberOfMonths);

console.log(payment);

displayPayment(payment);

// If using declared functions, you can place them anywhere; here
// we place the calculatePayment and displayPayment functions at
// the end of the file.
//
// We are also using JSDoc to document the functions: https://jsdoc.app/

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
  // Using template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  document.querySelector('.output').innerHTML = `$${payment.toFixed(2)}`;
}
