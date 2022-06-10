import "../styles/Switch.css";

import { ChangeEventHandler, FC } from "react";
import { Outlet } from "react-router-dom";

interface ISwitchProps {
  label: string;
  otherLabel: string;
  value: boolean;
  onToggleHandler: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FC<ISwitchProps> = (props) => {

  return (
    <div className="outerDiv">
      <Outlet />
      <div className="switchContainer">
        <span className="themeText">{props.label}</span>
        <label className="switch">
          <input type="checkbox" checked={props.value} onChange={props.onToggleHandler} />
          <span className="slider" />
        </label>
        <span className="themeText">{props.otherLabel}</span>
      </div>
    </div>
  );
};

export default Switch;
