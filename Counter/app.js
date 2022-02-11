
const btnDecrease = document.getElementsByClassName('decrease');
const btnReset = document.getElementsByClassName('reset');
const btnIncrease = document.getElementsByClassName('increase');


let counterValue = parseInt(document.querySelector("#value"));


btnDecrease.addEventListener('click', function() {
    counterValue--;
    console.log(counterValue);
})

btnReset.addEventListener('click', function() {
    counterValue = 0;
    console.log(counterValue);
})

btnIncrease.addEventListener('click', () => {
    counterValue++;
    console.log(counterValue);
})