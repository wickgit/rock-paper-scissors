let choice;

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection ===  computerSelection) {
        return `Tie! ${playerSelection} don\`t beat and don\`t lose to ${computerSelection}`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Player win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Player win!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Player win!';
    } else {
        return 'Player lost!';
    }
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
    for (i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = window.prompt('Enter your choice: ');
        console.log('User sleection:', playerSelection, 'Computer selection:', computerSelection);
        console.log(oneRound(computerSelection, playerSelection));
    }
}
game();