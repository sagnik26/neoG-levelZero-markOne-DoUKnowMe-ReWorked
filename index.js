var readlineSync = require("readline-sync"); // for reading input from console

var score = 0;

// data of high score
var highScores = [
  {
    name: "Debajit",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "Where do I live? ",
  answer: "Jalpaiguri"
}, {
  question: "What is my favourite color? ",
  answer: "Green"
},
{
  question: "Am I a DC or Marvel fan? ",
  answer: "Marvel"
},
{
  question: "Do I love Biriyani? yes/no? ",
  answer: "yes"             
},
{
  question: "Do I love cars? yes/no? ",
  answer: "yes"             
},
];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW ME?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
