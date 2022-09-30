var appContainer = document.getElementById('gradient-container');
var gradientValueDisplay = document.getElementById('value-display');
var color1 = document.getElementById('Color1');
var color2 = document.getElementById('Color2');
var resetValuesButton = document.getElementById('reset-color-values');
var savedToStore = false;
var loadSavedValues = function () {
    var savedColor1Value = localStorage.getItem('color1');
    var savedColor2Value = localStorage.getItem('color2');
    color1.value = savedColor1Value;
    color2.value = savedColor2Value;
    changeGradientAndHeading();
};
var storeColorValues = function () {
    // Store the color values in the local storage
    localStorage.setItem("color1", color1.value);
    localStorage.setItem("color2", color2.value);
    savedToStore = true;
    localStorage.setItem('inputSaved', JSON.stringify(savedToStore));
};
var changeGradientAndHeading = function () {
    appContainer.style.background = "linear-gradient(to right, ".concat(color1.value, ", ").concat(color2.value, ")");
    gradientValueDisplay.textContent = appContainer.style.background;
};
function changeColorInput() {
    changeGradientAndHeading();
    storeColorValues();
}
var eraseColorValues = function () {
    localStorage.setItem("color1", '');
    localStorage.setItem("color2", '');
    savedToStore = false;
    localStorage.setItem('inputSaved', JSON.stringify(savedToStore));
    location.reload();
};
//set the color if values are present in local storage
if (localStorage.getItem('inputSaved') === 'true') {
    loadSavedValues();
}
color1.addEventListener('input', changeColorInput);
color2.addEventListener('input', changeColorInput);
resetValuesButton.addEventListener('click', eraseColorValues); // removes color values from local storage
