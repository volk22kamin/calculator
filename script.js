const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');
const display = document.querySelector('h1');


const calculate = {
    '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '*': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => secondNumber,
};


// variables
let firstValue = 0;
let operator = '';
let awaitsInput = false;






// displaying the input on the screen
const sendInputToDisplay = (number) => {
    if(awaitsInput) {
        display.textContent = number;
        awaitsInput = false;
    } else {
        display.textContent = display.textContent === '0' ? number: display.textContent + number;
    }
}

const clearScreen = () => {
    awaitsInput = false;
    firstValue = 0;
    operator = '';
    display.textContent = '0';
}


const useOperators = (operator) => {
    if(!display.textContent) return;
    if(awaitsInput) {
        operatorValue = operator;
        return;
    };
    const currentValue = Number(display.textContent);
    if(!firstValue){
        firstValue = currentValue;
    } else {
        const calculation = calculate[operatorValue](firstValue, currentValue);
        display.textContent = calculation;
        firstValue = calculation;
    }
    awaitsInput = true;
    operatorValue = operator;
}


const addDecimal = () => {
    if(awaitsInput) return;
    if(!display.textContent.includes('.')) sendInputToDisplay('.');
}








// adding event listeners to all the buttons
inputBtns.forEach((inputBtn) => {
    if(inputBtn.classList.length === 0){
        inputBtn.addEventListener('click', () => sendInputToDisplay(inputBtn.value));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperators(inputBtn.value));
    }
    else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click',addDecimal);
    }
})

clearBtn.addEventListener('click', clearScreen);