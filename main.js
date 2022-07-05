function oneRound(playerSelection, computerSelection) {
    if (playerSelection ===  computerSelection) {
        return 'tie';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'computer';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'computer';
    } else {
        return 'player';
    }
}

function playerPlay() {
    let playerSelection;
    const bttn = document.querySelectorAll('.play-button');
    bttn.forEach((button) => {    
        button.addEventListener('click', () => {
            return button.value;
        });
    });
}


function computerPlay() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'Paper';
    } else if (choice === 1) {
        return 'Rock';
    } else {
        return 'Scissors';
    }
}
 
function game() {
    let computerSelection;
    let playerSelection;
    let playerPoints = 0;
    let computerPoints = 0;

    const bttn = document.querySelectorAll('.play-button');
    bttn.forEach((button) => {    
        button.addEventListener('click', () => {
            if (playerPoints !== 5 || computerPoints !== 5) {
                playerSelection = button.value;
                computerSelection = computerPlay().toLowerCase();
                winner = oneRound(playerSelection, computerSelection);
                console.log(winner);
                if (winner === 'player') {
                    playerPoints++;
                } else if (winner === 'computer') {
                    computerPoints++;
                }
                console.log(playerPoints, computerPoints);
            }
        });
    });
    if (playerPoints === 5) {
        return 'player';
    } else if (computerPoints === 5) {
        return 'computer';
    }
}

let winner = game();
console.log(winner);