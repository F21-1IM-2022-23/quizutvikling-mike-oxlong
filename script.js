let score = 0;
const totalQuestions = 5; //endre til et større antall om dere ønsker flere enn 5
const questions = [
  {
    question: "[Skriv spørsmål 1 her]?",
    options: [
      { text: "Alternativ 1", correct: false },
      { text: "Alternativ 2", correct: true }, //Det eller de svarene som får "true" bak seg, gir poeng til brukerne
      { text: "Alternativ 3", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200', //bytt ut med en ny bildeaddresse for hvert spørsmål
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 2 her]?",
    options: [
      { text: "Alternativ I", correct: false },
      { text: "Alternativ II", correct: true },
      { text: "Alternativ III", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 3 her]?",
    options: [
      { text: "Alternativ A", correct: false },
      { text: "Alternativ B", correct: true },
      { text: "Alternativ C", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 4 her]?",
    options: [
      { text: "Alternativ .", correct: false },
      { text: "Alternativ ..", correct: true },
      { text: "Alternativ ...", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 5 her]?",
    options: [
      { text: "Alternativ -", correct: false },
      { text: "Alternativ +", correct: true },
      { text: "Alternativ x", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  // Legg til flere spørsmål her
];

let currentQuestion = 0;

const handleOptionClick = (isCorrect) => {
  if (isCorrect) {
    score++;
  }

  if (currentQuestion === totalQuestions - 1) {
    // Hvis sluttresultat
    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.innerHTML = `Your final score is: ${score}/${totalQuestions}`;
    resultContainer.style.display = "block";
  } else {
    currentQuestion++;
    renderQuestion();
  }
};

const renderQuestion = () => {
  const questionContainer = document.querySelector("#questionContainer");
  const currentQ = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h2>${currentQ.question}</h2>
    <img src="${questions[currentQuestion].imageUrl}" alt="Question Image">
    <div>
      ${currentQ.options
        .map(
          (option, index) => `
        <button onclick="handleOptionClick(${option.correct})">
          ${option.text}
        </button>
      `
        )
        .join("")}
    </div>
  `;
};

renderQuestion();