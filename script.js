let questionNumber = 0;
const quizQuestions = [
  { //Dette er kodet som et spørsmål, men er egntlig kun satt opp for at dere skal slippe å lage en unik start
    options: [
      { text: "Start Quizen!", correct: false}, 
    ]
  },
  {
    question: "[Skriv spørsmål 1 her]?",
    options: [
      { text: "Alternativ 1", correct: true }, //"true" = riktig svar. Skriv det inn i ulike linjer for å endre hvilken knapp som er riktig
      { text: "Alternativ 2", correct: false }, //Legg til eller fjern så mange svaralternativ som dere ønsker.
      { text: "Alternativ 3", correct: false } //Siste spørsmålslinje skal ikke ha komma.
    ],
    imageUrl: 'https://unsplash.it/400/200', //bytt ut med en ny bildeaddresse for hvert spørsmål. 400 og 200 er størrelsen i pixler.
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 2 her]?",
    options: [
      { text: "Alternativ I", correct: true },
      { text: "Alternativ II", correct: false },
      { text: "Alternativ III", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 3 her]?",
    options: [
      { text: "Alternativ A", correct: true },
      { text: "Alternativ B", correct: false },
      { text: "Alternativ C", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 4 her]?",
    options: [
      { text: "Alternativ .", correct: true },
      { text: "Alternativ ..", correct: false },
      { text: "Alternativ ...", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Skriv spørsmål 5 her]?",
    options: [
      { text: "Alternativ -", correct: true },
      { text: "Alternativ +", correct: false },
      { text: "Alternativ x", correct: false }
    ],
    imageUrl: 'https://unsplash.it/400/200',
    altText: 'Beskrivelse av bilde'
  },
  // Kopier malen over for å legge til flere spørsmål. Husk å endre antall spørsmål øverst.
];


//___________________________Dere trenger ikke redigere noe under denne linjen_______________________________//

function handleOptionClick(event) {
  var selectedOption = event.target;
  var answer = selectedOption.textContent;
  var question = quizQuestions[currentQuestionIndex];
  if (answer === question.correctAnswer) {
    score++;
  }

  if (currentQuestionIndex === questions.length - 1) {
    displayResults();
    return;
  }

  currentQuestionIndex++;
  displayQuestion();
}

const showQuestion = () => {
  if (questionNumber >= quizQuestions.length) {
    showResults();
    return;
  }
  const question = quizQuestions[questionNumber];
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = `
    <p>${question.question}</p>
    ${question.options.map((option, index) => `
      <div>
        <input type="radio" name="answer" id="answer${index}" value="${index}">
        <label for="answer${index}">${option}</label>
      </div>
    `).join('')}
    <button type="button">Neste</button>
  `;
};

const showResults = () => {
  const resultContainer = document.getElementById('resultContainer');
  let result = 0;
  const answers = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(input => input.value);
  quizQuestions.forEach((question, index) => {
    if (answers[index] == question.correctOption) {
      result++;
    }
  });
  resultContainer.innerHTML = `
    <p>Du fikk ${result} av ${quizQuestions.length} riktige.</p>
    <button type="button">Prøv igjen</button>
  `;
};

const handleNextButtonClick = (event) => {
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    questionNumber++;
    showQuestion();
  }
};

document.addEventListener('click', handleNextButtonClick);

const handleClick = () => {
  setLoading(true);
  fetchData(inputValue)
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
};

return (
  <div>
    <input
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
    <button disabled={loading} onClick={handleClick}>
      Fetch Data
    </button>
    {loading && <div>Loading...</div>}
    {data && (
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    )}
  </div>
);


// function showResult() {
//   const resultContainer = document.getElementById("resultContainer");
//   resultContainer.innerHTML = "";

//   const resultElement = document.createElement("p");
//   resultElement.innerText = `Du fikk ${score} av ${questions.length} riktige svar!`;
//   resultContainer.appendChild(resultElement);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   showQuestion();
// });


//   if (currentQuestion === totalQuestions - 1) {
//     // Hvis sluttresultat
//     const resultContainer = document.querySelector("#resultContainer");
//     resultContainer.innerHTML = `Your final score is: ${score}/${questions.length-1}`;
//     resultContainer.style.display = "block"; //Viser resultatteksten etter at siste spørsmål er besvart
//     questionContainer.style.display = "none"; //skjuler spørsmålsboksen etter at siste spørsmål er besvart
//   } else {
//     currentQuestion++;
//     renderQuestion();
//   }
// };

// const renderQuestion = () => {
//   let questionContainer = document.querySelector("#questionContainer");
//   const currentQ = questions[currentQuestion];
//   questionContainer.innerHTML = `
//     <h3>${currentQ.question}</h3>
//     <img src="${questions[currentQuestion].imageUrl}" alt="Question Image">
//     <div>
//       ${currentQ.options
//         .map(
//           (option, index) => `
//         <button onclick="handleOptionClick(${option.correct})">
//           ${option.text}
//         </button>
//       `
//         )
//         .join("")}
//     </div>
//   `;
// };

// renderQuestion();