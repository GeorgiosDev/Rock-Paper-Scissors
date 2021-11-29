//Declaring variables for every html element i need to manipulate
let userScore = 0; 
let computerScore = 0;
let userPoints = document.getElementById("user-score");
let computerPoints = document.getElementById("computer-score");
let board = document.querySelector(".scoreboard");
let result = document.querySelector(".result");
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");



//my computerPlay function for a random choice
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computer =  Math.floor(Math.random()*choices.length);
    return choices[computer];
    
}


// Create a function to keep scores when player wins
function wins(user,computer) 
{             
        userScore += 1;
        result.innerHTML = `${user} beats ${computer}.You win!!`
        userPoints.innerHTML = userScore;
        computerPoints.innerHTML = computerScore;

}


//Function for players losses
function losses(user, computer)
{         
        computerScore += 1;
        result.innerHTML = `${computer} beats ${user}.You lost!!`
        computerPoints.innerHTML = computerScore;
        userPoints.innerHTML = userScore;

}

//And one for a draw 
function draw (user,computer)
{
    result.innerHTML = `It's a draw!!`
    computerPoints.innerHTML = computerScore;
    userPoints.innerHTML = userScore;
}


//my round function
function round(playerSelection) {
    let computerSelection = computerPlay()
    switch (playerSelection + computerSelection) {
        case "RockScissors" :
        case "ScissorsPaper":
        case "PaperRock":
            wins(playerSelection,computerSelection);
            break;
        case "ScissorsRock":
        case "PaperScissors":
        case "RockPaper":
            losses(playerSelection,computerSelection);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(playerSelection,computerSelection);
            break;
    }

    if (userScore == 5) 
    {
        userScore = 0;
        computerScore = 0; 
        computerPoints.innerHTML = computerScore;
        userPoints.innerHTML = userScore;
        result.innerHTML = `End of round. You win`

    }
    else if (computerScore == 5)
    {
        userScore = 0;
        computerScore = 0; 
        computerPoints.innerHTML = computerScore;
        userPoints.innerHTML = userScore;
        result.innerHTML = `End of round. You lost` 
    }
}


//set up my buttons for each player's choice and put them in a function 
function playerEvents(){
    rockBtn.addEventListener("click", function(){
        return round("Rock");
        })
    paperBtn.addEventListener("click", function(){
        return round("Paper");
    
    })
    scissorsBtn.addEventListener("click", function(){
        return round("Scissors");
    
    })
}






playerEvents()

