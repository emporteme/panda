import React from "react";
import astanaHub from "../assets/img/astanaHub.svg";
import terricon from "../assets/img/terriconValley.svg";
import theBrain from "../assets/img/theBrain.svg";
import house16 from "../assets/img/house16.svg";

const Support = () => {
  return (
    <div className="support">
      <div className="wrapper">
        <div className="support__cont">
          <p>Нас поддерживают</p>
          <div className="support__cont-partners">
            <img src={astanaHub} alt="" />
            <img src={terricon} alt="" />
            <img src={theBrain} alt="" />
            <img src={house16} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
