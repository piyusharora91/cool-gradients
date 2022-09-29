const appContainer = document.getElementById('gradient-container') as HTMLDivElement;
const gradientValueDisplay = document.getElementById('value-display') as HTMLHeadingElement;
const color1 = document.getElementById('Color1') as HTMLInputElement;
const color2 = document.getElementById('Color2') as HTMLInputElement;

function changeColorInput(event: Event) {
    if (event.target) {
        appContainer.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
        gradientValueDisplay.textContent = appContainer.style.background;
    }
}

color1.addEventListener('input', changeColorInput);
color2.addEventListener('input', changeColorInput);