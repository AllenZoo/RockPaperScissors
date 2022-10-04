import React, { useState, useContext } from "react";
import { AppContext } from "../main/App";
import ScoreCounter from "./components/scoreCounter";
import "../styles/score.css";
import ScoreText from "./components/scoreText";

function ScoreDisplay() {
  return (
    <div className="score-display-container">
      <ScoreText />
      <ScoreCounter />
    </div>
  );
}

export default ScoreDisplay;
