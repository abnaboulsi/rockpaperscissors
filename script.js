function getComputerChoice() {
    let a = Math.floor(Math.random()* 3)
    if (a == 0) { 
        return "Rock";
    }
    else if (a === 1){
            return "Paper";
        }
    else {
            return "Scissors";
        }
}

function getPlayerChoice() {
    let answer = prompt("Rock, Paper, or Scissors?");

    if (answer.toUpperCase() === "ROCK"){
        return "Rock";
    }
    else if (answer.toUpperCase() === "PAPER"){
        return "Paper";
    }
    else if (answer.toUpperCase() === "SCISSORS"){
        return "Scissors";
    }
    else {
        alert("Choose rock, paper or scissors");
        return getPlayerChoice();
    }

}
let playerScore = 0;
let computerScore = 0;
let tie = 0;

for (let i=0; i<5; i++){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
if (playerChoice === computerChoice) {
    alert("Tie!");
    tie++;
}
else if(computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper" || computerChoice === "Rock" && playerChoice === "Scissors"){ 
    alert("You Lose!");
    computerScore++;
}
else {
    alert("You win!");
    playerScore++;
}

}
alert("Player: " + playerScore + " Computer: " + computerScore + " Ties: " + tie)

