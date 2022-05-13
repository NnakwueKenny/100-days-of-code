const output = document.getElementById('output');
const history = document.getElementById('history');
const buttons = document.querySelectorAll('button');

function getEditValue () {
    let historyValue = history.value;
    let outputValue = output.value;
    if (outputValue.length < 1) {
        if (historyValue.length < 1) {
            outputValue = '';
        } else if (historyValue.length >= 1) {
            outputValue = `${historyValue} `;
            output.value = outputValue;
            historyValue = '';
            history.value = historyValue;
        }
    } else {
        outputValue = outputValue;
    }
    return outputValue;
}

function printOutput (target) {
    if (target.id == 'equals') {
        history.value = editOutput(target);
        output.value = ''
    } else {
        output.value = editOutput(target);
    }
}

function editOutput (target) {
    let outputValue = getEditValue();
    const targetContent = target.textContent;
    const operatorContent = document.querySelectorAll('.operator');
    let holder = [];
    operatorContent.forEach((operator) => {
         holder.push(operator.textContent);
    })
    if (target.classList.contains('number')) {
        outputValue += targetContent;
        return outputValue;
    } else if (target.id === 'decimal') {
        const holder2 = [];
        for (let i = 0; i < outputValue.length; i++) {
            holder2.push(outputValue.charAt(i));
        }
        if (outputValue.length <= 0) {
            outputValue += targetContent;
        } else {
            if (holder2.includes(targetContent)) {

            } else {
                outputValue += targetContent;
            }
        }
        return outputValue;
    } else if (target.classList.contains('operator')) {
        if (outputValue.length < 1) {
            return outputValue;
        } else {
            let lastCharacter = outputValue.slice(-1);
            if (holder.includes(lastCharacter)) {
                outputValue = outputValue.slice(0,-1);
                outputValue += targetContent;
                return outputValue;
            } else {
                outputValue += targetContent;
                return outputValue;
            }
        }
    } else if (target.id === 'del') {
        outputValue = outputValue.slice(0,-1);
        return outputValue;
    } else if (target.id === 'clear') {
        outputValue = '';
        history.value = '';
        return outputValue;
    } else if (target.id === 'equals') {
        outputValue = eval(outputValue);
        if (outputValue == undefined  ) {
            return 0;
        } else {
            return outputValue;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let clicked = e.currentTarget;
        printOutput(clicked);
    });
});