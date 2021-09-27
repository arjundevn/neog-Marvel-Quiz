var readlinesync = require("readline-sync");
var chalk = require("chalk");

score =0;
highScore=4; 


console.log(chalk. red("Marvel quiz")+"\n\nPlease select the right option number and hit enter. \n")

questionOne = {
  question: "Which MCU movie featured Spider-Man’s first appearance?\n\n1) Spider-Man: Homecoming\n2) Captain America: Civil War\n3) Iron Man 3\n4) Avengers: Age of Ultron\n\n",
  answer: "2"
}

questionTwo = {
  question: "What does Stark Industries manufacture in Iron Man 1?\n\n1) Weapons\n2) Chemicals\n3) Pharmaceuticals\n4) Buildings\n\n",
  answer: "1"
}

questionThree = {
  question: "Which of these characters did NOT appear in Phase One?\n\n1) Thor\n2) Black Panther\n3) Captain America\n4) Black Widow\n\n",
  answer: "2"
}

questionFour = {
  question: "Who played the Hulk before Mark Ruffalo?\n\n1) Liam Hemsworth\n2) Gary Oldman\n3) Edward Norton\n4) Will Smith\n\n",
  answer: "3"
}

questionFive = {
  question: "Which war did Captain America fight in?\n\n1) Vietnam War\n2) Iraq War\n3) World War I\n4) World War II\n\n",
  answer: "4"
}


function qnA(answer, rightAnswer) {
  if (answer === rightAnswer) {
    score = score + 1;
    console.log(chalk.green("Your answer is correct!! your score is "+score+"\n"))
  } else {
    console.log(chalk.red("Your answer is wrong, your score is " +score+"\n"))
  }
}

var q1 = readlinesync.question(questionOne.question)

qnA(q1, questionOne.answer);

var q2 = readlinesync.question(questionTwo.question);

qnA(q2, questionTwo.answer);

var q3 = readlinesync.question(questionThree.question);

qnA(q3, questionThree.answer);

var q4 = readlinesync.question(questionFour.question);

qnA(q4, questionFour.answer);

var q5 = readlinesync.question(questionFive.question);

qnA(q5, questionFive.answer);

if(score>highScore){
  console.log((chalk.black(chalk.bgWhite("\nYour final score is: "+(chalk.green(score))+"!! Congragulations, you have achieved a new high score!!\n\nPlease send a screenshot to upadate this high score"))));
}
else if(score==highScore){
  console.log((chalk.black(chalk.bgWhite("\nYour final score is: "+(chalk.green(score))+"!! Congragulations, you have equalled the high score!!"))));
}

else {
  console.log((chalk.black(chalk.bgWhite("\nYour final score is: "+(chalk.green(score))+"!! High score is: "+highScore))));
}
