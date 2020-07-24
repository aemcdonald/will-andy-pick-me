var answers = [
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes - definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful."
]

var userInput;

var questionInput = document.querySelector(".question-input");
var answerButton = document.querySelector(".answer-button");
var userQuestion = document.querySelector(".user-question");
var answer = document.querySelector(".answer");
var clearButton = document.querySelector(".clear-button");
var eightBall = document.querySelector(".eight-ball");

answerButton.addEventListener("click", getAnswerClick);
// clearButton.addEventListener("click", ADDFUNCTION);

function getAnswerClick() {
  //grab user input from question box
  userInput = questionInput.value;
  //display user input
  userQuestion.innerText = userInput;
  //display random answer;
  answer.innerText = answers[getRandomIndex(answers)];
  eightBall.classList.add("hidden");
  //need to look up how to clear input field of ".question-input"
      //set value of input field to null
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Iteration1:
// When a user types in a question then clicks the "Get your answer" button,
//the use sees their question and a random answer from the list of possible answers (a list of the possible random answers is provided below)
// The input field the user typed the question into should clear as soon as they click the "Get your answer" button
// When the question and answer appear, the image of the 8 ball disappears

//Pseudocode:
//need to harvest user input from question box & store in variable
//when user clicks get your answer button:
 //need to display question input from user
 //need to display random answer
