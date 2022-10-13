// Creating the list of possible choices
list = ["rock", "paper", "scissors"];

//Function defining what the computer chooses:
function getComputerChoice() {
    // randomly generate a number and round it up to 1, 2 or 3
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
        return(`It's a tie! Both sides chose ${playerSelection}. Try again.`);
    }
    // when the player wins:
    else if (gameResult==='win'){
        return(`You won! ${playerSelection} beats ${computerSelection}.`);
    }
    else{
    //when the computer wins:
        return(`You lost! ${computerSelection} beats ${playerSelection}.`);
    }
}

//main game function that compares player's choice to the computer-generated and returs the updated score
function play(playerChoice, score){
    // generate the choice for the computer
    computerChoice = getComputerChoice();
    // determining who won
    gameResult=whoWon(playerChoice, computerChoice);
    //updating the scores:
    if (gameResult==='win') {score[0]++}
    else if (gameResult==='lose'){score[1]++}


    //print out the results
    resultText=document.querySelector('#roundResult')
    scoreText = document.querySelector('#currentScore')
    resultText.textContent = resultMsg(gameResult, playerChoice, computerChoice);
    scoreText.textContent=`Current score is: ${score[0]}-${score[1]}`;
    return([score]); 
}

//initate the original score: 0:0
let scorePlayer = 0;
let scoreComputer = 0;
score = [scorePlayer, scorePlayer];

//if we press a button the game starts with a corresponding playerChoice
playButtons = document.querySelectorAll('.playerChoice');
playButtons.forEach((playButton) => 
    playButton.addEventListener('click', function(e) {
        play(e.target.getAttribute('data-choice'), score);
}));


/*
//print out final message:
let resultString = 
    (scorePlayer>scoreComputer) 
    ? "Congratulations! You won the game!" 
    : "Sorry, you lost the game!";

alert(resultString+`\nFinal score is: ${scorePlayer}-${scoreComputer}\nWanna try again?`);
location.reload();*/