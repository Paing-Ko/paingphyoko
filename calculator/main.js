const operand1Input = document.getElementById("operand1Input");
const operatorSelect = document.getElementById("operatorSelect");
const operand2Input = document.getElementById("operand2Input");
const resultInput = document.getElementById("resultInput");

function updateResultInput() {
  const operand1 = parseFloat(operand1Input.value);
  const operator = operatorSelect.value;
  const operand2 = parseFloat(operand2Input.value);
  let result;

  if (operator === "+") {
    result = operand1 + operand2;
  } else if (operator === "-") {
    result = operand1 - operand2;
  } else if (operator === "*") {
    result = operand1 * operand2;
  } else if (operator === "/") {
    result = operand1 / operand2;
  } else {
    result = NaN;
  }

  if (!isNaN(result)) {
    resultInput.value = result;
  } else {
    resultInput.value = "";
  }
}

operand1Input.addEventListener("input", updateResultInput);
operatorSelect.addEventListener("change", updateResultInput);
operand2Input.addEventListener("input", updateResultInput);
