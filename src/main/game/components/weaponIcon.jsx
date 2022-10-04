import "../../../styles/icon.css";

function WeaponIcon(props) {
  const iconIMG = props.iconIMG;
  const iconType = props.iconType;
  const style = "outer-circle " + iconType + "-container";

  return (
    <div>
      <div className={style}>
        <div className="inner-circle">
          <img className="icon-image" src={iconIMG} alt="icon image"></img>
        </div>
      </div>
    </div>
  );
}

export default WeaponIcon;
