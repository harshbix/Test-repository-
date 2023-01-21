const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   userChoice = e.target.id;
   userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice();
   getResult();
}));

function generateComputerChoice()
{
    const randomNum = Math.floor(Math.random() * possibleChoice.length) + 1;
    if( randomNum === 1)
    {
        computerChoice = 'Rock';
    }
    if( randomNum === 2)
    {
        computerChoice = 'Paper';
    }
    if( randomNum === 3)
    {
        computerChoice = 'Scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult()
{
    if(computerChoice === userChoice)
    {
        result = "It's a Draw!"
    }
    if(computerChoice === 'Rock' && userChoice ==='Scissors')
    {
        result = "You lose!"
    }
    if(computerChoice === 'Rock' && userChoice ==='Paper')
    {
        result = "You win!"
    }
    if(computerChoice === 'Paper' && userChoice === 'Scissors')
    {
        result = "You win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Rock')
    {
        result = "You win!"
    }
    if(computerChoice === 'Scissors' && userChoice === 'Paper')
    {
        result = "You lose!"
    }
    if(computerChoice === 'Paper' && userChoice ==='Rock')
    {
        result = "You lose!"
    }
    resultDisplay.innerHTML = result;
}

