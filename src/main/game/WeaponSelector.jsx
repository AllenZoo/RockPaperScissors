import React, { useState } from "react";
import rockImg from "../../images/icon-rock.svg";
import paperImg from "../../images/icon-paper.svg";
import scissorImg from "../../images/icon-scissors.svg";
import triangleBg from "../../images/bg-triangle.svg";
import WeaponIcon from "./components/weaponIcon";
import "../../styles/selector.css";

function WeaponSelector() {
  return (
    <div>
      <img src={triangleBg} alt="triangle-bg"></img>
      <button className="icon-button">
        <WeaponIcon iconIMG={rockImg} iconType="rock"></WeaponIcon>
      </button>

      <button className="icon-button">
        <WeaponIcon iconIMG={paperImg} iconType="paper"></WeaponIcon>
      </button>
      <button className="icon-button">
        <WeaponIcon iconIMG={scissorImg} iconType="scissors"></WeaponIcon>
      </button>
    </div>
  );
}

export default WeaponSelector;
