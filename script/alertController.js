const alertContainer = document.querySelector(".alertContainer");
const progressBar = document.querySelector(".alertStatusBar div");
const textAlert = document.querySelector(".alert p");
var countdownPercent = 0;
var startProgress;

function startAlert(text) {
    if(countdownPercent > 0) 
        return;
        
    textAlert.textContent = text;
    alertContainer.style.bottom = "2rem";
    startProgress = setInterval(addProgress, 30);

    function addProgress() {
        countdownPercent += 1;
        progressBar.style.width = `${countdownPercent}%`;

        if(countdownPercent >= 120)
            endAlert();
    }
}

function endAlert() {
    clearInterval(startProgress);
    countdownPercent = 0;
    alertContainer.style.bottom = "-22rem";
    progressBar.style.width = "0%";
}