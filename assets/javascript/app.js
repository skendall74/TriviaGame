//JS Code

var triviaQuestions = [{
    question: "In what year was Wrigley Field built?",
    answerList: ["1912", "1914", "1916", "1918"],
    answer: 1
}, {
    question: "How long was the Cubs World Series draught?",
    answerList: ["108 Years", "107 Years", "106 Years", "110 Years"],
    answer: 0
}, {
    question: "Who is the only Cub to win back-to-back Most Valuable Player Awards?",
    answerList: ["Ryne Sandberg", "Sammy Sosa", "Ernie Banks", "Billy WIlliams"],
    answer: 2
}, {
    question: "What's the name of the Cubs' home ballpark for spring training?",
    answerList: ["Surprise Stadium", "HoHoKam Stadium", "Sloan Park", "HoHoKam Park"],
    answer: 2
}, {
    question: "How many All-Star Games have been played at Wrigley Field?",
    answerList: ["4", "3", "2", "1"],
    answer: 1
}, {
    question: "How many Cubs uniform numbers have been retired?",
    answerList: ["5", "3", "6", "7"],
    answer: 0
}, {
    question: "How many Cubs teams have reached the postseason?",
    answerList: ["21", "20", "19", "18"],
    answer: 1
}, {
    question: "Who sings the song, 'Go Cubs Go'?",
    answerList: ["Steve Bartman", "Steve Goodman", "Ron Santo", "Harry Carey"],
    answer: 1
}, {
    question: "How many games did the Cubs win during the regular season in 2016?",
    answerList: ["101", "103", "108", "104"],
    answer: 1
}, {
    question: "Who famously sings take me out to the ball game?",
    answerList: ["Ron Santo", "Steve Stone", "Harry Caray", "Joe Maddon"],
    answer: 2
}, {
    question: "WHo is the last Cubs pitcher to lead the National League in strikeouts?",
    answerList: ["Jake Arrieta", "Kerry Wood", "Lee Smith", "Rick Sutcliffe"],
    answer: 1
}, {
    question: "What pitcher holds the team record for career saves as a Cub with 180?",
    answerList: ["Carlos Marmol", "Bruce Sutter", "Lee Smith", "Randy Myers"],
    answer: 2
}, {
    question: "Who is the home run leader for the Cubs?",
    answerList: ["Ernie Banks", "Sammy Sosa", "Billy Williams", "Ron Santo"],
    answer: 1
}, {
    question: "How many World Championships do the Chicago Cubs have?",
    answerList: ["3", "4", "2", "1"],
    answer: 0
}, {
    question: "Who is the last Cub to win the MVP award?",
    answerList: ["Kris Bryant", "Ryne Sandberg", "Sammy Sosa", "Ernie Banks"],
    answer: 0
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13', 'question14', 'question15'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
    correct: "Yes, that's right! Home Run!",
    incorrect: "No, that's not it. Strike Out!",
    endTime: "Out of time! Out of the Game!",
    finished: "Alright! Let's see your batting average"
}

$('#startBtn').on('click', function () {
    $(this).hide();
    newGame();
});

$('#startOverBtn').on('click', function () {
    $(this).hide();
    newGame();
});

function newGame() {
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();
    answered = true;

    //sets up new questions & answerList
    $('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + triviaQuestions.length);
    $('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
    for (var i = 0; i < 4; i++) {
        var choices = $('<div>');
        choices.text(triviaQuestions[currentQuestion].answerList[i]);
        choices.attr({ 'data-index': i });
        choices.addClass('thisChoice');
        $('.answerList').append(choices);
    }
    countdown();
    //clicking an answer will pause the time and setup answerPage
    $('.thisChoice').on('click', function () {
        userSelect = $(this).data('index');
        clearInterval(time);
        answerPage();
    });
}

function countdown() {
    seconds = 15;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    answered = true;
    //sets timer to go down
    time = setInterval(showCountdown, 1000);
}

function showCountdown() {
    seconds--;
    $('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        answerPage();
    }
}

function answerPage() {
    $('#currentQuestion').empty();
    $('.thisChoice').empty(); //Clears question page
    $('.question').empty();

    var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
    var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
    $('#gif').html('<img src = "assets/images/' + gifArray[currentQuestion] + '.gif" width = "400px">');
    //checks to see correct, incorrect, or unanswered
    if ((userSelect == rightAnswerIndex) && (answered == true)) {
        correctAnswer++;
        $('#message').html(messages.correct);
    } else if ((userSelect != rightAnswerIndex) && (answered == true)) {
        incorrectAnswer++;
        $('#message').html(messages.incorrect);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
    } else {
        unanswered++;
        $('#message').html(messages.endTime);
        $('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
        answered = true;
    }

    if (currentQuestion == (triviaQuestions.length - 1)) {
        setTimeout(scoreboard, 5000)
    } else {
        currentQuestion++;
        setTimeout(newQuestion, 5000);
    }
}

function scoreboard() {
    $('#timeLeft').empty();
    $('#message').empty();
    $('#correctedAnswer').empty();
    $('#gif').empty();

    $('#finalMessage').html(messages.finished);
    $('#correctAnswers').html("Correct Answers: " + correctAnswer);
    $('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
    $('#unanswered').html("Unanswered: " + unanswered);
    $('#startOverBtn').addClass('reset');
    $('#startOverBtn').show();
    $('#startOverBtn').html('Start Over?');
}