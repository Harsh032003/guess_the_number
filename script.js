'use strict';
/*
console.log(document.querySelector('.p1').textContent);
document.querySelector('.p1').textContent = '🎉 Correct Number !';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 0;    📈  📉

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;

document.querySelector('.button2').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess){
        document.querySelector('.p1').textContent = '⚠️ No number !'
    }
    else if(guess === secretNumber){
        document.querySelector('.p1').textContent = '🎉 Correct Number !';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '300px';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }

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

document.querySelector('.hleft').addEventListener('click' , function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '100px';
    document.querySelector('.p1').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

    // if(Number(document.querySelector('.score').textContent) > Number(document.querySelector('.highscore').textContent)){
    //     document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;

    // }
    

})


