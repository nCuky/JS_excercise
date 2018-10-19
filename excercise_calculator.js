// Excercise: Calculator

let calculatorMatrix = new Array[10];

const cAdd = "+",
      cSubtract = "-",
      cMultiply = "*",
      cDivide = "/",
      cModulus = "%",
      cPower = "^",
      cEquals = "=";

let operand1,
operator,
operand2;
whichOperand = 0;
inputTextBoxValue;

function initializeMatrix(){
for (let i = 0; i < Array.length(calculatorMatrix); i++){
calculatorMatrix[i] = i;

}

}

function setOperator(_operator)
{
    operator = _operator;
}

function setWhichOperand(_whichOperand)
{
    whichOperand = _whichOperand;
}

function setEnteredOperand1(number)
{
operand1 = number;
}

function setEnteredOperand2(number)
{
operand2 = number;
}

function calculateResult()
{
    let result;

    switch (operation)
    {
        case cAdd:
        {
            result = operand1 + operand2;
        }
        case cSubtract:
        {
            result = operand1 - operand2;
        }
        case cMultiply:
        {
            result = operand1 * operand2;
        }
        case cDivide:
        {
            if (operand2 != 0)
            {
                result = operand1 / operand2;
            }
            else{
                result = 0;
            }
        }
        case cEquals:
        {
            result = operand1;
        }
    }

    return result;
}

function eventClick(input)
{
    let inputType = typeof(input);

    switch (inputType)
    {
        case "string":
        {
            if (operand1 == undefined)
            {
                setEnteredOperand1(inputTextBoxValue);
                setOperator(input);
                setWhichOperand(1);
            }
            else{
                setEnteredOperand2(inputTextBoxValue);
                setEnteredOperand1(calculateResult());            
                inputTextBoxValue = operand1;

                setEnteredOperand2(undefined);

                setOperator(input);
                            setWhichOperand(1);
            }
        }
        case "number":
        {
            inputTextBoxValue &= input;
            
            switch (whichOperand){
                case 0:
                {
            setEnteredOperand1(inputTextBoxValue);
                }
                case 1:
                {
                setEnteredOperand2(inputTextBoxValue);
            }
        }
    }
}