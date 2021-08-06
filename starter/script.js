'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='correct Number';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.guess').value);

/* line by line complete code for the application */

// code for random number generating

let SecretNumber =Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent ;
let score = 20 ;
let highscore = 0;


document.querySelector('.check').addEventListener('click',function(){
    //console.log(document.querySelector('.guess').value);
    const guess = document.querySelector('.guess').value;
    //console.log(typeof guess);
    //guess == SecretNumber ? document.querySelector('.message').textContent='🎉correct Number' : document.querySelector('.message').textContent='⛔ no number!'; 
    
    //when there is no input 
    if(!guess){
        document.querySelector('.message').textContent='⛔ no number!';
        score--;
        document.querySelector('.score').textContent = score    ;
    // When player wins 
    }else if(guess == SecretNumber){
        document.querySelector('.message').textContent='🎉correct Number';
        score--;
        document.querySelector('.score').textContent = score ;
        document.querySelector('.number').textContent=SecretNumber ;

        document.querySelector('body').style.backgroundColor='#60b347';

        document.querySelector('.number').style.width='30rem';

        if (score>highscore){
            highscore = score; 
            document.querySelector('.highscore').textContent = highscore; 
        }
    }
    // When player is too high
    else if (guess > SecretNumber){
        if (score>1){
            document.querySelector('.message').textContent='😁🐱‍🏍 To High Number';
            score--;
            document.querySelector('.score').textContent = score    ;
        } else{
            document.querySelector('.message').textContent = '🤧 You lost the game'
            document.querySelector('.score').textContent = '0 ';
        }
    }
    // when player too loww
    else if (guess < SecretNumber){
        if (score>1){
            document.querySelector('.message').textContent='↙ Too low';
            score--;
            document.querySelector('.score').textContent = score    ;
        } else{
            document.querySelector('.message').textContent = '🤧 You lost the game'
            document.querySelector('.score').textContent = '0 ';
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20 ;
    SecretNumber =Math.trunc(Math.random()*20) + 1;

    document.querySelector('.message').textContent='Start guessing';
    document.querySelector('.score').textContent='score';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='30rem';
})

