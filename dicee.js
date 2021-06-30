
//  For Player 1
function rollTheDice(){
    setTimeout(function(){
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("srcset" , randomImageSource);

// For player 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("srcset" , randomImageSource2);

// conditions

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎁 Player A wins";
}
 else if (randomNumber2 > randomNumber1){
     document.querySelector("h1").innerHTML = " Player B wins 🎁";
 }

 else{
     document.querySelector("h1").innerHTML = "🎁 Draw 🎁";
 }
 var snd = new Audio('dice_roll.mp3');
 snd.play();




});
}