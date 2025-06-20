

// console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random().toFixed(2);
    if (randomNumber <= 0.33) {
        return "rock";
    }
    else if (randomNumber <= 0.66) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose 'Rock', 'Paper', or 'Scissor'")
    choice = choice.toLowerCase()
    if (choice != "rock" && choice != "paper" && choice != "scissor") {
        console.log("Please choose a valid option");
        return getHumanChoice();
    }
    return choice
}


function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.querySelector(".roundResults")

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = "It's a Draw!"
        // console.log("It's a Draw!");
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        resultsDiv.textContent = "Player wins this round"
        // console.log("Player wins this round")
        return humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultsDiv.textContent = "Player wins this round"
        // console.log("Player wins this round")
        return humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        resultsDiv.textContent = "Player wins this round"
        // console.log("Player wins this round")
        return humanScore++;
    }
    else {
        resultsDiv.textContent = "Computer wins this round"
        // console.log("Computer wins this round");
        computerScore++
    }
}



// console.log(playRound(humanSelection, computerSelection));

function playGame() {
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection)
    // console.log(humanScore, "human score", computerScore, "computer score");

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection)
    // console.log(humanScore, "human score", computerScore, "computer score");

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection)
    // console.log(humanScore, "human score", computerScore, "computer score");

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection)
    // console.log(humanScore, "human score", computerScore, "computer score");

    // humanSelection = getHumanChoice();
    // computerSelection = getComputerChoice();
    // playRound(humanSelection, computerSelection)
    // console.log(humanScore, "human score", computerScore, "computer score");



    if (humanScore > computerScore) {
        console.log("Player wins!");
    }
    else if
        (humanScore === computerScore) {
        console.log("It's a tie!");
    }
    else {
        console.log("Computer wins!");
    }
}


const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");


rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper"
scissorBtn.textContent = "Scissor"
document.body.append(rockBtn, paperBtn, scissorBtn);

const humanDiv = document.querySelector(".playerScore");
const computerDiv = document.querySelector(".computerScore");
humanDiv.append(humanScore)
// console.log(humanDiv, "human score");

function gameFinish(player) {
    const resultsDiv = document.querySelector(".roundResults")
    const finishDiv = document.createElement('div')
    finishDiv.textContent = `${player} wins!`;
    document.body.append(finishDiv);
    rockBtn.remove()
    paperBtn.remove()
    scissorBtn.remove()
    resultsDiv.remove()


    // function playAgain() {
    //     humanScore = 0;
    //     computerScore = 0;
    //     document.body.append(rockBtn, paperBtn, scissorBtn);
    //     playButton.remove()
    // }
    // const playButton = document.createElement("button")
    // playButton.textContent = "Play Again";
    // document.body.append(playButton);
    // playButton.addEventListener("click", () => {
    //     playAgain()
    // })
}

function updateScores() {
    humanDiv.textContent = `Player Score: ${humanScore}`;
    computerDiv.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 5) {
        console.log("player wins");
        gameFinish("player")
    }
    if (computerScore === 5) {
        gameFinish("Computer")
    }
}



rockBtn.addEventListener("click", () => {
    let choice = "rock"
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    updateScores();

})

paperBtn.addEventListener("click", () => {
    let choice = "paper";
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    updateScores();
});

scissorBtn.addEventListener("click", () => {
    let choice = "scissor";
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    updateScores();
});



// console.log(getHumanChoice());
