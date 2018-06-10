$(document).ready(function() {
// GLOBAL VARIABLES (accessible by all functions)
// ===================================================================================================
    var character1 = {Name:"Rey", healthPower:180, attackPower:9};
    var character2 = {Name:"Snoke", healthPower:130, attackPower:8};
    var character3 = {Name:"Kylo Ren", healthPower:120, attackPower:4};
    var character4 = {Name:"General Hux", healthPower:100, attackPower:3};
    var enemy1 = {Name:"Rey", healthPower:180, counterAttackPower:18};
    var enemy2 = {Name:"Snoke", healthPower:130, counterAttackPower:20};
    var enemy3 = {Name:"Kylo Ren", healthPower:120, counterAttackPower:15};
    var enemy4 = {Name:"General Hux", healthPower:100, counterAttackPower:10};
    var attackFreq = 0;
    var yourCharacter = {};
    var yourEnemy = {};

// FUNCTIONS (These are bits of code that we will call upon to run when needed)
// =========================================================================================
// resetGame() - It's how we will set up and restart the game
// (Note: It's not being run here. It's just being made for future use.)
var resetGame = function resetGame() {
    // Reset Game
    $("#char1HP").html(character1.healthPower);
    $("#char2HP").html(character2.healthPower);
    $("#char3HP").html(character3.healthPower);
    $("#char4HP").html(character4.healthPower);
     
    $("#enemy1HP").html(enemy1.healthPower);
    $("#enemy2HP").html(enemy2.healthPower);
    $("#enemy3HP").html(enemy3.healthPower);
    $("#enemy4HP").html(enemy4.healthPower);

    attackFreq = 0;
    character1 = {Name:"Rey", healthPower:180, attackPower:9};
    character2 = {Name:"Snoke", healthPower:130, attackPower:8};
    character3 = {Name:"Kylo Ren", healthPower:120, attackPower:4};
    character4 = {Name:"General Hux", healthPower:100, attackPower:3};
    enemy1 = {Name:"Rey", healthPower:180, counterAttackPower:25};
    enemy2 = {Name:"Snoke", healthPower:130, counterAttackPower:25};
    enemy3 = {Name:"Kylo Ren", healthPower:120, counterAttackPower:20};
    enemy4 = {Name:"General Hux", healthPower:100, counterAttackPower:10};

    // Shows Character Choices
    $("#character1").show();
    $("#character2").show();
    $("#character3").show();
    $("#character4").show();

    // Hides unused chosenCharacter
    invisible("#chosenCharacter1");
    invisible("#chosenCharacter2");
    invisible("#chosenCharacter3");
    invisible("#chosenCharacter4");

    // Hides unchosen opponentChoices
    displayHide("#opponent1");
    displayHide("#opponent2");
    displayHide("#opponent3");
    displayHide("#opponent4");

    // Hides unchosen defenderChoices
    displayHide("#defender1");
    displayHide("#defender2");
    displayHide("#defender3");
    displayHide("#defender4");

    // Hides attackReport, win-loseReport, buttons
    invisible(".attackReport");
    invisible("#loseReport");
    invisible("#winReport");
    invisible("#restartButton");
    invisible("#defeatEnemy");
    invisible("#noEnemy");

    // Sets card dimensions - chosenCharacter
    $("div.card.card-title.text-center.shadow-lg.cc1").addClass("cardDimensions");
    $("div.card.card-title.text-center.shadow-lg.cc2").addClass("cardDimensions");
    $("div.card.card-title.text-center.shadow-lg.cc3").addClass("cardDimensions");
    $("div.card.card-title.text-center.shadow-lg.cc4").addClass("cardDimensions");

    // Sets card dimensions - opponentChoices
    $("div.card.card-title.text-center.shadow-lg.oc1").addClass("cardDimensions");
    $("div.card.card-title.text-center.shadow-lg.oc2").addClass("cardDimensions");
    $("div.card.card-title.text-center.shadow-lg.oc3").addClass("cardDimensions");
    $("div.card.card-title.text-center.shadow-lg.oc4").addClass("cardDimensions");  
};

// Function which hides elements, and removes them from the layout
function displayHide(x) {
    $(x).hide();
};

// Functions which hides/shows elements, but keeps them in the layout
function invisible(x) {
    $(x).addClass("invisible");  
};
function visible(x) {
    $(x).removeClass("invisible");
};

// Function which chooses chosenCharacter that is clicked and hides the others

    $("#character1").on("click", function() {
        visible("#chosenCharacter1");
        $("#opponent2").show();
        $("#opponent3").show();
        $("#opponent4").show();
        visible("#opponent2");
        visible("#opponent3");
        visible("#opponent4");
        displayHide("#chosenCharacter2");
        displayHide("#chosenCharacter3");
        displayHide("#chosenCharacter4");
        displayHide("#character1");
        displayHide("#character2");
        displayHide("#character3");
        displayHide("#character4");
        yourCharacter = character1;       
    });
    
    $("#character2").on("click", function() {
        visible("#chosenCharacter2");
        $("#opponent1").show();
        $("#opponent3").show();
        $("#opponent4").show();
        visible("#opponent1");
        visible("#opponent3");
        visible("#opponent4");
        displayHide("#chosenCharacter1");
        displayHide("#chosenCharacter3");
        displayHide("#chosenCharacter4");
        displayHide("#character1");
        displayHide("#character2");
        displayHide("#character3");
        displayHide("#character4");
        yourCharacter = character2;
    });
    
    $("#character3").on("click", function() {
        visible("#chosenCharacter3");
        $("div.card.card-title.text-center.shadow-lg.cc3").addClass("cardDimensions");
        $("#opponent1").show();
        $("#opponent2").show();
        $("#opponent4").show();
        visible("#opponent1");
        visible("#opponent2");
        visible("#opponent4");
        displayHide("#chosenCharacter1");
        displayHide("#chosenCharacter2");
        displayHide("#chosenCharacter4");
        displayHide("#character1");
        displayHide("#character2");
        displayHide("#character3");
        displayHide("#character4");
        yourCharacter = character3;
    });
    
    $("#character4").on("click", function() {
        visible("#chosenCharacter4");
        $("div.card.card-title.text-center.shadow-lg.cc4").addClass("cardDimensions");
        $("#opponent1").show();
        $("#opponent2").show();
        $("#opponent3").show();
        visible("#opponent1");
        visible("#opponent2");
        visible("#opponent3");
        displayHide("#chosenCharacter1");
        displayHide("#chosenCharacter2");
        displayHide("#chosenCharacter3");
        displayHide("#character1");
        displayHide("#character2");
        displayHide("#character3");
        displayHide("#character4");
        yourCharacter = character4;
    });


// Function which chooses chosenEnemy that is clicked and hides the others

    $("#opponent1").on("click", function() {
        displayHide("#opponent1");
        $("div.card.card-title.text-center.shadow-lg.oc1").addClass("cardDimensions");
        $("#defender1").show();
        invisible("#defeatEnemy");
        yourEnemy = enemy1;
    });
    
    $("#opponent2").on("click", function() {
        displayHide("#opponent2");
        $("div.card.card-title.text-center.shadow-lg.oc2").addClass("cardDimensions");
        $("#defender2").show();
        invisible("#defeatEnemy");
        yourEnemy = enemy2;
    });
    
    $("#opponent3").on("click", function() {
        displayHide("#opponent3");
        $("div.card.card-title.text-center.shadow-lg.oc3").addClass("cardDimensions");
        $("#defender3").show();
        invisible("#defeatEnemy");
        yourEnemy = enemy3;
    });
    
    $("#opponent4").on("click", function() {
        displayHide("#opponent4");
        $("div.card.card-title.text-center.shadow-lg.oc4").addClass("cardDimensions");
        $("#defender4").show();
        invisible("#defeatEnemy");
        yourEnemy = enemy4;
    });


// Function which has character/opponent fight when Attack button is clicked

    $("#attackButton").on("click", function() {
        attackFreq++;
        visible(".attackReport");
        $("#playerAttack").html("You attacked " + yourEnemy.Name + " for " + yourCharacter.attackPower * attackFreq + " damage.");
        $("#opponentAttack").html(yourEnemy.Name + " attacked you back for " + yourEnemy.counterAttackPower + " damage.");
        updateHP();
    });


// Update HP on cards
var updateHP = function updateHP() {
    if (yourCharacter == character1) {
        $("#char1HP").html(yourCharacter.healthPower = yourCharacter.healthPower - yourEnemy.counterAttackPower);
        }
    else if (yourCharacter == character2) {
        $("#char2HP").html(yourCharacter.healthPower = yourCharacter.healthPower - yourEnemy.counterAttackPower);
        }
    else if (yourCharacter == character3) {
        $("#char3HP").html(yourCharacter.healthPower = yourCharacter.healthPower - yourEnemy.counterAttackPower);
        }
    else if (yourCharacter == character4) {
        $("#char4HP").html(yourCharacter.healthPower = yourCharacter.healthPower - yourEnemy.counterAttackPower);
        };
    if (yourEnemy == enemy1) {
        $("#enemy1HP").html(yourEnemy.healthPower = yourEnemy.healthPower - yourCharacter.attackPower * attackFreq);
        }
    else if (yourEnemy == enemy2) {
        $("#enemy2HP").html(yourEnemy.healthPower = yourEnemy.healthPower - yourCharacter.attackPower * attackFreq);
        }
    else if (yourEnemy == enemy3) {
        $("#enemy3HP").html(yourEnemy.healthPower = yourEnemy.healthPower - yourCharacter.attackPower * attackFreq);
        }
    else if (yourEnemy == enemy4) {
        $("#enemy4HP").html(yourEnemy.healthPower = yourEnemy.healthPower - yourCharacter.attackPower * attackFreq);
        };
    checkHP();
};

// checkHP() function - It's where we will compare the healthPower of the fighters = use conditions
var checkHP = function checkHP() {
    if (yourCharacter.healthPower < 1) {
        visible("#loseReport");
        visible("#restartButton");
    }
    else if (yourEnemy.healthPower < 1) {
        visible("#defeatEnemy");
        if (yourEnemy == enemy1) {
            displayHide("#defender1");
        }
        else if (yourEnemy == enemy2) {
            displayHide("#defender2");
        }
        else if (yourEnemy == enemy3) {
            displayHide("#defender3");
        }
        else if (yourEnemy == enemy4) {
            displayHide("#defender4");
        }
    };
    if ((yourCharacter == character1) && (yourCharacter.healthPower > 1) && (enemy2.healthPower < 1) && (enemy3.healthPower < 1) && (enemy4.healthPower < 1)) {
        invisible("#defeatEnemy");
        visible("#winReport");
        invisible(".attackReport");
        visible("#restartButton");
    }
    else if ((yourCharacter == character2) && (yourCharacter.healthPower > 1) && (enemy1.healthPower < 1) && (enemy3.healthPower < 1) && (enemy4.healthPower < 1)) {
        invisible("#defeatEnemy");
        visible("#winReport");
        invisible(".attackReport");
        visible("#restartButton");
    }
    else if ((yourCharacter == character3) && (yourCharacter.healthPower > 1) && (enemy1.healthPower < 1) && (enemy2.healthPower < 1) && (enemy4.healthPower < 1)) {
        invisible("#defeatEnemy");
        visible("#winReport");
        invisible(".attackReport");
        visible("#restartButton");
    }
    else if ((yourCharacter == character4) && (yourCharacter.healthPower > 1) && (enemy1.healthPower < 1) && (enemy2.healthPower < 1) && (enemy3.healthPower < 1)) {
        invisible("#defeatEnemy");
        visible("#winReport");
        invisible(".attackReport");
        visible("#restartButton");
    }
};


// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// =========================================================================================

// Starts the Game by running the startGame() function
resetGame();
runAttack();
updateHP();

$("#restartButton").on("click", resetGame);

});
