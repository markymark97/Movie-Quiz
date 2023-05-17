class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        else{
            quizTime = quizTime-10 //Subtracts 10 seconds off timer if answer is wrong.

        }

   
        this.questionIndex++;

    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

function displayQuestion() {
    if (quiz.isEnded()) {
       showScores();
    } else {

        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
};

//Shows which question number you are on
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let ProgressElement = document.getElementById("progress");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};


// Displays end result with option to take quiz again and go to leaderboard
function showScores() {
   
    var finalScore = quiz.score;
    localStorage.score=finalScore; 
    return window.location.assign('end.html');
    
};

//Array of questions
let questions = [
    new Question(
        "Which Film Won an Oscar for Best Picture in 2000?", ["The Matrix", "American Beauty", "Fight Club", "Eyes Wide Shut"], "American Beauty"
    ),
    new Question(
        "Which of These Films is NOT Directed by Stanley Kubrick?", ["Eyes Wide Shut", "A Clockwork Orange", "The Green Mile", "The Shinning"], "The Green Mile"
    ),
    new Question(
        "Actor Leonardo DiCaprio, Only Has One Oscar Win. Which Film Did he Win the Award For? ", ["The Departed", "Inception", "Wolf of Wall Street", "The Revenant"], "The Revenant"
    ),
    new Question(
        "Who Directed Pulp Fiction?", ["Quentin Tarantino", "Stanley Kubrick", "George Clooney", "Wes Anderson"], "Quentin Tarantino"
    ),
    new Question(
        "Famous Actress, Natalie Portman, Made her Debut in Which Film? ", ["Star Wars: Episode I", "Heat", "Everyone Says I Love You", "Léon: The Professional"], "Léon: The Professional"
    )
];

let quiz = new Quiz(questions);


displayQuestion();


//Timer
let time = 2;
let quizTimeInMinutes = time * 60 * 60;
let quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("timer");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;

        }
    }, 1000);
}

startCountdown();




