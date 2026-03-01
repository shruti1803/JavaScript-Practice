const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "what is the largest animal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale"
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the chemical symbol of water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
    answer: "Harper Lee"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionObj.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsDiv.appendChild(button);
});
}
function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestionIndex].answer) {
    score++;
  }
};
document.getElementById("nextBtn").onclick = function () {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("score").textContent =
      "Your Score: " + score;
  }
};
showQuestion();
