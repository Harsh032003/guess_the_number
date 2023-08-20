'use strict';
/*
console.log(document.querySelector('.p1').textContent);
document.querySelector('.p1').textContent = '🎉 Correct Number !';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 0;    📈  📉

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.button2').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.p1').textContent = '⚠️ No number !'
    }
    else if(guess === secretNumber){
        document.querySelector('.p1').textContent = '🎉 Correct Number !';
        document.querySelector('.b1 ').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '200px';

    }
    else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.p1').textContent = '📈 Too High !';
            score--;
            document.querySelector('.score').textContent = score;

        }
        else{
            document.querySelector('.p1').textContent = '💥 You lost the game !';
            document.querySelector('.score').textContent = 0;
        }
       

    }
    else if(guess < secretNumber){
        if(score > 1){
            document.querySelector('.p1').textContent = '📉 Too Low !';
            score--;
            document.querySelector('.score').textContent = score;

        }
        else{
            document.querySelector('.p1').textContent = '💥 You lost the game !';
            document.querySelector('.score').textContent = 0;
        }


        
    }
    
    
})


