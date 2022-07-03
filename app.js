"use strict";

// Variables to use
let computerChoice = ["Rock", "Paper", "Scissors"];
let scoreComputer = 0;
let scorePlayer = 0;
let winnerLoser;

// Create a function that will randomly return either "Rock, Paper, or Scissors".
function computerPlay(){
    
    let randComputer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randComputer;
    
};





// Create a function that plays a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){

    if(playerSelection == "Rock" && computerSelection == "Rock" || 
        playerSelection == "Paper" && computerSelection == "Paper" ||
        playerSelection == "Scissors" && computerSelection == "Scissors"){

            return "It's a draw!";
        }else if(playerSelection == "Rock" && computerSelection == "Scissors" ||
                playerSelection == "Paper" && computerSelection == "Rock" ||
                playerSelection == "Scissors" && computerSelection == "Paper"){
                    return "You Win!";
                }else{
                    return "You Lose!";
                    
                }
}





function game(){

    for (let i = 0; i < 5; i++){
    
    // Fills the the two parameters in the playRound method with values
    const playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
    const computerSelection = computerPlay();
    
    // Call method to play only one round
    const roundWinner = playRound(playerSelection, computerSelection);

    // Compare the value of playround method to give the score either player or computer
    if (roundWinner == "It's a draw!"){
        //console.log("It' a Draw, score keeps the same!");
    }else if (roundWinner == "You Win!"){
        scorePlayer++;
    }else if (roundWinner == "You Lose!"){
        scoreComputer++;
    }
    }

    if (scorePlayer == 3 || scorePlayer == 4 || scorePlayer == 5){
        console.log("You Win! Congratulation!");
        console.log("Player score: " + scorePlayer + " Computer score: " + scoreComputer);
    }else if(scorePlayer == scoreComputer){
        console.log("It's a Draw, both are bad");
        console.log("Player score: " + scorePlayer + " Computer score: " + scoreComputer);
    }else{
        console.log("You Lose, Computer is better!");
        console.log("Player score: " + scorePlayer + " Computer score: " + scoreComputer);
    }
}

game();