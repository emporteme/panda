import React from "react";
import panda from "../../static//assets/img/littlePanda.svg";
import '../../static/css/consultation.css'

const Consultation = () => {
  return (
    <div className="consultation">
      <div className="wrapper">
        <div className="consultation__cont">
          <div className="consultation__cont-info">
            <p>Хотите записаться на бесплатную консульацию?</p>
            <img src={panda} alt="" />
          </div>

          <div className="consultation__cont-form">
            <input type="text" placeholder="Имя Фамилия" />
            <input type="text" placeholder="Номер телефона с WhatsApp" />
            <textarea type="text" placeholder="Кратко опишите свой проект" />

            <button className="btn btn-filled">Запись</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
