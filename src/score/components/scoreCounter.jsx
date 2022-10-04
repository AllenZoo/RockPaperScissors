import React, { useContext, useState } from "react";
import { AppContext } from "../../main/App";

function ScoreCounter() {
  const { score } = useContext(AppContext);
  return (
    <div className="score-counter-container">
      <div className="score-counter-header">SCORE</div>
      <div className="score-counter-score">{score}</div>
    </div>
  );
}

export default ScoreCounter;
