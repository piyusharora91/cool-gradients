const color1 = document.querySelector("#Color1");
const color2 = document.querySelector("#Color2");
const body = document.querySelector("#gradient");
const display = document.querySelector("h3");

const changeColor = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    display.textContent = body.style.background + ";";
}

console.log(body.style.background);

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);