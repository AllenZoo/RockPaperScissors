import React, { useState, useContext } from "react";
import { AppContext } from "../main/App";
import ScoreCounter from "./components/scoreCounter";
import "../styles/score.css";
import ScoreText from "./components/scoreText";
import { exportSessionToJSON, exportSessionToCSV } from "../state/recorder";

function ScoreDisplay() {
  const { sessionData } = useContext(AppContext);

  const handleExportJSON = () => {
    if (sessionData.length === 0) {
      alert("No session data to export yet. Play at least one round!");
      return;
    }
    exportSessionToJSON(sessionData);
  };

  const handleExportCSV = () => {
    if (sessionData.length === 0) {
      alert("No session data to export yet. Play at least one round!");
      return;
    }
    exportSessionToCSV(sessionData);
  };

  return (
    <div className="score-display-container">
      <ScoreText />
      <ScoreCounter />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleExportJSON}
          style={{
            padding: "8px 16px",
            fontSize: "12px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Export JSON
        </button>
        <button
          onClick={handleExportCSV}
          style={{
            padding: "8px 16px",
            fontSize: "12px",
            cursor: "pointer",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Export CSV
        </button>
      </div>
    </div>
  );
}

export default ScoreDisplay;
