const keyboardNumbers = document.querySelectorAll(".keyboardNumbers");
const displayText = document.getElementById("displayText");

//Fix button selection bug
const buttons = document.querySelectorAll('button');
for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (element) => {
        element.target.blur();
    });
}

keyboardNumbers.forEach((element) => {
    element.setAttribute("onclick", `fillDisplay(${element.innerText}, 'number')`);
})

function fillDisplay(text, type) {
    if(displayText.textContent.length > 90) 
        return startAlert("Você antingiu o máximo de caracteres!");

    let numberOrOperator = type === "number" ? text : " " + text + " ";

    if(type === "operator")
    {
        if(displayText.innerText == "0")
            return;
            
        var lastElementIsOperator = false;
        allOperations.forEach((item) => {
            if(item === displayText.innerText[displayText.innerText.length - 1])
                lastElementIsOperator = true;
        })
    }

    if(lastElementIsOperator)
        return;

    if(displayText.innerText[displayText.innerText.length - 1] === "%") {
        displayText.innerHTML += "× " + numberOrOperator;
        return stylizeDisplay();
    };

    if(displayText.innerText == "0") 
        displayText.innerHTML = numberOrOperator;
    else
        displayText.innerHTML += numberOrOperator;

    decreaseTextSize();
}

document.body.addEventListener("keydown", (e) => {
    const keyCode = e.key;
    document.getElementById('container').click();

    if(keyCode.match(/^[0-9]/))
        fillDisplay(keyCode, "number");
    else
    {
        switch(keyCode) {
            case "*":
            case "x":
                fillDisplay("×", "operator");
                stylizeDisplay();
                break;

            case "/":
                fillDisplay("÷", "operator");
                stylizeDisplay();
                break;

            case "%":
            case "-":
            case "+":
                fillDisplay(keyCode, "operator");
                stylizeDisplay();
                break;

            case ".":
            case ",":
                fillDisplay(".", "number");
                stylizeDisplay();
                break;

            case "Backspace":
                backspace();
                break;

            case "=":
            case "Enter":
                calculateResult();
                break;
        }
    }
})