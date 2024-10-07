import { useState } from "react";
import "./index.css";

const questions = [
  {
    question: "What type of fish is Nemo?",
    options: ["Lionfish", "Clownfish", "Goldfish", "Tuna"],
    answer: "Clownfish",
  },

  {
    question: "What is the world's fastest bird?",
    options: ["Humming Bird", "Peregrine Falcon", "Ostrich", "Road Runner"],
    answer: "Peregrine Falcon",
  },
  {
    question: "Which is the largest Planet in our Solar System?",
    options: ["Saturn", "Mercury", "Earth", "Jupiter"],
    answer: "Jupiter",
  },
];

console.log(questions.length);

export default function App() {
  return <Quiz />;
}

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(false);
  const [userGuess, setUserGuess] = useState(null);
  let [score, setScore] = useState(0);

  async function handleOptionsClick(option) {
    setSelected(true);
    setUserGuess(option);
    setScore((score) => score + 1);
  }

  function handleNextClick() {
    setCurrentQuestion((curr) => curr + 1);
    setSelected(false);
    console.log(userGuess);
    console.log(currentAnswer);
    console.log(score);
  }

  const currentAnswer = questions[currentQuestion]?.answer;

  return currentQuestion > questions.length - 1 ? (
    <div>hello</div>
  ) : (
    <div className="quiz">
      <h2>{questions[currentQuestion].question}</h2>
      <div className="options__container">
        {questions[currentQuestion].options.map((option, i) => (
          <button
            className={
              option === currentAnswer && selected
                ? "options right"
                : option !== currentAnswer && option === userGuess
                ? "options wrong"
                : "options"
            }
            key={i}
            onClick={() => handleOptionsClick(option)}
            disabled={selected && true}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="next"
        onClick={handleNextClick}
        disabled={!selected && true}
      >
        Next
      </button>
    </div>
  );
}
