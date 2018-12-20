//JS Code

$(document).ready(function () {
    // Generates random number to guess
    var Random = Math.floor(Math.random() * 120 + 19);

    // Display random number
    $('#scoreToMatch').text(Random);

    //Random number for each crystal
    var red = Math.floor(Math.random() * 12 + 1);
    var blue = Math.floor(Math.random() * 12 + 1);
    var yellow = Math.floor(Math.random() * 12 + 1);
    var green = Math.floor(Math.random() * 12 + 1);

    // Start Varibles wins, losses and total
    var playerUp = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    // Reset game
    function reset() {
        Random = Math.floor(Math.random() * 120 + 19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        red = Math.floor(Math.random() * 12 + 1);
        blue = Math.floor(Math.random() * 12 + 1);
        yellow = Math.floor(Math.random() * 12 + 1);
        green = Math.floor(Math.random() * 12 + 1);
        playerUp = 0;
        $('#totalScore').text(playerUp);
    }
    // Display wins
    function win() {
        alert("Congrats! You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    }

    // Display losses
    function loss() {
        alert("Sorry! You lose!");
        losses++;
        $('#losses').text(losses);
        reset()
    }
    // Clicking crystals

    $(".imgthumbnailred").on("click", function () {
        playerUp = playerUp + red;
        console.log("New Player Total= " + playerUp);
        $('#totalScore').text(playerUp);

        if (playerUp == Random) {
            win();
        }

        else if (playerUp > Random) {
            loss();
        }
    });
    $(".imgthumbnailblue").on("click", function () {
        playerUp = playerUp + blue;
        console.log("New Player Total= " + playerUp);
        $('#totalScore').text(playerUp);

        if (playerUp == Random) {
            win();
        }

        else if (playerUp > Random) {
            loss();
        }
    });
    $(".imgthumbnailyellow").on("click", function () {
        playerUp = playerUp + yellow;
        console.log("New Player Total= " + playerUp);
        $('#totalScore').text(playerUp);

        if (playerUp == Random) {
            win();
        }

        else if (playerUp > Random) {
            loss();
        }
    });
    $(".imgthumbnailgreen").on("click", function () {
        playerUp = playerUp + green;
        console.log("New Player Total= " + playerUp);
        $('#totalScore').text(playerUp);

        if (playerUp == Random) {
            win();
        }

        else if (playerUp > Random) {
            loss();
        }
    });


});