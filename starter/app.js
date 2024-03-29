/*
This is probably the most basic game possible,it's about as basic as they come,but have fun(IK you are probably bored af otherwise you wouldn't be on github playing random games)
Made by the mastermind himself: Sir Isaac Justin
*/

var scores, roundScore, activePlayer, gamePlaying,limit,lastNOD1,lastNOD2;//NOD = number on dice

init();


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        //2. Display the result
        var diceDOM = document.getElementById('dice-1');
        var dice2DOM = document.getElementById('dice-2');
        diceDOM.style.display = 'block';
        dice2DOM.style.display ='block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice2DOM.src = 'dice-' + dice2 + '.png'


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1 && dice2 !== 1) {
            if((dice === 6 && lastNOD1 === 6) || (dice2 ===6 && lastNOD2 ===6)){
                nextPlayer();
            }else{//Add score
                roundScore += (dice + dice2);
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
                lastNOD1 = dice;
                lastNOD2 = dice2;
            }

            
        } else {
            //Next player
            nextPlayer();
        }
    }    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= limit) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});
document.querySelector('.btn-new').addEventListener('click', init);

 //Function declarations
 function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    limit = prompt('Set a limit to the game');
}
  


  function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');


    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

}

 


