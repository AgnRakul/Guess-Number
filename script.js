"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Answer';

// document.querySelector('.number').textContent = '23';

// document.querySelector('.score').textContent = '15';

// document.querySelector('.guess').value = '10';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    // When There is No Output
    if (!guess) {
        document.querySelector(".message").textContent =
            "Enter the Number In the box";

        // When Player Wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Correct Answer";
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

        // When Guess Goes Wrong
    } else if (guess !== secretNumber) {

        if (score > 1) {
            document.querySelector(".message").textContent = guess > secretNumber ? 'Value is To High' : 'Value is To Low';
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "You Lost the Game";
            document.querySelector(".score").textContent = 0;
        }
    }
    // When Guess is High
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Value is To High";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You Lost the Game";
    //         document.querySelector(".score").textContent = 0;
    //     }

    //     // When Guess is Low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "Value is To Low";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "You Lost the Game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent =
        "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "🙈";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#b41313";
    document.querySelector(".number").style.width = "22rem";
});

/* Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/
