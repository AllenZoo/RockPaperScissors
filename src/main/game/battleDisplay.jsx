import { useContext } from "react";
import { AppContext } from "../App";
import SelectionDisplay from "./components/selectionDisplay";
import "../../styles/battle-display.css";

function BattleDisplay(props) {
  const selector = props.selector;
  const icon = props.icon;
  const { playerChoice, computerChoice } = useContext(AppContext);

  return (
    <div className="battle-display-container">
      <SelectionDisplay icon={playerChoice} selector="YOU" />
      <SelectionDisplay icon={computerChoice} selector="THE HOUSE" />
    </div>
  );
}

export default BattleDisplay;
