let tasks = [
  { question: '5 + 3', answer: 8 },
  { question: '2 * 6', answer: 12 },
  { question: '10 - 4', answer: 6 },
  { question: '3 * 3', answer: 9 },
  { question: '7 + 2', answer: 9 }
];

let currentTaskIndex = localStorage.getItem('currentTaskIndex') ? parseInt(localStorage.getItem('currentTaskIndex')) : 0;
let score = localStorage.getItem('score') ? parseInt(localStorage.getItem('score')) : 0;

document.getElementById('task').innerText = 'Solve: ' + tasks[currentTaskIndex].question;

function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answer').value);
  let correctAnswer = tasks[currentTaskIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById('feedback').innerText = 'Correct! Your score: ' + score;
  } else {
    document.getElementById('feedback').innerText = 'Wrong! Try again.';
  }

  // Update the current task index
  currentTaskIndex++;
  if (currentTaskIndex >= tasks.length) {
    currentTaskIndex = 0;
  }

  // Store the progress
  localStorage.setItem('currentTaskIndex', currentTaskIndex);
  localStorage.setItem('score', score);

  // Display the next question
  document.getElementById('task').innerText = 'Solve: ' + tasks[currentTaskIndex].question;
  document.getElementById('answer').value = '';
}
