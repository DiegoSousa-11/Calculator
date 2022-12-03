const historyButton = document.querySelector(".history");
const historyList = document.querySelector(".historyList");

var historyIsOpen = false;

function changeHistoryVisible() {
    if(historyIsOpen) {
        historyButton.classList.remove("history-open");
        historyButton.classList.add("history-close");
    }
    else {
        historyButton.classList.add("history-open");
        historyButton.classList.remove("history-close");

        if(historyList.querySelectorAll("h2").length === 0) 
            historyList.innerHTML = "<p>Seus cálculos aparecerão aqui!</p>";
    }

    historyIsOpen = !historyIsOpen;
}

function addHistoryItems(item) {
    if(historyList.querySelectorAll("p").length === 1)
        historyList.innerHTML = "";

    historyList.innerHTML += `<h2>${item}</h2>`;
}