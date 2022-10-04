import React, { useState } from "react";
import text from "../../images/logo.svg";

function ScoreText() {
  return (
    <div className="score-text-container">
      <img src={text}></img>
      {/* <div>Rock</div>
      <div>Paper</div>
      <div>Scissors</div> */}
    </div>
  );
}

export default ScoreText;
