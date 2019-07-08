//Global Variables
var gameTotal =0;
var gems = [0,0,0.0];
var currentTotal =0;
var gamesWon =0;
var gamesLost=0;

//Functions
function setNewGameValues(){
    var ranNum = (Math.floor(Math.random() * 102))+18;
    gameTotal = ranNum;
    currentTotal =0;
    xgameTotal.textContent = gameTotal;
    xcurrentTotal.textContent = 0;
    for (x=0; x<4; x++){
        var gemVal = (Math.floor(Math.random()*12))+1;
        gems[x] = gemVal;
    }
    console.log(gems)
}
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
        console.log(currentTotal)
        checkGameEnd()
    });
    $("#gem2").on("click", function(){
        currentTotal =currentTotal + gems[1];
        xcurrentTotal.textContent = currentTotal;
        console.log(currentTotal)
        checkGameEnd()
    });
    $("#gem3").on("click", function(){
        currentTotal =currentTotal + gems[2];
        xcurrentTotal.textContent = currentTotal;
        console.log(currentTotal)
        checkGameEnd()
    });
    $("#gem4").on("click", function(){
        currentTotal =currentTotal + gems[3];
        xcurrentTotal.textContent = currentTotal;
        console.log(currentTotal)
        checkGameEnd()
    });
});

// alert("connected")