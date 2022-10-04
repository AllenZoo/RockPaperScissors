import React, { useState } from "react";
import rockImg from "../../images/icon-rock.svg";
import paperImg from "../../images/icon-paper.svg";
import scissorImg from "../../images/icon-scissors.svg";
import triangleBg from "../../images/bg-triangle.svg";
import WeaponIcon from "./components/weaponIcon";

function WeaponSelector() {
  return (
    <div>
      {/* <img src={rockImg} alt="rock-icon"></img>
      <img src={triangleBg}></img> */}
      <WeaponIcon iconIMG={rockImg} iconType="rock"></WeaponIcon>
      <WeaponIcon iconIMG={paperImg} iconType="paper"></WeaponIcon>
      <WeaponIcon iconIMG={scissorImg} iconType="scissors"></WeaponIcon>
    </div>
  );
}

export default WeaponSelector;
