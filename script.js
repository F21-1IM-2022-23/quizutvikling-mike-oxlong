let score = 0;
const totalQuestions = 6; //endre dette antallet dersom dere ønsker flere spørsmål (inkluder "start quiz" som om det er et spørmål)
const questions = [
  { //Dette er kodet som et spørsmål, men er egntlig kun satt opp for at dere skal slippe å lage en unik start
    options: [
      { text: "Start Quizen!", correct: false},
    ]
  },
  {
    question: "Hvilket land sitt flagg er dette?",
    options: [
      { text: "Vietnam", correct: false }, //"true" = riktig svar. Skriv det inn i ulike linjer for å endre hvilken knapp som er riktig
      { text: "Kambodsja", correct: true }, //Legg til eller fjern så mange svaralternativ som dere ønsker.
      { text: "Indonesia", correct: false } //Siste spørsmålslinje skal ikke ha komma.
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Hvem sitt flag er dette]?",
    options: [
      { text: "Norge", correct: false },
      { text: "Svergie", correct: false },
      { text: "USA", correct: true }
    ],
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Hvem sitt flag er dette]?",
    options: [
      { text: "Polen", correct: false },
      { text: "Indonesia", correct: true },
      { text: "Singapore", correct: false }
    ],
    imageUrl: 'https://media.snl.no/media/18327/standard_indo.gif',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "[Hvem sitt flag er dette]?",
    options: [
      { text: "chile", correct: true },
      { text: "Texas", correct: false },
      { text: "Arabia", correct: false }
    ],
    imageUrl: 'https://cdn.britannica.com/85/7485-004-00B07230/Flag-Chile.jpg',
    altText: 'Beskrivelse av bilde'
  },
  {
    question: "Hvem sitt flag erd dette ?",
    options: [
      { text: "Albania", correct: true },
      { text: "Sveits", correct: false },
      { text: "et dyr", correct: false }
    ],
    imageUrl: 'https://cdn.britannica.com/00/6200-004-42B7690E/Flag-Albania.jpg',
    altText: 'Beskrivelse av bilde'
  },
  // Kopier malen over for å legge til flere spørsmål. Husk å endre antall spørsmål øverst.
];

//________________Dere trenger ikke redigere noe under denne linjen________________//


// Lager en variabel for å holde styr på hvilket spørsmål som er aktivt
let currentQuestion = 0;

// Håndterer klikk på alternativer, øker poengsummen hvis riktig alternativ er valgt
const handleOptionClick = (isCorrect) => {
  if (isCorrect) {
    score++;
  }
  // Sjekker om dette er siste spørsmål
  if (currentQuestion === totalQuestions - 1) {
    const resultContainer = document.querySelector("#resultContainer");
    resultContainer.innerHTML = `Your final score is: ${score}/${questions.length-1}`;
    resultContainer.style.display = "block"; //Viser resultatteksten etter at siste spørsmål er besvart
    questionContainer.style.display = "none"; //skjuler spørsmålsboksen etter at siste spørsmål er besvart

  } else {
    currentQuestion++;
    renderQuestion();
  }
};
// Renderer det aktive spørsmålet til siden
const renderQuestion = () => {
  const questionContainer = document.querySelector("#questionContainer");
  const currentQ = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h3>${currentQ.question}</h3>
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
// Render første spørsmål når siden lastes
renderQuestion();