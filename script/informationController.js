const informationPopup = document.querySelector(".informationPopup");

var informationPopupHasOpen = false;

function changeInformationPopupVisible() {
    if(informationPopupHasOpen) {
        informationPopup.classList.remove("informationPopup-open");
        informationPopup.classList.add("informationPopup-close");
    }
    else {
        informationPopup.classList.add("informationPopup-open");
        informationPopup.classList.remove("informationPopup-close");
    }

    informationPopupHasOpen = !informationPopupHasOpen;
}