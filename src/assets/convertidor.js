function convertToBinary() {
  const decimalInput = document.getElementById('decimal-input');
  const binaryResult = document.getElementById('binary-result');

  const decimalNumber = parseInt(decimalInput.value);
  const binaryNumber = decimalNumber.toString(2);

  binaryResult.textContent = `El número binario es: ${binaryNumber}`;
}

function performSum() {
  const num1Input = document.getElementById('num1-input');
  const num2Input = document.getElementById('num2-input');
  const calcResult = document.getElementById('calc-result');

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const sum = num1 + num2;

  calcResult.textContent = `El resultado de la suma es: ${sum}`;
}

function performSubtraction() {
  const num1Input = document.getElementById('num1-input');
  const num2Input = document.getElementById('num2-input');
  const calcResult = document.getElementById('calc-result');

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const subtraction = num1 - num2;

  calcResult.textContent = `El resultado de la resta es: ${subtraction}`;
}



