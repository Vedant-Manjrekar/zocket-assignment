import React, { useState } from "react";
import "./new_camp.css";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Option({ head, info, icon, icon_outl, clicks }) {
  const [click, setClick] = useState(false);

  const optionStyles = {
    border: click ? "1px solid #0F6EFF" : "1px solid #f3f3f3",
  };

  const tickStyle = {
    display: click ? "block" : "none",
  };

  return (
    <div
      className="option"
      onClick={() => setClick(!click)}
      style={optionStyles}
    >
      {/* Icon */}
      <div className="icon">
        {clicks ? (
          click ? (
            <img src={icon} alt="" />
          ) : (
            <img src={icon_outl} alt="" />
          )
        ) : (
          <img src={icon} alt="" />
        )}
      </div>
      <div className="info">
        <div className="main_title">{head}</div>
        <div className="more_info">{info}</div>
      </div>
      <div className="tick" id="tick" style={tickStyle}>
        <BsFillCheckCircleFill color="#0F6EFF" />
      </div>
    </div>
  );
}

export default Option;
