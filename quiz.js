const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"]
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["80", "8080", "443"]
  },
  {
    question: "Which programming language is primarily used for iOS app development?",
    options: ["Swift", "Java", "Kotlin"]
  }
];

// Display questions and options
const quizContainer = document.getElementById("quiz");
quizData.forEach((item, index) => {
  const questionElement = document.createElement("div");
  questionElement.innerHTML = `<h3>${index + 1}. ${item.question}</h3>`;
  item.options.forEach(option => {
    questionElement.innerHTML += `<p><input type="radio" name="question${index}"> ${option}</p>`;
  });
  quizContainer.appendChild(questionElement);
});