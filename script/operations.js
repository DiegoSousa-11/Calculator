const clearButton = document.getElementById("clearButton");
const comeBack = document.getElementById("comeBack");
const equalButton = document.getElementById("equalButton");
const changeSign = document.getElementById("changeSign");

const allOperations = ["÷", "×", "-", "+", "%"];
const redOperations = ["÷", "×", "-", "+"];

clearButton.addEventListener("click", () => {
    displayText.innerText = "0";
    defaultTextSize();
});

comeBack.addEventListener("click", () => {
    backspace();
});

changeSign.addEventListener("click", () => {
    let splitText = displayText.innerText.split(" ");
    let lastCharacterIsOperation = false;

    allOperations.forEach((item) => {
        if(splitText[splitText.length - 1] === item) {
            return lastCharacterIsOperation = true;
        }
    })

    if(lastCharacterIsOperation === true || displayText.innerText == "0")
        return;
        
    if(splitText.length == 1 && displayText.innerText[0] == "-") 
    {
        return displayText.innerText = displayText.innerText.replace("-", "");
    }

    if(displayText.innerText[displayText.innerText.length - 1] == ")") {
        splitText[splitText.length - 1] = splitText[splitText.length - 1].replace("-", "").replace(")", "").replace("(", "");

        displayText.innerText = "";
        splitText.forEach((item) => displayText.innerText += " " + item);
        
        return;
    }

    if(splitText.length > 1) {
        splitText[splitText.length - 1] = "(-" + splitText[splitText.length - 1] + ")";
        
        displayText.innerText = "";
        splitText.forEach((item) => displayText.innerText += " " + item);
    }
    else {
        displayText.innerText = "-" + displayText.innerText;
    }
})

equalButton.addEventListener("click", () => {
    calculateResult();
})

function backspace() {
    if(displayText.innerText.length == 1)
        displayText.innerText = 0;
    else
        displayText.innerText = displayText.innerText.slice(0, -1);

    increaseTextSize();
    stylizeDisplay();
}

function calculateResult() {
    let calculation = displayText.innerHTML;
    let formatIsValid = true;
    let separateOperations = displayText.innerText.replace("(", "").replace(")", "").split(" ");

    redOperations.forEach((item) => {
        if(item === separateOperations[separateOperations.length - 1]) {
            formatIsValid = false;
        }
    })

    if(!formatIsValid) 
        return startAlert("O formato usado é inválido");

    while(separateOperations.length > 1) {
        separateOperations.forEach((item, index) => {
            if (item === "÷") {
                let operationResult = calculations.divide(separateOperations[index - 1], separateOperations[index + 1]);
        
                separateOperations.splice(index - 1, 2);
                separateOperations[index - 1] = operationResult;
            }
        })

        separateOperations.forEach((item, index) => {
            if(item === "%") {
                let operationResult = calculations.percent(separateOperations[index - 1]);

                separateOperations.splice(index - 1, 1);
                separateOperations[index - 1] = operationResult;
            }
        })

        separateOperations.forEach((item, index) => {
            if (item === "×") {
                let operationResult = calculations.multiply(separateOperations[index - 1], separateOperations[index + 1]);
        
                separateOperations.splice(index - 1, 2);
                separateOperations[index - 1] = operationResult;
            }
        })
        
        separateOperations.forEach((item, index) => {
            if (item === "-") {
                let operationResult = calculations.subtract(separateOperations[index - 1], separateOperations[index + 1]);
                
                separateOperations.splice(index - 1, 2);
                separateOperations[index - 1] = operationResult;
            }
        })

        separateOperations.forEach((item, index) => {
            if (item === "+") {
                let operationResult = calculations.sum(separateOperations[index - 1], separateOperations[index + 1]);
        
                separateOperations.splice(index - 1, 2);
                separateOperations[index - 1] = operationResult;
            }
        })
        displayText.innerText = separateOperations[0];
    }

    calculation += ` = ${displayText.innerText}`;
    addHistoryItems(calculation);
    defaultTextSize();
}