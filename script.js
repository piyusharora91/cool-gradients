var appContainer = document.getElementById('gradient-container');
var gradientValueDisplay = document.getElementById('value-display');
var color1 = document.getElementById('Color1');
var color2 = document.getElementById('Color2');
function changeColorInput(event) {
    if (event.target) {
        appContainer.style.background = "linear-gradient(to right, ".concat(color1.value, ", ").concat(color2.value, ")");
        gradientValueDisplay.textContent = appContainer.style.background;
    }
}
color1.addEventListener('input', changeColorInput);
color2.addEventListener('input', changeColorInput);
