import React, { useContext } from "react";
import { AppContext } from "../App";
import SelectionDisplay from "./components/selectionDisplay";
import "../../styles/result-display.css";

function ResultDisplay() {
  const { playerChoice, computerChoice } = useContext(AppContext);

  return (
    <div className="result-display-container">
      <div>
        <SelectionDisplay icon={playerChoice} selector="YOU" />
      </div>

      <div className="result-display">
        <div>Result</div>
        <button>Play Again</button>
      </div>
      <div>
        <SelectionDisplay icon={computerChoice} selector="THE HOUSE" />
      </div>
    </div>
  );
}

export default ResultDisplay;
