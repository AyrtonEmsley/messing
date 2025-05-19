// script.js
document.getElementById('budgetForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const bank = parseFloat(document.getElementById('bankBalance').value);
  const cashISA = parseFloat(document.getElementById('cashISA').value);
  const pay = parseFloat(document.getElementById('recentPay').value);

  const total = bank + pay;
  let surplus = total - 400;
  let keepInBank = 400;
  let toCashISA = 0;
  let toStocksISA = 0;

  if (surplus > 0) {
    if (cashISA > 5000) {
      // All surplus goes to Stocks ISA
      toStocksISA = surplus;
    } else {
      // 80% to Cash ISA, 20% to Stocks ISA
      toCashISA = surplus * 0.8;
      toStocksISA = surplus * 0.2;
    }
  } else {
    // No surplus, all stays in the bank
    keepInBank = total;
  }

  document.getElementById('results').innerHTML = `
    <p><strong>Keep in Bank:</strong> £${keepInBank.toFixed(2)}</p>
    <p><strong>To Cash ISA:</strong> £${toCashISA.toFixed(2)}</p>
    <p><strong>To Stocks & Shares ISA:</strong> £${toStocksISA.toFixed(2)}</p>
  `;
});
