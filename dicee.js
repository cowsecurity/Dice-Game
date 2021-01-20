

// Dice 1

var randomNumber1 = Math.ceil(Math.random() * 6);

var randomDiceImage1 = "dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",randomDiceImage1);

// Dice 2

var randomNumber2 = Math.ceil(Math.random() * 6);

var randomDiceImage2 = "dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",randomDiceImage2);

// Winner announcement

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else {
    document.querySelector("h1").textContent = "Draw!"
}