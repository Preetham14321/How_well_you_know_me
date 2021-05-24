var readLineSync = require("readline-sync");
var userName = readLineSync.question("What is your Name?");
const screening = readLineSync.question(
  "Welcome " + userName.toUpperCase() + " Do You Know Preetham ? "
);
console.log("Let's See How Much You Know Preetham 😍 ");
console.log("--------------");
var str = screening.toLowerCase();
var highScore = [
  {
    name: "Preetham",
    score: 10,
  },
  {
    name: "Mamatha",
    score: 9,
  },
];
if (str === "yes") {
  var score = 0;

  //highScores

  //play Fuction
  function play(question, answer) {
    var userAns = readLineSync.question(question);
    var str = userAns.toLowerCase();
    if (str === answer) {
      console.log("You are right 🎉 " + userName);
      score = score + 2;
    } else {
      console.log("You Are Wrong!😶 " + userName);
      score = score - 1;
    }
    console.log("You are Score is : " + score);
    console.log("----------");
  }

  //creating questions using Array
  var questions = [
    {
      question: "Where Do I Live?",
      answer: "hyderabad",
    },

    {
      question: "AM I older Than 25 years?",
      answer: "no",
    },
    {
      question: "My Favourite Car?",
      answer: "audi",
    },
    {
      question: "My Favourite Color?",
      answer: "red",
    },
    {
      question: "My Favourite Dish?",
      answer: "chicken",
    },
  ];

  //for loop asking questions
  for (var i = 0; i < questions.length; i++) {
    var currentque = questions[i];
    play(currentque.question, currentque.answer);
  }
} else {
  console.log(
    "ThankYOu For Your Time " + userName.toUpperCase() + " Bye Bye 👋 👋"
  );
}

console.log("Yah! You Are Scored: ", score);
if (score >= 8) {
  console.log(
    "You Are the One Of the Best Person Who Know Preetham Very Well 🎆 🎉 🌺"
  );
}
console.log("-------------------------------------");
console.log("HIGH SCORES ..............");
for (var i = 0; i < highScore.length; i++) {
  console.log(highScore[i].name + " = " + highScore[i].score);
}
