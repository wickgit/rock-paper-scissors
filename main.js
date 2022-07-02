// let choice;
// function oneRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     computerSelection = computerSelection.toLowerCase();
//     if (playerSelection ===  computerSelection) {
//         return 'tie';
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//         return 'player';
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         return 'player';
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         return 'player';
//     } else {
//         return 'computer';
//     }
// }

// function computerPlay() {
//     const choice = Math.floor(Math.random() * 3);
//     if (choice === 0){
//         return 'Paper';
//     } else if (choice === 1) {
//         return 'Rock';
//     } else {
//         return 'Scissors';
//     }
// }
 
// function game() {
//     let playerPoints = 0;
//     let computerPoints = 0;
//     let computerSelection = computerPlay();
//     console.log('User sleection:', playerSelection, 'Computer selection:', computerSelection);
//     winner = oneRound(computerSelection, playerSelection);
//     if (winner === 'player') playerPoints += 1;
//     else if (winner === 'computer') computerPoints += 1;
// }
// game();