import { useState } from "react";
import "./index.css";

const questions = [
  {
    question: "What type of fish is Nemo?",
    answers: [
      { text: "Lionfish", correct: false },
      { text: "Clownfish", correct: true },
      { text: "Goldfish", correct: false },
      { text: "Tuna", correct: false },
    ],
  },
  {
    question: "What is the world's fastest bird?",
    answers: [
      { text: "Humming Bird", correct: false },
      { text: "Peregrine Falcon", correct: true },
      { text: "Ostrich", correct: false },
      { text: "Road Runner", correct: false },
    ],
  },
  {
    question: "Which is the largest Planet in our Solar System?",
    answers: [
      { text: "Saturn", correct: false },
      { text: "Mercury", correct: false },
      { text: "Earth", correct: false },
      { text: "Jupiter", correct: true },
    ],
  },
];

export default function App() {
  return (
    <div className="container">
      <Quiz />
    </div>
  );
}

function Quiz() {
  // State that will allow rendering next question.
  const [currQuestion, setCurrQuestion] = useState(0);
  // State that allows to set right answer, and disable option buttons. Gets passed and handled in Options
  const [answered, setAnswered] = useState(false);

  function handleCurrQuestion() {
    setCurrQuestion((curr) => curr + 1);
  }

  function handleAnswered() {
    setAnswered((answered) => !answered);
  }

  function handleClicked() {
    console.log(answered);

    if (!answered) return;
    handleCurrQuestion();
    handleAnswered();
  }

  return (
    <div>
      <h2>{questions[currQuestion].question}</h2>
      <div className="answers">
        {questions[currQuestion].answers.map((answer, i) => (
          <Options
            answer={answer}
            answered={answered}
            handleAnswered={handleAnswered}
            key={i}
          />
        ))}
      </div>
      <button className="next" onClick={handleClicked}>
        Next
      </button>
    </div>
  );
}

function Options({ answer, answered, handleAnswered }) {
  // State to set class name based on right correct.
  // const [selected, setSelected] = useState(false);

  // function handleSelected() {
  //   setSelected((selected) => !selected);
  // }

  function handleClick(e) {
    console.log(answered);
    handleAnswered();
    console.log(answered);

    if (!answer.correct && answered) e.target.classList.add("wrong");
  }
  return (
    <button className={"btn"} disabled={answered && true} onClick={handleClick}>
      {answer.text}
    </button>
  );
}
