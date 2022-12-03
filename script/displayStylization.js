const keyboardOperators = document.querySelectorAll(".keyboardOperators");
const display = document.querySelector(".display");

keyboardOperators.forEach((element) => {
    element.addEventListener("click", () => {
        stylizeDisplay();
    })
})

function stylizeDisplay() {
    let splitText = displayText.innerHTML.split(" ");
    
    splitText.forEach((item, index) => {
        if(item === "%") {
            splitText[index] = `<span style="color: #26fcd5">${item}</span>`;
        }
        else {
            redOperations.forEach((redOperation) => {
                if(redOperation === item) {
                    splitText[index] = `<span style="color: #ec7777">${item}</span>`;
                }
            })
        }
    })
    
    displayText.innerHTML = splitText.join(" ");
}

var fontSize = window.screen.width > 390 ? 2.5 : 1.5;

window.addEventListener('orientationchange', (e) => {
    fontSize = window.screen.width > 390 ? 2.5 : 1.5;
})

const increaseTextSize = () => {
    if(fontSize < 2.5) {
        fontSize = fontSize + (fontSize * 0.015);
        displayText.style.fontSize = `${fontSize}rem`;
        adjustAlignText()
    }
}

const decreaseTextSize = () => {
    let surplusText = displayText.textContent.length - 10;
    if(surplusText > 0)
    {
        fontSize = fontSize * 0.985;
        displayText.style.fontSize = `${fontSize}rem`;
        adjustAlignText()
    }
}

const defaultTextSize = () => {
    let surplusText = displayText.textContent.length - 10;

    if(surplusText > 0)
        fontSize = fontSize + (fontSize * 0.015 * surplusText);
    else
        fontSize = 2.5;

    displayText.style.fontSize = `${fontSize}rem`;
    adjustAlignText();
};

const adjustAlignText = () => {
    let surplusText = displayText.textContent.length - 10;
    if(surplusText > 2)
    {
        displayText.style.textAlign = 'center';
        display.style.justifyContent = 'center';
    }
    else {
        displayText.style.textAlign = '';
        display.style.justifyContent = 'end';
    }
}