import React, { useState, useContext } from "react";
import { AppContext } from "../main/App";
import ScoreCounter from "./components/scoreCounter";
import "../styles/score.css";

function ScoreDisplay() {
  return (
    <div className="score-display-container">
      <div>ROCK PAPER SCISSORS</div>
      <ScoreCounter></ScoreCounter>
    </div>
  );
}

export default ScoreDisplay;
