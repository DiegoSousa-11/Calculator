const body = document.body;
let darkThemeIsActive = localStorage.getItem("darkThemeIsActive");

window.addEventListener("load", () => {
    body.classList = darkThemeIsActive === "true" ? "darkTheme" : "lightTheme";
})

const switchTheme = () => {
    darkThemeIsActive = !darkThemeIsActive;
    body.classList = darkThemeIsActive ? "darkTheme" : "lightTheme";
    localStorage.setItem("darkThemeIsActive", darkThemeIsActive);
}