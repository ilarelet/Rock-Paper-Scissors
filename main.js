// Creating the list of possible choices
list = ["rock", "paper", "scissors"];

//Function defining what the computer chooses:
function getComputerChoice() {
    // randomly generate a number a rount it up to 1, 2 or 3
    numChosen = Math.floor(Math.random()*3);
    return(list[numChosen]);
}

//the function that determines who won
function whoWon(playerSelection, computerSelection){
    //if it's a tie
    if (playerSelection===computerSelection){
        return(`tie`);
    }
    // when the player wins:
    else if ((playerSelection==="rock" && computerSelection==="scissors")||
    (playerSelection==="paper" && computerSelection==="rock")||
    (playerSelection==="scissors" && computerSelection==="paper")){
        return(`win`);
    }
    else{
    //when the computer wins:
        return(`lose`);
    }
}

//the function that prints out the result
function resultMsg(gameResult, playerSelection, computerSelection){
    //if it's a tie
    if (gameResult==='tie'){
        console.log(`It's a tie! Both sides chose ${playerSelection}. Try again.`);
    }
    // when the player wins:
    else if (gameResult==='win'){
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
    }
    else{
    //when the computer wins:
        console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
    }
}

function play(){
    scoreComputer = 0;
    scorePlayer = 0;
    for (let i=0; i<5; i++){  // playing the game times
        let playerSelection = prompt("Enter your choice: "); //prompting players choice as a string
        let playerChoice = "";   // that var will have a correctly spelled choice from the list
        for (let choices in list) {  // checking if the entered selection is in the list
            if (list[choices] === playerSelection.toLowerCase()){
                playerChoice=list[choices];  
            }
        }
        if (playerChoice === ""){  // if the selection is incorrect that variaable will stay empty
            console.log("Your choice is not a possible option. Try again: ");
            i=i-1; //if we do not play we stay on the same round
            continue;
        };
        // generate the choice for the computer
        computerChoice = getComputerChoice();
        // determining who won
        gameResult=whoWon(playerChoice, computerChoice);
        //updating the scores:
        if (gameResult==='win') {scorePlayer++}
        else if (gameResult==='lose'){scoreComputer++}
        else {
            i=i-1; //if it is a tie the round doesn't count
        };
        //print out the results
        resultMsg(gameResult, playerChoice, computerChoice);
        console.log(`Current score is: ${scorePlayer}-${scoreComputer}`);
        if (scorePlayer===3 || scoreComputer===3){
            return(scorePlayer, scoreComputer);
        }
    }
    return(scorePlayer, scoreComputer);
}

let scorePlayer = 0;
let scoreComputer = 0;
scorePlayer, scoreComputer = play();
//print out final message:
let resultString = 
    (scorePlayer>scoreComputer) 
    ? "Congratulations! You won the game!" 
    : "Sorry, you lost the game!";

alert(resultString+`\nFinal score is: ${scorePlayer}-${scoreComputer}\nWanna try again?`);
location.reload();