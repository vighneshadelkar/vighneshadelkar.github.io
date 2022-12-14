const colors = ["rgb(255, 230, 0)", "rgb(1, 255, 98)", "rgb(89, 163, 228)", "aqua"];

let hex = document.querySelector(".color-text");
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let randomNum = randomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    hex.innerHTML = colors[randomNum];
});

function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}