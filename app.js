"use strict";


// Getting rock, paper and scissor images into variables
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// Options for computer
let computerRock = document.querySelector("#rock");
let computerPaper = document.querySelector("#paper");
let computerScissors = document.querySelector("#scissors");

// Computer and Player scoring input fields
let playerScoring = document.querySelector("#playerScoring");
let computerScoring = document.querySelector("#computerScoring");

// Set scoring values to zero
let playerCounter = 0;
let computerCounter = 0;

// Setting variable for draw
let draw = document.querySelector(".draw");

// Create array and put rock, paper and scissors into it
let computerChoice = [];

computerChoice[0] = computerRock;
computerChoice[1] = computerPaper;
computerChoice[2] = computerScissors;

// Create function that randomly picks rock, paper or scissors for computer
function computerPlay() {
    let randComputer = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randComputer;
}

// Put random computer value into variable
//let computerChoiceValue = computerPlay();

//Create event listener for rock image
rock.addEventListener("click", () => {
    // Put random computer value into variable
    let computerChoiceValue = computerPlay();

    // Remove active class from draw field to make it invisible
    draw.classList.remove("active");

    // When player and computer have the same value
    if (rock == computerChoiceValue) {
        draw.classList.add("active");
    }else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }

    if (computerChoiceValue == paper && playerCounter < 3 && computerCounter < 3){
        computerCounter++;
        computerScoring.innerHTML = computerCounter;
    } else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }

    if (computerChoiceValue == scissors && playerCounter < 3 && computerCounter < 3){
        playerCounter++;
        playerScoring.innerHTML = playerCounter;
    }else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }
})


//Create event listener for paper image
paper.addEventListener("click", () => {
    // Put random computer value into variable
    let computerChoiceValue = computerPlay();

    // Remove active class from draw field to make it invisible
    draw.classList.remove("active");

    // When player and computer have the same value
    if (paper == computerChoiceValue) {
        draw.classList.add("active");
    }else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }

    if (computerChoiceValue == rock && playerCounter < 3 && computerCounter < 3){
        playerCounter++;
        playerScoring.innerHTML = playerCounter;
    } else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }

    if (computerChoiceValue == scissors && playerCounter < 3 && computerCounter < 3){
        computerCounter++;
        computerScoring.innerHTML = computerCounter;
    }else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }
})


//Create event listener for scissors image
scissors.addEventListener("click", () => {
    // Put random computer value into variable
    let computerChoiceValue = computerPlay();

    // Remove active class from draw field to make it invisible
    draw.classList.remove("active");

    // When player and computer have the same value
    if (scissors == computerChoiceValue) {
        draw.classList.add("active");
    }else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }

    if (computerChoiceValue == rock && playerCounter < 3 && computerCounter < 3){
        computerCounter++;
        computerScoring.innerHTML = computerCounter;
    } else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }

    if (computerChoiceValue == paper && playerCounter < 3 && computerCounter < 3){
        playerCounter++;
        playerScoring.innerHTML = playerCounter;
    }else if(computerCounter == 3) {
        alert("You Lost, try again!!");
    }else if(playerCounter == 3){
        alert("You win, congratulation!!");
    }
})
