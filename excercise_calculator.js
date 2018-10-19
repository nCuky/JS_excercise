// Excercise: Calculator

let calculatorMatrix = [];

const cAdd = "+",
  cSubtract = "-",
  cMultiply = "*",
  cDivide = "/",
  cModulus = "%",
  cPower = "^",
  cEquals = "=";

let operand1, operator, operand2;
whichOperand = 0;

function initializeMatrix() {
  for (let i = 0; i <= 9; i++) {
    calculatorMatrix[i] = i;
  }
}

function setOperator(_operator) {
  operator = _operator;
  document.getElementById("operator").innerHTML = operator;
}

function setWhichOperand(_whichOperand) {
  whichOperand = _whichOperand;
}

function setEnteredOperand1(number) {
  operand1 = number;
  document.getElementById("operand1").innerHTML = operand1;
}

function setEnteredOperand2(number) {
  operand2 = number;
}

function calculateResult() {
  debugger;

  let result,
    intOperand1 = parseInt(operand1),
    intOperand2 = parseInt(operand2);

  switch (operator) {
    case cAdd: {
      result = intOperand1 + intOperand2;
      break;
    }
    case cSubtract: {
      result = intOperand1 - intOperand2;
      break;
    }
    case cMultiply: {
      result = intOperand1 * intOperand2;
      break;
    }
    case cDivide: {
      if (operand2 != 0) {
        result = intOperand1 / intOperand2;
      } else {
        result = 0;
      }
      break;
    }
    case cEquals: {
      result = intOperand1;
      debugger;
      setEnteredOperand1(null);
      setOperator(null);

      break;
    }
    default: {
      break;
    }
  }

  document.getElementById("inputArea").value = null;
  document.getElementById("resultArea").value = result;

  return result;
}

function eventClick(input) {
  debugger;

  let inputType = typeof input;

  switch (inputType) {
    case "string": {
      if (operand1 == undefined) {
        setEnteredOperand1(document.getElementById("inputArea").value);
        setOperator(input);
        setWhichOperand(1);
      } else {
        setEnteredOperand2(document.getElementById("inputArea").value);
        setEnteredOperand1(calculateResult());

        setEnteredOperand2(undefined);

        setOperator(input);
        setWhichOperand(1);
      }

      document.getElementById("inputArea").value = null;

      break;
    }
    case "number": {
      document.getElementById("inputArea").value &= input;

      switch (whichOperand) {
        case 0: {
          setEnteredOperand1(document.getElementById("inputArea").value);
          break;
        }
        case 1: {
          setEnteredOperand2(document.getElementById("inputArea").value);
          break;
        }
      }
      break;
    }
  }
}
