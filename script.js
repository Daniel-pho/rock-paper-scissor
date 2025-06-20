

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
    if (humanChoice === computerChoice) {
        console.log("It's a Draw!");
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("Player wins this round")
        return humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Player wins this round")
        return humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor") {
        console.log("Player wins this round")
        return humanScore++;
    }
    else {
        console.log("Computer wins this round");
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


rockBtn.addEventListener("click", () => {
    let choice = "rock"
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
})

paperBtn.addEventListener("click", () => {
    let choice = "paper";
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
});

scissorBtn.addEventListener("click", () => {
    let choice = "scissor";
    let computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
});

// console.log(getHumanChoice());
