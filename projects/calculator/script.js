/*
function getUnformattedNumber (value) {
    if (value.length >= 1) {
        return value.parseFloat(str.replaceAll(',', ''));
    }
    else {
        return '';
    }
}

function getFormattedNumber (getInputValue) {
    return getInputValue.toLocaleString();
}
*/

const input = document.getElementById('input');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('button');

function getInputValue () {
    const inputValue = input.value;
    return inputValue;
}

function printInput (target) {
    input.value = editInput(target);
}

function editInput (target) {
    let inputValue = getInputValue();
    const targetContent = target.textContent;
    const operatorContent = document.querySelectorAll('.operator');
    let holder = [];
    operatorContent.forEach((operator) => {
         holder.push(operator.textContent);
    })
    console.log(holder);
    // const operators = Array.from(operatorContent);
    // console.log(`These are the operators: ${operators.textContent}`);
    if (target.classList.contains('number')) {
        inputValue += targetContent;
        return inputValue;
    } else if (target.id === 'decimal') {
        // inputValue = parseFloat(inputValue);
        console.log(typeof inputValue);
        inputValue += targetContent
        return inputValue;
    } else if (target.classList.contains('operator')) {
        let lastCharacter = inputValue.slice(-1);
        console.log('This is the last chatacter: ' + lastCharacter);
        console.log(typeof lastCharacter);

        console.log('This is the remaining value for input: ' + inputValue.slice(0));
        console.log(`Is holder.includes(lastCharacter) true or false?: ${holder.includes(lastCharacter)}`)
        console.log(`This true or false?: ${holder}`)
        if (holder.includes(lastCharacter)) {
            inputValue = inputValue.slice(0,-1);
            console.log('This is the inputValue before adding operator: ' + inputValue);
            inputValue += targetContent;
            console.log('This inputValue after adding operator: ' + inputValue);
            return inputValue;
        } else {
            inputValue += targetContent;
            return inputValue;
        }
    } else if (target.id === 'del') {
        inputValue = inputValue.slice(0,-1);
        return inputValue;
    } else if (target.id === 'clear') {
        inputValue = '';
        return inputValue;
    } else if (target.id === 'equals') {
        console.log(inputValue);
        let evaluate = eval(inputValue);
        console.log(evaluate)
        return evaluate;
    }
    // console.log(inputValue);
    // inputValue += target.textContent;
    // input.value = inputValue;
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let clicked = e.currentTarget;
        printInput(clicked);
    })
})