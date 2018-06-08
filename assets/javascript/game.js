$(document).ready(function() {
// GLOBAL VARIABLES (accessible by all functions)
// ==========================================================================================

// This will be the random number the player is trying to match (between 19 - 120)
var randomNum = 0;

// This will be the player's totalScore
var totalScore = 0;

// Game counters
var winCounter = 0;
var lossCounter = 0;

// Crystal Values (hidden)
var crystal_1 = 0;
var crystal_2 = 0;
var crystal_3 = 0;
var crystal_4 = 0;

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================
// startGame() - It's how we will set up the game
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {
    // Reset the winCounter back to 0
    winCounter = 0;
    $("#wins").text(winCounter);

    // Reset the lossCounter back to 0
    lossCounter = 0;
    $("#losses").text(lossCounter);
};

// playGame() - It's how we will start and restart the game
function playGame() {
    // Reset the totalScore back to 0
    totalScore = 0;
    $("#totalScoreCount").text(totalScore);

    // Reset the crystal values to 0
    crystal_1 = 0;
    crystal_2 = 0;
    crystal_3 = 0;
    crystal_4 = 0;

    // randomNum is generated between 19 - 120
    randomNum = [Math.floor(Math.random() * 111) + 19];
    $("#randomNumber").text(randomNum);

    // random crystal values are generated
    crystal_1 = Math.floor(Math.random() * 12) + 1;
    crystal_2 = Math.floor(Math.random() * 12) + 1;
    crystal_3 = Math.floor(Math.random() * 12) + 1;
    crystal_4 = Math.floor(Math.random() * 12) + 1;
    console.log(crystal_1);
    console.log(crystal_2);
    console.log(crystal_3);
    console.log(crystal_4);
}

    //crystal values are assigned to the buttons
    $("#crystal1").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(crystal_1);
        $("#totalScoreCount").text(totalScore);
        setTimeout(checkNumbers, 500);
    });
    $("#crystal2").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(crystal_2);
        $("#totalScoreCount").text(totalScore);
        setTimeout(checkNumbers, 500);
    });
    $("#crystal3").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(crystal_3);
        $("#totalScoreCount").text(totalScore);
        setTimeout(checkNumbers, 500);
    });
    $("#crystal4").on("click", function() {
        totalScore = parseInt(totalScore) + parseInt(crystal_4);
        $("#totalScoreCount").text(totalScore);
        setTimeout(checkNumbers, 500);
    });

    // We print the randomNum and random crystal values in console (for testing).
    console.log(randomNum);
    console.log(crystal_1);
    console.log(crystal_2);
    console.log(crystal_3);
    console.log(crystal_4);


// checkNumbers() function - It's where we will compare the randomNum to the totalScore
function checkNumbers() {
        if (randomNum < totalScore) {
        alert("Too much! You lose!");
        lossCounter++;
        $("#losses").text(lossCounter);
        playGame();
        }
        if (randomNum > totalScore) {
        console.log("Keep going!");
        }
        else {
        alert("You win! Great job!");
        winCounter++;
        $("#wins").text(winCounter);
        playGame();
        }
};

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// =========================================================================================

// Starts the Game by running the startGame() function
startGame();
playGame();
//checkNumbers();


});