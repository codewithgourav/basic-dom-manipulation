'use strict';

console.log(document.querySelector('.message').textContent); //getting the text from an element

// Well, DOM stands for Document Object Model, and it is,
// basically, a structured representation of HTML documents.
// The DOM allows us to use JavaScript to access HTML elements
// and styles in order to manipulate them.
// For example, we will be able to change text,
// to change HTML attributes and also to change
// CSS styles from our JavaScript.
// So we can say that DOM is basically a connection point
// between HTML documents and JavaScript code. https://prnt.sc/21o58m3

/*document.querySelector('.message').textContent = "Guess The Correct Number"; //setting text to the element
console.log(document.querySelector('.message').textContent); 

document.querySelector('.score').textContent = 30;
document.querySelector('.number').textContent = 21;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)*/

/*document.querySelector('.check').addEventListener('click', function(){
    var guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess)

    if(!guess){}
    document.querySelector('.message').textContent = "Number Missing!";
})*/ //First Event Listener

var secretNumber = Math.trunc(Math.random()*20)+1;
var score = 20;
var highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
    var guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    
    if(!guess){
        document.querySelector('.message').textContent = "Missing Number!"
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = "Correct Guess!"
        score = score +1;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "20rem";
        document.querySelector('.number').textContent = secretNumber;
        
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if( guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Number is Too high!"
            score = score -1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost The Game!"
            document.querySelector('.score').textContent = 0
        }
    } else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = "Number is Too low!"
            score = score -1;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You Lost The Game!"
            document.querySelector('.score').textContent = 0 
        }      
    }
})

//Restoring things to default value
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent = Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent = "Start Guessing!";
    document.querySelector('body').style.backgroundColor = "#222222";
    document.querySelector('.number').textContent= "?";
})