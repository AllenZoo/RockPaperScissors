import WeaponIcon from "./weaponIcon";
import "../../../styles/winner-display.css";

function WinnerDisplay(props) {
  // Either 'none', 'rock', 'paper', or 'scissors'
  const icon = props.icon;

  // Either 'YOU' or 'RPS GOD'
  const selector = props.selector;
  const selectorText = selector + " PICKED";

  return (
    <div className="winner-display-container">
      <div className="winner-display-text">{selectorText}</div>
      <WeaponIcon className="winner-icon" iconType={icon} />
      <div className="wd-outer-circle">
        <div className="wd-middle-circle">
          <div className="wd-inner-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default WinnerDisplay;
