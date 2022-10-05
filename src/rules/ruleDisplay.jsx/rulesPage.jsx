import { useState } from "react";
import ruleIMG from "../../images/image-rules.svg";
import "../../styles/rule-page.css";

function RulesPage(props) {
  return (
    <div>
      <div className="rule-page-container">
        <div className="rule-page-header">
          <div>Rules</div>
          <button onClick={props.toggleDisplay}>X</button>
        </div>
        <div>
          <img className="rule-page-image" src={ruleIMG} />
        </div>
      </div>

      <div
        className="dimmer"
        // style={{ display: shouldDim ? "block" : "none" }}
      ></div>
    </div>
  );
}

export default RulesPage;
