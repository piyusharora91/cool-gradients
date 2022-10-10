var appContainer = document.getElementById('gradient-container');
var gradientValueDisplay = document.getElementById('value-display');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var resetValuesButton = document.getElementById('reset-color-values');
var loadSavedValues = function () {
    // let savedColor1Value = localStorage.getItem('color1') as string;
    // let savedColor2Value = localStorage.getItem('color2') as string;
    var savedColor1Value = localStorage.getItem('color1');
    var savedColor2Value = localStorage.getItem('color2');
    if (typeof savedColor1Value === 'string' && typeof savedColor2Value === 'string') {
        color1.value = savedColor1Value;
        color2.value = savedColor2Value;
        changeGradientAndHeading();
    }
};
var changeGradientAndHeading = function () {
    appContainer.style.background = "linear-gradient(to right, ".concat(color1.value, ", ").concat(color2.value, ")");
    gradientValueDisplay.textContent = appContainer.style.background;
};
var changeColorInput = function () {
    changeGradientAndHeading();
    // Store the color values in the local storage
    localStorage.setItem("color1", color1.value);
    localStorage.setItem("color2", color2.value);
};
var eraseColorValues = function () {
    localStorage.removeItem("color1");
    localStorage.removeItem("color2");
    color1.value = '#4abde3';
    color2.value = '#2ed64a';
    changeGradientAndHeading();
};
//set the color if values are present in local storage
if (localStorage.getItem('color1') && localStorage.getItem('color2')) {
    loadSavedValues();
}
color1.addEventListener('input', changeColorInput);
color2.addEventListener('input', changeColorInput);
resetValuesButton.addEventListener('click', eraseColorValues); // removes color values from local storage
