//Global Variables
var gameTotal =0;
var gems = [0,0,0,0];
var currentTotal =0;
var gamesWon =0;
var gamesLost=0;

//Variables to try and avoid repeat gem values
var x=0;
var y=0;
var gemVal =0;
var gemRepeat =false;

//Functions
function setGemValue(){ //Generates random value for a gem from 1 to 12
    gemVal = (Math.floor(Math.random()*12))+1;
}
function checkGemVal(){ //Checks to see if new gem value is equal to any previous gems
    gemRepeat =false;
    for (y=0; y <x; y++){
        if (gemVal == gems[y]){
            gemRepeat = true;
        }
    }
    if (gemRepeat == false){
        gems[x] = gemVal;
        x++
    }
}
function setGems(){ //Sets the value of all 4 gems
    for (x=0; x<4;){
        setGemValue()
        checkGemVal()
    }
}
function setNewGameValues(){ //Sets initial values for a round
    var ranNum = (Math.floor(Math.random() * 102))+18;
    gameTotal = ranNum;
    currentTotal =0;
    xgameTotal.textContent = gameTotal;
    xcurrentTotal.textContent = 0;
    setGems()
}
function checkGameEnd(){ //Checks for endstate; ++ games won/lost; Starts new game if gameover
    if (currentTotal == gameTotal){
        setTimeout(function(){alert("You've Won!!!"); }, 0);
        gamesWon++
        totalWon.textContent = gamesWon;
        setNewGameValues()
    }
    else if(currentTotal > gameTotal){
        setTimeout(function(){alert("BUSTED!"); }, 0); //Hacking it up with the timeouts
        gamesLost++
        totalLost.textContent = gamesLost;
        setNewGameValues()
    }
}

//Run Game

setNewGameValues()
$(document).ready(function() { // Listens for gem clicks and displays current total
    $("#gem1").on("click", function(){
        currentTotal =currentTotal + gems[0];
        xcurrentTotal.textContent = currentTotal;
        checkGameEnd()
    });
    $("#gem2").on("click", function(){
        currentTotal =currentTotal + gems[1];
        xcurrentTotal.textContent = currentTotal;
        checkGameEnd()
    });
    $("#gem3").on("click", function(){
        currentTotal =currentTotal + gems[2];
        xcurrentTotal.textContent = currentTotal;
        checkGameEnd()
    });
    $("#gem4").on("click", function(){
        currentTotal =currentTotal + gems[3];
        xcurrentTotal.textContent = currentTotal;
        checkGameEnd()
    });
});