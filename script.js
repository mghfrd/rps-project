function getComputerChoice() {
    const numberGenerator = Math.floor(Math.random() * 3);

    if (numberGenerator === 0) {
        return 'rock';
    } else if (numberGenerator === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    const userInput = prompt("input rock, paper, or scissors");
    const insensitiveInput = userInput.toLowerCase();
    return insensitiveInput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice === 'paper' && humanChoice === 'rock'
            || computerChoice === 'rock' && humanChoice === 'scissors'
            || computerChoice === 'scissors' && humanChoice === 'paper') {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log('TIE!');
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('Congrats! You win! your final score is `$humanScore`');
    } else if (humanScore < computerScore) {
        console.log('Oh no! The computer win');
    } else {
        console.log('Nice try, the score is TIE!');
    }
}

playGame();