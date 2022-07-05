let playerPoints = 0;
let computerPoints = 0;
let roundWinner = '';
let playerSelection;
let winner;
let tries = 0;

// Making objects for modifying scores 
const playerPointsDisplay = document.getElementById('player-score');
const computerPointsDisplay = document.getElementById('computer-score');
const overallTries = document.getElementById('overall-score'); 


function oneRound(playerSelection) {
    let computerSelection = computerPlay(); 
    if (playerSelection ===  computerSelection) {
        roundWinner = 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerPoints++;
        computerPointsDisplay.textContent = `Computer: ${computerPoints}`;
        roundWinner = 'Computer';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerPoints++;
        computerPointsDisplay.textContent = `Computer: ${computerPoints}`;
        roundWinner = 'Computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerPoints++;
        computerPointsDisplay.textContent = `Computer: ${computerPoints}`;
        roundWinner = 'Computer';
    } else {
        playerPoints++;
        playerPointsDisplay.textContent = `Player: ${playerPoints}`;
        roundWinner = 'Player';
    }
    tries++;
    overallTries.textContent = `Tries: ${tries}`;
}


// Check if any player has 5 points => game ends
function isOver() {
    if (playerPoints === 5 || computerPoints === 5) {
        return true;
    } else {
        return false;
    }
}


function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'paper';
    } else if (choice === 1) {
        return 'rock';
    } else {
        return 'scissors';
    }
}


// Append child element to a scores div with a winner of the game in it
function displayWinner() {
    const winnerDisplay = document.createElement('h2');
    if (winner === 'Player') {    
        winnerDisplay.textContent = 'You won! Congratulations!'
    } else {
        winnerDisplay.textContent = 'You lost :( Better luck next time!'
    }
    const scoreDiv = document.querySelector('.winner-banner');
    scoreDiv.appendChild(winnerDisplay);
}

function game(e) {
    if (e.target.classList.contains('play-button')) {
        playerSelection = e.target.value.toLowerCase();
        oneRound(playerSelection);
        if (roundWinner === 'Tie') {
            winDisplay.textContent = 'Tie!';
        } else {
            winDisplay.textContent = `${roundWinner} won !!!`;
        }
        console.log(playerPoints, computerPoints);

        if (isOver()) {
            if (playerPoints > computerPoints) {
                winner = 'Player';
            } else {
                winner = 'Computer';
            }
            document.removeEventListener('click', game);
            displayWinner();
        }
    };
}

const winDisplay = document.getElementById('won-display');

document.addEventListener('click', game);
