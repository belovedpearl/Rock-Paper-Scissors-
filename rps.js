let uScore = 0;
let cScore = 0;
const playerSelection = playerPlay()
const computerSelection = computerPlay();
let message = " "

function computerPlay(){
    let choice = ["rock", "paper", "scissors"];
    randomSelection = Math.floor(Math.random() * choice.length);
    randomSelection = choice[randomSelection];
    return randomSelection;
}
function playerPlay(){
    let playerChoice = prompt("CHOOSE YOUR WEAPON!!!");
    //console.log(playerChoice)
    return playerChoice.toLowerCase();
}
    
function oneRound(playerSelection, computerSelection){
   
    
if (playerSelection === computerSelection){message = `You both picked ${playerSelection}`}
else if(computerSelection === "rock" && playerSelection === "scissors"){cScore++
    message = "You lose!!!"}
else if(computerSelection === "scissors" && playerSelection === "paper"){cScore++
    message = "You Lose!!!"}
else if(computerSelection === "paper" && playerSelection === "rock"){uScore++
    message = "You Win!!!"}
else if(computerSelection === "scissors" && playerSelection === "rock"){uScore++
    message = "You Win!!!"}
else if(computerSelection === "paper" && playerSelection === "scissors"){uScore++
    message = "You Win!!!"}
else if(computerSelection === "rock" && playerSelection === "paper"){cScore++
    message = "You Lose!!!"};
return message
}

//console.log(oneRound(playerSelection, computerSelection));

function game(){
    //play the five rounds of the game
    for(let i=0; i < 5; i++){
  const playerSelection = playerPlay()
  const computerSelection = computerPlay();
   oneRound(playerSelection, computerSelection);
}
if (uScore > cScore){return `You beat the computer with ${uScore} to ${cScore}`}
else if(uScore < cScore){return `You lost to computer with ${uScore} to ${cScore}`}
else ("You tied with the computer")
}

console.log(game());