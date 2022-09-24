// Creating the list of possible choices
list = ["rock", "paper", "scissors"];

//Function defining what the computer chooses:
function getComputerChoice() {
    // randomly generate a number a rount it up to 1, 2 or 3
    numChosen = Math.floor(Math.random()*3);
    return(list[numChosen]);
}

//the next function determines who won and prints out the result
function playGame(playerSelection, computerSelection){
    //if it's a tie
    if (playerSelection===computerSelection){
        console.log(`Oh WOW! it's a tie! Both sides chose ${playerSelection}.`);
    }
    // when the player wins:
    else if ((playerSelection==="rock" && computerSelection==="scissors")||
    (playerSelection==="paper" && computerSelection==="rock")||
    (playerSelection==="scissors" && computerSelection==="paper")){
        console.log(`Congratulations! You won! ${playerSelection} beats ${computerSelection}.`);
    }
    else{
    //when the computer wins:
        console.log(`Sorry, you lost! ${computerSelection} beats ${playerSelection}.`);
    }
}

function play(playerSelection){
    let playerChoice = "";
    for (let choices in list) {
        if (list[choices] === playerSelection.toLowerCase()){
            playerChoice=list[choices];
        }
    }
    if (playerChoice === ""){
        console.log("Your choice is not a possible option. Try again: ");
        return null;
    }
    playGame(playerChoice, getComputerChoice());
}

console.log(`To play text "play(*your choice*)"`);