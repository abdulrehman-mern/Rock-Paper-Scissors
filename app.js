let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = ("Game was draw. Play again");
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin === true) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
      console.log("User Choice =", userChoice);
      const compChoice = genCompChoice();
      console.log("Comp Choice =", compChoice);

      if(userChoice === compChoice) {
         drawGame();
         return;
      }
         let userWin = true;
         if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
         } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
         } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
         }
         showWinner(userWin, userChoice, compChoice);
         }
      


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})