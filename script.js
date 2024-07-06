// Wait for the DOM to load before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // Simulate user authentication
  const authenticated = true;

  // Define quiz questions and answers
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
      },
      correctAnswer: "c",
    },
    {
      question: "Who is the CEO of Tesla?",
      answers: {
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Steve Jobs",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: {
        a: "Earth",
        b: "Jupiter",
        c: "Saturn",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the chemical symbol for water?",
      answers: {
        a: "H2O",
        b: "O2",
        c: "CO2",
      },
      correctAnswer: "a",
    },
    {
      question: "Which language is used for web development?",
      answers: {
        a: "Python",
        b: "JavaScript",
        c: "C++",
      },
      correctAnswer: "b",
    },
    {
      question: "What is the capital of Japan?",
      answers: {
        a: "Beijing",
        b: "Seoul",
        c: "Tokyo",
      },
      correctAnswer: "c",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: {
        a: "Harper Lee",
        b: "Mark Twain",
        c: "Ernest Hemingway",
      },
      correctAnswer: "a",
    },
    {
      question: "What is the boiling point of water?",
      answers: {
        a: "90°C",
        b: "100°C",
        c: "110°C",
      },
      correctAnswer: "b",
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: {
        a: "Mars",
        b: "Venus",
        c: "Mercury",
      },
      correctAnswer: "a",
    },
    {
      question: "Who painted the Mona Lisa?",
      answers: {
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
      },
      correctAnswer: "c",
    },
  ];

  // Function to build the quiz HTML
  function buildQuiz() {
    const output = [];

    // Iterate over each question
    quizQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];

      // Iterate over each answer for the current question
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
            </label>`
        );
      }

      // Add the question and answers to the output array
      output.push(
        `<div class="question">${currentQuestion.question}</div>
           <div class="answers">${answers.join("")}</div>`
      );
    });

    // Combine the output array into one string and insert it into the quiz container
    quizContainer.innerHTML = output.join("");
  }

  // Function to show the results of the quiz
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    // Iterate over each question
    quizQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // If the user's answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = "green";
      } else {
        answerContainers[questionNumber].style.color = "red";
        // Highlight the correct answer
        answerContainer.querySelector(
          `input[value=${currentQuestion.correctAnswer}]`
        ).parentElement.style.color = "green";
      }
    });

    // Display the number of correct answers out of the total questions
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
  }

  // If the user is authenticated, build the quiz and set up the event listener for the submit button
  if (authenticated) {
    buildQuiz();
    submitButton.addEventListener("click", showResults);
  } else {
    quizContainer.innerHTML = "You need to log in to take the quiz.";
  }
});
