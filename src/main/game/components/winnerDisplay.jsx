import WeaponIcon from "./weaponIcon";
import "../../../styles/winner-display.css";

function WinnerDisplay(props) {
  // Either 'none', 'rock', 'paper', or 'scissors'
  const icon = props.icon;

  // Either 'YOU' or 'THE HOUSE'
  const selector = props.selector;
  const selectorText = selector + " PICKED";

  return (
    <div className="winner-display-container">
      <div className="winner-display-text">{selectorText}</div>

      <div className="outer-circle">
        <div className="middle-circle">
          <div className="inner-circle">
            <WeaponIcon iconType={icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WinnerDisplay;
