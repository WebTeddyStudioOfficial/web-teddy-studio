	let displayValue = '';

    function updateDisplay() {
      document.getElementById('display').innerText = displayValue;
    }

    function calculatorAppendChar(char) {
      displayValue += char;
      updateDisplay();
    }

    function calculatorClearDisplay() {
      displayValue = '0';
      updateDisplay();
    }

    function calculatorCalculate() {
      try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
      } catch (error) {
        displayValue = 'Error';
        updateDisplay();
      }
    }