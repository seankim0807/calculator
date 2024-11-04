let displayValue = ''
let firstNumber = null
let secondNumber = null
let currentOperator = null
let isSecondNumber = false

const display = document.getElementById('display')
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.getElementById('equals')
const clearButton = document.getElementById('clear')

digitButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        displayValue += button.textContent
        display.textContent = displayValue
    })
})

operatorButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        if (!isSecondNumber && displayValue){
            firstNumber = parseFloat(displayValue)
            currentOperator = button.textContent
            displayValue = ''
            isSecondNumber = true
        } else if (isSecondNumber && displayValue){
            secondNumber = parseFloat(displayValue)
            if (currentOperator){
                firstNumber = operate(currentOperator, firstNumber, secondNumber)
                display.textContent = firstNumber
                currentOperator = button.textContent
                displayValue = ''
            }

        }
    })
})

equalsButton.addEventListener('click', () => {
    if (firstNumber != null && displayValue && currentOperator) {
        secondNumber = parseFloat(displayValue);
        const result = operate(currentOperator, firstNumber, secondNumber);

        if (result === "Error: Division by 0 is undefined") {
            display.textContent = "Cannot divide by zero";
        } else {
            display.textContent = result;
        }

        displayValue = result.toString();
        firstNumber = result;
        isSecondNumber = false;
        currentOperator = null;
    } else {
        display.textContent = "Complete the operation";
    }
});

clearButton.addEventListener('click', () =>{
    displayValue = ''
    firstNumber = null
    secondNumber = null
    currentOperator = null
    isSecondNumber = false
    display.textContent = 0

})





// Math functions
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function division(a, b){
    if ( b === 0){
        return "Error: Division by zero is not allowed"
    }
    return a / b;
}

function operate(operator, num1, num2){
    if (operator === '+'){
        return add(num1, num2)
    }
    else if (operator === '-'){
        return subtract(num1, num2)
    }
    else if (operator === '*'){
        return multiply(num1, num2)
    }
    else if (operator === '/'){
        return division(num1, num2)
    }
    else{
        return("Invalid operator")
    }
}