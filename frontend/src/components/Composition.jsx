import React from "react";
import panda from "../../static/assets/img/panda.svg";
import '../../static/css/composition.css'


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
