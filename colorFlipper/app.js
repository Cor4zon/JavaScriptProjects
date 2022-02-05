let colors = ['red', 'green', "rgba(133, 122, 102)",  "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    console.log("nice");
    let randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})