import React from "react";
import "../Styles/icon.css";

const Icon = (props) => {
  return (
    <div className='icon'>
      <button className='logo' style={{ backgroundColor: props.color }}>
        <span role='img' aria-label={props.label}>
          {props.logoEmoji}
        </span>
      </button>
      <div className='iconName' style={{ color: props.textColor }}>
        {props.name}
      </div>
    </div>
  );
};

export default Icon;
