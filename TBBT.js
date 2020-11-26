var input=require('readline-sync');
var chalk=require('chalk');

var score = 0;

var name = input.question("What is your name?\n");
console.log("welcome " + name.toUpperCase() + " to the TBBT quiz\n");

function quizz(question, answer) {
  var userAnswer = input.question(question,"\n");
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("correct!");
    score = score + 1;

  }
  else {
    console.log("opps you are wrong!")
    if (score != 0) {
      score = score - 1;
    }

  }
  console.log("current score: ", score);
  console.log("------------------");
}


var question1={
  question:"Where does sheldon cooper live?\n"
  , answer:"Texas"
}

var question2 = {
  question:"What is the name of Sheldon's Roommate?\n",
  answer:"Lenord"
}
var question3 = {
  question:"Who is Howard to Sheldon?\n",
  answer:"Engineer"
}

var question4 = {
  question:"What does Sheldon plays 2am in the morning\n",
  answer:"Bongo"
}

var question5 = {
  question:"Where does Sheldon goes to hangout with friends?\n",
  answer:"Comic Book store"
}

var questions = [question1, question2, question3, question4, question5];
for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quizz(currentQuestion.question, currentQuestion.answer);
}
console.log("your final score is " + score);