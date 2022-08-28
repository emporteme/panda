import React from "react";
import astanaHub from "../../static/assets/img/astanaHub.svg";
import terricon from "../../static/assets/img/terriconValley.svg";
import theBrain from "../../static/assets/img/theBrain.svg";
import house16 from "../../static/assets/img/house16.svg";
import '../../static/css/support.css'


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
