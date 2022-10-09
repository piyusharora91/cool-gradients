const appContainer = document.getElementById('gradient-container') as HTMLDivElement;
const gradientValueDisplay = document.getElementById('value-display') as HTMLHeadingElement;
const color1 = document.getElementById('color1') as HTMLInputElement;
const color2 = document.getElementById('color2') as HTMLInputElement;
const resetValuesButton = document.getElementById('reset-color-values') as HTMLButtonElement;

const loadSavedValues = () => {
    let savedColor1Value = localStorage.getItem('color1')!;
    let savedColor2Value = localStorage.getItem('color2')!;
    color1.value = savedColor1Value;
    color2.value = savedColor2Value;
    changeGradientAndHeading();
}

const changeGradientAndHeading = () => {
    appContainer.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    gradientValueDisplay.textContent = appContainer.style.background;
}

const changeColorInput = () => {    // when user provides input this method runs
    changeGradientAndHeading();

    // Store the color values in the local storage
    localStorage.setItem("color1", color1.value);
    localStorage.setItem("color2", color2.value);
}

const eraseColorValues = () => {
    localStorage.removeItem("color1");
    localStorage.removeItem("color2");
    color1.value = '#4abde3';
    color2.value = '#2ed64a';
    changeGradientAndHeading();
}

//set the color if values are present in local storage
if (localStorage.getItem('color1') && localStorage.getItem('color2')) {
    loadSavedValues();
}

color1.addEventListener('input', changeColorInput);
color2.addEventListener('input', changeColorInput);

resetValuesButton.addEventListener('click', eraseColorValues);  // removes color values from local storage