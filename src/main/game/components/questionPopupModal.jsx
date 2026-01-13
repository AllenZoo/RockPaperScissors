import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { QUESTIONS } from "../../../constants/questions";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
};

const modalStyle = {
  background: "#fff",
  padding: "24px",
  borderRadius: "8px",
  minWidth: "300px",
  textAlign: "center",
};

const buttonRow = {
  marginTop: "16px",
  display: "flex",
  justifyContent: "space-around",
};

export default function QuestionPopupModal({ onQuestionComplete }) {
  const [question, setQuestion] = useState(null);
  const { setQuestionAnswer, setPlayerChoice, mode } = useContext(AppContext);

  // Pick a random question when component mounts or mode becomes question-phase
  useEffect(() => {
    if (mode === "question-phase") {
      const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
      setQuestion(QUESTIONS[randomIndex]);
    }
  }, [mode]);

  if (!question || mode !== "question-phase") return null;

  const handleAnswer = (answer) => {
    const answerData = {
      questionText: question[0],
      questionId: question[1],
      answer, // true = yes, false = no
    };
    setQuestionAnswer(answerData);

    // Notify parent that question has been answered
    if (onQuestionComplete) {
      onQuestionComplete();
    }
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>{question[0]}</h3>

        <div style={buttonRow}>
          <button onClick={() => handleAnswer(true)}>Yes</button>
          <button onClick={() => handleAnswer(false)}>No</button>
        </div>
      </div>
    </div>
  );
}
