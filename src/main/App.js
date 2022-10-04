import { createContext, useContext } from "react";
import "../styles/App.css";
import React, { useState } from "react";
import ScoreDisplay from "../score/scoreDisplay";

export const AppContext = createContext(null);
function App() {
  const [mode, setMode] = useState("start");
  const [score, setScore] = useState(0);

  return (
    <AppContext.Provider value={{ mode, setMode, score, setScore }}>
      <ScoreDisplay />
    </AppContext.Provider>

    // <div className="App">
    //   {mode === "start" && <>Start Menu</>}
    //   {mode === "rules" && <>Start Menu</>}
    //   {mode === "player picked" && <>Start Menu</>}
    //   {mode === "computer picked" && <>Start Menu</>}
    //   {mode === "result"}
    // </div>
  );
}

export default App;
