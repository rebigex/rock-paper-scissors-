    // declaring variabes
    let computerSelection; 
    let userScore = 0;
    let computerScore = 0;
    let advanced_mode = prompt("turn debug mode on? y/n: ");

    // getting computer choice 
    function computerChoice(num){
        if (advanced_mode === "y") {
        console.log("getComputerChoice has run successfully")
        }
        switch(num) {
            case 1:
                computerSelection = 'rock';
                break;
            case 2: 
                computerSelection = 'scissors';
                break;
            case 3:
                computerSelection = 'paper';
                break;
            default: 
                console.log("error")
                console.log(num)
        
            
        };
        
        return computerSelection;

    };
    // giving user round results 
    function playRound(computerSel, userSel) {
        if (advanced_mode === "y") {
        console.log("playRound has run successfully")
        }
        if (computerSel === userSel) {
            console.log(`I choose ${computerSel}. You choose ${userSel}. Tie Game!`);
            return userSel;
        } else if (computerSel === 'rock' && userSel === 'paper') {
            console.log(`I choose ${computerSel}. You choose ${userSel}. You win!`);
            return userSel;
        } else if (computerSel === 'paper' && userSel ==='rock') {
            console.log(`I choose ${computerSel}. You choose ${userSel}. You lose!`);
            return userSel;
        } else if (computerSel === 'scissors' && userSel === 'rock') {
            console.log(`I choose ${computerSel}. You choose ${userSel}. You win!`);
            return userSel;
        } else if (computerSel === 'rock' && userSel === 'scissors') {
            console.log(`I choose ${computerSel}. You choose ${userSel}. You lose!`);
            return userSel;
        } else if (computerSel === 'paper' && userSel === 'scissors') {
            console.log(`I choose ${computerSel}. You choose ${userSel}. You win!`);
            return userSel;
        } else if (computerSel === 'scissors' && userSel === 'paper') {
            console.log(`I choose ${computerSel}. You choose ${userSel}. You lose!`);
            return userSel;
        } else {
            console.log("Error invalid input")
        }
        

    }
    // getting user score
    function getUserScore(computerSel, userSel) {
        if (advanced_mode === "y") {
        console.log("getUserScore has run successfully")    
        }
        if (computerSel === 'rock' && userSel === 'paper') {
            userScore++;
            return userScore;
       
        } else if (computerSel === 'scissors' && userSel === 'rock') {
            userScore++;
            return userScore;
        
        } else if (computerSel === 'paper' && userSel === 'scissors') {
            userScore++;
            return userScore;
       
        } else {
            return userScore;
        }
        

    }
    // getting computer score
    function getComputerScore(computerSel, userSel) {
        if (advanced_mode === "y") {
        console.log("getComputerScore has run successfully")
        }
        if (computerSel === 'paper' && userSel ==='rock') {
            computerScore++;
            return computerScore;
        } else if (computerSel === 'rock' && userSel === 'scissors') {
            computerScore++;
            return computerScore;
        } else if (computerSel === 'scissors' && userSel === 'paper') {
            computerScore++;
            return computerScore;
       
        } else {
            return computerScore;
        }
        
    }

    function playGame() {
        // gets random number from 1 (inclusive) to 3 (inclusive)
        computerSelection = computerChoice(Math.ceil(Math.random() * 3));
        userSelection = prompt("rock paper or scissors: ");
        userScore = getUserScore(computerSelection, userSelection);
        computerScore = getComputerScore(computerSelection, userSelection);
        playRound(computerSelection, userSelection);
        return userScore, computerScore;
        
    }
    for (i=0; i<5; i++) {
        playGame;
    }
   
        
  
    function report(){
        //get game results and print them
        if (userScore < computerScore) {
            console.log(`Total games played: 5. I scored ${computerScore} points. You scored ${userScore} points. You lose!.`)
        }
        else if (userScore > computerScore) {
            console.log(`Total games played: 5. I scored ${computerScore} points. You scored ${userScore} points. You win!.`)
        }
        else {
            console.log(`Total games played: 5. I scored ${computerScore} points. You scored ${userScore} points. Tie!.`)
        }
    }
    report()