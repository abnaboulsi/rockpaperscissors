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

    let answer = prompt("Rock, Paper, or Scissors? First to win " + rounds + " rounds will be the winner!");

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

function playRound(computerChoice,playerChoice){

    if(computerChoice === playerChoice){
        return "tie"
    }
    else if(computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Paper" && playerChoice === "Rock" || computerChoice === "Scissors" && playerChoice === "Paper"){
        return "computerWins"
    }
    else{
        return "playerWins"
    }

}

function game(times){
    let tie = 0;
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < times && computerScore < times){
        for(let i = 0; i < times; i++){

            let result = playRound(getComputerChoice(),getPlayerChoice())

            if (result === "tie"){
                tie++;
                i--;
            }
            else if (result === "playerWins"){
                playerScore++;
            }

            else if (result === "computerWins"){
                computerScore++;
            }
    
        }
    }

    alert("Player: " + playerScore + " Computer: " + computerScore + " Ties: " + tie)

    if (playerScore > computerScore){
        alert("You Win! :)")
    }
    else(
        alert ("You lose! :(")
    )

}
let rounds = parseInt(prompt("how many won rounds needed to win?"))
console.log(rounds);

while(rounds < 1 || isNaN(rounds)){
  rounds = parseInt(prompt("Please enter a positive number"));
}
game(rounds);