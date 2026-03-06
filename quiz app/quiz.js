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

    // variable questionobj stores text from questions array at index currentQuestionIndex
    const questionObj = questions[currentQuestionIndex];

    // we take the textcontent of question element and assign it to question in questionObj
    document.getElementById("question").textContent = questionObj.question;

    // we assign variable optionsDiv to the element with id options
    const optionsDiv = document.getElementById("options");

    // we clear the optionDiv by setting its innerHTML to an empty string
    optionsDiv.innerHTML = "";

    // we loop through each option in the options array of questionObj and create a button for each option
    questionObj.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;

      // we add an onclick event listener to each button that calls the checkAnswer function which checks if the selected option is correct

      button.onclick = () => checkAnswer(option);

      // adds the button to the optionsDiv so that it can be displayed on the page
      optionsDiv.appendChild(button);
});
}

// function which checks if the selected option is correct and updates the score accordingly
function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestionIndex].answer) {
    score++;
  }
};

// function to display next question button and when clicked it increases the currentQuestionIndex
// and checks if there are more questions to show, if yes it calls showQuestion function otherwise it displays the final score
document.getElementById("nextBtn").onclick = function () {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("score").textContent =
      "Your Score: " + score;
  }
};

// initial call to display the first question when the page loads
showQuestion();
