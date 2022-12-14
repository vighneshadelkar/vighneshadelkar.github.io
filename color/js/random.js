const colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let hex = document.querySelector(".color-text");
let btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    let string = "";
    for (let i = 0; i < 6; i++) {
        let randomNum = randomNumber();
        string = string + randomNum;
    }
    document.body.style.backgroundColor = "#" + string;
    hex.innerHTML = string;
    // console.log(string);
});

function randomNumber() {
    return Math.floor(Math.random() * 6)
}