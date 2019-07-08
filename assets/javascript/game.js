//Global Variables
var gameTotal =0;
var gems = [0,0,0.0];
var currentTotal =0;
var gamesWon =0;
var gamesLost=0;

//Variables to try and avoid repeat gem values
var x=0;
var y=0;
var gemVal =0;
var gemRepeat =false;

//Functions
function setGemValue(){
    gemVal = (Math.floor(Math.random()*12))+1;
}
function checkGemVal(){
    gemRepeat =false;
    for (y=0; y <x; y++){
        if (gemVal == gems[y]){
            gemRepeat = true;
        }
        else{}
    }
    if (gemRepeat == false){
        gems[x] = gemVal;
        x++
    }
    else{}
}
function setGems(){
    for (x=0; x<4;){
        setGemValue()
        checkGemVal()
    }
}
function setNewGameValues(){
    // var gemRepeat =false;
    var ranNum = (Math.floor(Math.random() * 102))+18;
    gameTotal = ranNum;
    currentTotal =0;
    xgameTotal.textContent = gameTotal;
    xcurrentTotal.textContent = 0;
    setGems()
    console.log(gems)
}


// Below is the working function to set up all new game values/ Above writing function to ensure no dupicate gem values

// function setNewGameValues(){
//     var ranNum = (Math.floor(Math.random() * 102))+18;
//     gameTotal = ranNum;
//     currentTotal =0;
//     xgameTotal.textContent = gameTotal;
//     xcurrentTotal.textContent = 0;
//     for (x=0; x<4; x++){
//         var gemVal = (Math.floor(Math.random()*12))+1;
//         gems[x] = gemVal;
//     }
//     console.log(gems)
// }
function checkGameEnd(){
    if (currentTotal == gameTotal){
        alert("You've Won!!!")
        gamesWon++
        totalWon.textContent = gamesWon;
        setNewGameValues()
    }
    else if(currentTotal > gameTotal){
        alert("BUSTED!")
        gamesLost++
        totalLost.textContent = gamesLost;
        setNewGameValues()
    }
    else{}
}

//Run Game

setNewGameValues()
$(document).ready(function() {
    $("#gem1").on("click", function(){
        currentTotal =currentTotal + gems[0];
        xcurrentTotal.textContent = currentTotal;
        // console.log(currentTotal)
        checkGameEnd()
    });
    $("#gem2").on("click", function(){
        currentTotal =currentTotal + gems[1];
        xcurrentTotal.textContent = currentTotal;
        // console.log(currentTotal)
        checkGameEnd()
    });
    $("#gem3").on("click", function(){
        currentTotal =currentTotal + gems[2];
        xcurrentTotal.textContent = currentTotal;
        // console.log(currentTotal)
        checkGameEnd()
    });
    $("#gem4").on("click", function(){
        currentTotal =currentTotal + gems[3];
        xcurrentTotal.textContent = currentTotal;
        // console.log(currentTotal)
        checkGameEnd()
    });
});

// alert("connected")