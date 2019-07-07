$(document).ready(function() {
    $("#button").on("click", function(){
        var lotto ="";
        
        for (var x=0;x<9;x++){
            var ranNum = Math.floor(Math.random() * 10);
            lotto=lotto.concat(ranNum);
            // $("lotto").append(ranNum);
        };
        $("#ranNumb").append(lotto+"<br>");
    });
});

// alert("connected")