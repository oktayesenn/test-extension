document.addEventListener('DOMContentLoaded', function () {
    const amountInput = document.getElementById('amount');
    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
    const resultElement = document.getElementById('result');
    const convertButton = document.getElementById('convert');
  
    // Replace this with actual exchange rate data.
    const exchangeRates = {
      USD: { EUR: 0.85, GBP: 0.75, TRY: 13.60 },
      EUR: { USD: 1.18, GBP: 0.89, TRY: 15.88 },
      GBP: { USD: 1.32, EUR: 1.12, TRY: 16.75 },
      TRY: { USD: 0.073, EUR: 0.063, GBP: 0.059 },
    };
  
    // Populate currency select options.
    for (const currency in exchangeRates) {
      const option1 = document.createElement('option');
      option1.value = currency;
      option1.textContent = currency;
      fromCurrencySelect.appendChild(option1);
  
      const option2 = document.createElement('option');
      option2.value = currency;
      option2.textContent = currency;
      toCurrencySelect.appendChild(option2);
    }
  
    // Function to convert currency and update the result.
    function convertCurrency() {
      const amount = parseFloat(amountInput.value);
      const fromCurrency = fromCurrencySelect.value;
      const toCurrency = toCurrencySelect.value;
  
      if (!isNaN(amount) && fromCurrency && toCurrency) {
        const exchangeRate = exchangeRates[fromCurrency][toCurrency];
        const convertedAmount = amount * exchangeRate;
        resultElement.textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
      } else {
        resultElement.textContent = 'Invalid input';
      }
    }
  
    // Convert button click event.
    convertButton.addEventListener('click', convertCurrency);
  
    // Initial conversion.
    convertCurrency();
  });
  