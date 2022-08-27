import React from "react";
import panda from "../assets/img/panda.svg";

const Composition = () => {
  return (
    <div className="composition">

      <div className="composition__cont">
        <div className="composition__cont-pics">
          <img src={panda} alt="panda" />
        </div>
      </div>
    </div>
  );
};

export default Composition;
