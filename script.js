
function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const days = parseInt(document.getElementById('days').value);

  if (isNaN(principal) || isNaN(rate) || isNaN(days) || principal <= 0 || rate <= 0 || days <= 0) {
    document.getElementById('result').innerHTML = "<strong>Please enter valid positive values.</strong>";
    return;
  }

  const finalAmount = principal * Math.pow(1 + (rate / 100) / 365, days);
  const interest = finalAmount - principal;

  document.getElementById('result').innerHTML =
    `<strong>Final Amount:</strong> ₹${finalAmount.toFixed(2)}<br>` +
    `<strong>Total Interest Earned:</strong> ₹${interest.toFixed(2)}`;
}
