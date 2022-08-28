import React from "react";
import '../../static/css/record.css'

const Record = () => {
  return (
    <div className="record">
      <div className="wrapper">

      <div className="record__main">
        <div className="record__main-text">
          Записаться на бесплатную
          консультацию можно прямо <span>сейчас!</span>
        </div>

        <div className="record__main-text-phone">
          <p>Появились вопросы?</p>
        </div>

        <button className="record__main-btn btn-filled btn">
          Запись{" "}
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1742_1564)">
              <path
                d="M24.1706 11.5493C24.1703 11.549 24.17 11.5487 24.1697 11.5484L19.1791 6.58182C18.8052 6.20976 18.2005 6.21115 17.8283 6.58507C17.4562 6.95895 17.4577 7.56367 17.8315 7.93578L21.1822 11.2702H0.955106C0.427601 11.2702 0 11.6978 0 12.2254C0 12.7529 0.427601 13.1805 0.955106 13.1805H21.1822L17.8316 16.5149C17.4577 16.887 17.4563 17.4918 17.8284 17.8656C18.2005 18.2396 18.8053 18.2409 19.1791 17.8689L24.1698 12.9023C24.17 12.902 24.1703 12.9017 24.1706 12.9014C24.5447 12.5281 24.5435 11.9214 24.1706 11.5493Z"
                fill="#FFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_1742_1564">
                <rect width="24.4507" height="24.4507" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button className="btn record__main-btn-sm">
          Спросить{" "}
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1742_1564)">
              <path
                d="M24.1706 11.5493C24.1703 11.549 24.17 11.5487 24.1697 11.5484L19.1791 6.58182C18.8052 6.20976 18.2005 6.21115 17.8283 6.58507C17.4562 6.95895 17.4577 7.56367 17.8315 7.93578L21.1822 11.2702H0.955106C0.427601 11.2702 0 11.6978 0 12.2254C0 12.7529 0.427601 13.1805 0.955106 13.1805H21.1822L17.8316 16.5149C17.4577 16.887 17.4563 17.4918 17.8284 17.8656C18.2005 18.2396 18.8053 18.2409 19.1791 17.8689L24.1698 12.9023C24.17 12.902 24.1703 12.9017 24.1706 12.9014C24.5447 12.5281 24.5435 11.9214 24.1706 11.5493Z"
                fill="#000"
              />
            </g>
            <defs>
              <clipPath id="clip0_1742_1564">
                <rect width="24.4507" height="24.4507" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Record;
