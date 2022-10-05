import "../../../styles/icon.css";
import rockImg from "../../../images/icon-rock.svg";
import paperImg from "../../../images/icon-paper.svg";
import scissorImg from "../../../images/icon-scissors.svg";

function WeaponIcon(props) {
  const iconType = props.iconType;
  const style = "outer-circle " + iconType + "-container";

  const getImage = (icon) => {
    switch (icon) {
      case "rock":
        return rockImg;
      case "paper":
        return paperImg;
      case "scissors":
        return scissorImg;
    }
  };

  return (
    <div>
      <div className={style}>
        <div className="inner-circle">
          <img
            className="icon-image"
            src={getImage(iconType)}
            alt="icon image"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default WeaponIcon;
