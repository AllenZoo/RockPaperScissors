import { useContext } from "react";
import WeaponIcon from "./weaponIcon";
import "../../../styles/selection-display.css";

function SelectionDisplay(props) {
  // Either 'none', 'rock', 'paper', or 'scissors'
  const icon = props.icon;

  // Either 'YOU' or 'THE HOUSE'
  const selector = props.selector;
  const selectorText = selector + " PICKED";

  return (
    <div className="selection-display-container">
      <div className="selection-display-text">{selectorText}</div>
      <WeaponIcon iconType={icon} />
    </div>
  );
}

export default SelectionDisplay;
