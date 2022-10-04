import React, { useState } from "react";
import WeaponSelector from "./game/WeaponSelector";
import ".././styles/body.css";

function BodyDisplay() {
  return (
    <div>
      <div className="body-display">
        <WeaponSelector />
      </div>
      <div>
        <button className="rules-button">RULES</button>
      </div>
    </div>
  );
}

export default BodyDisplay;
