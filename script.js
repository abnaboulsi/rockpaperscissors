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



