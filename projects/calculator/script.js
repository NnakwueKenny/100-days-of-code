const input = document.getElementById('input');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('button');

function getInputValue () {
    return input.value;
}

function getOututValue () {
    return output.value;
}

function addToInput (target) {
    let inputValue = getInputValue();
    inputValue += target.textContent;
    input.value = inputValue;
}

function addToOutput (target) {
    let outputValue = getInputValue();
    outputValue += target.textContent;
    output.value = outputValue;
}

function deleteValue () {
    let inputValue = getInputValue();
    console.log(inputValue)
    if (inputValue.length <= 0) {
        console.log(inputValue.length)
    } else if (inputValue.length > 0) {
        input.value = inputValue.slice(0, -1);
        console.log(input.value.length)
    }
}
function clearInput () {
    input.value = '' ;
}

function clearOutput () {
    output.value = '' ;
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const clicked = e.currentTarget;
        if (e.currentTarget.classList.contains('number')) {
            addToInput(clicked);
        }
        if (e.currentTarget.classList.contains('operator')) {
            if (e.currentTarget.textContent === 'X') {
                input.value += '*' 
            } else {
                addToInput(clicked);
            }
        }
        if (e.currentTarget.id === 'clear') {
            input.value = 0;
        }
        if (e.currentTarget.id === 'equals') {
            clearInput();
            output.value = getInputValue();
        }
        if (e.currentTarget.id === 'del') {
            deleteValue();
        }
    })
})