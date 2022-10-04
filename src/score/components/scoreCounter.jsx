import React, { useContext, useState } from "react";
import { AppContext } from "../../main/App";

function ScoreCounter() {
  const { score } = useContext(AppContext);
  return <div className="score-counter-background">{score}</div>;
}

export default ScoreCounter;
