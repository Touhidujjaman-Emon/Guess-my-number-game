'use strict';
let score = 20 ;
let secretNumber = Math.trunc(Math.random()*20)+1 ;
let highScore = 0 ;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message ;
}

const displayNumber = function(number) {
    document.querySelector('.number').textContent = number ;
}

const displayScore = function(score) {
    document.querySelector('.score').textContent = score ;
}

document.querySelector('.check').addEventListener('click' , function (){

    const guess = Number(document.querySelector('.guess').value) ;


if(!guess) {
    displayMessage(' Provide a number !');
} else if (guess === secretNumber) {
    displayMessage('Correct number !') ;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);

    if(score > highScore){
    highScore = score ;
    document.querySelector('.highscore').textContent = highScore ;
    }

} else if (guess !== secretNumber) {

    if (score > 1) {
    displayMessage(guess > secretNumber ? 'Too high !': 'Too low !');
    score-- ;
    displayScore(score)
   }else {
    displayMessage('You lost the game !');
   displayScore(0);
} 
}
})


document.querySelector('.again').addEventListener('click' , function (){
     
    score = 20 ;
    displayScore(score)

    secretNumber = Math.trunc(Math.random()*20)+1 ;

    displayNumber('?');

    document.querySelector('body').style.backgroundColor = '#222';

    displayMessage('Start guessing...')

    document.querySelector('.guess').value = '' ;

    document.querySelector('.number').style.width = '15rem'; 

   
})