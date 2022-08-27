import React from "react";
import { casesList } from "../assets/data/casesList";
import photoFoody from "../assets/img/photoFoody.svg";
import swipe from "../assets/img/swipeWhite.svg";


const Cases = () => {
  const [leftCircle, setLeftCircle] = React.useState(false);
  const [rightCircle, setRightCircle] = React.useState(true);

  const scrollRef = React.useRef(null);

  const scroll = (move) => {
    scrollRef.current.scrollLeft += move;

    // console.log(Math.round(scrollRef.current.scrollLeft));
  };

  return (
    <div className="cases">
      <div className="wrapper">

      <div className="cases__info">
        <h1 className="cases__info-text">Свежие кейсы: </h1>
        <div className="cases__info-btn">
          <div
            className={`cases__info-btns btn-circle${
              leftCircle ? " btn-active" : ""
            }`}
            onClick={() => scroll(-630)}
          >
            <svg
              width="25"
              height="15"
              viewBox="0 0 29 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.332254 6.69814C0.332594 6.6978 0.332876 6.6974 0.333273 6.69706L6.25245 0.806438C6.69588 0.365151 7.41313 0.366793 7.85453 0.810289C8.29587 1.25373 8.29417 1.97097 7.85073 2.41231L3.8766 6.36719H27.8672C28.4928 6.36719 29 6.87435 29 7.5C29 8.12565 28.4928 8.63281 27.8672 8.63281H3.87665L7.85067 12.5877C8.29411 13.029 8.29581 13.7463 7.85447 14.1897C7.41307 14.6333 6.69577 14.6348 6.25239 14.1936L0.333216 8.30294C0.332876 8.3026 0.332594 8.3022 0.332197 8.30186C-0.111469 7.85905 -0.110052 7.13948 0.332254 6.69814Z"
                fill="#181818"
              />
            </svg>
          </div>

          <div
            className={`cases__info-btns btn-circle${
              rightCircle ? " btn-active" : ""
            }`}
            onClick={() => scroll(630)}
          >
            <svg
              width="30"
              height="25"
              viewBox="0 5 29 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1742_1564)">
                <path
                  d="M24.1706 11.5493C24.1703 11.549 24.17 11.5487 24.1697 11.5484L19.1791 6.58182C18.8052 6.20976 18.2005 6.21115 17.8283 6.58507C17.4562 6.95895 17.4577 7.56367 17.8315 7.93578L21.1822 11.2702H0.955106C0.427601 11.2702 0 11.6978 0 12.2254C0 12.7529 0.427601 13.1805 0.955106 13.1805H21.1822L17.8316 16.5149C17.4577 16.887 17.4563 17.4918 17.8284 17.8656C18.2005 18.2396 18.8053 18.2409 19.1791 17.8689L24.1698 12.9023C24.17 12.902 24.1703 12.9017 24.1706 12.9014C24.5447 12.5281 24.5435 11.9214 24.1706 11.5493Z"
                  fill="#181818"
                />
              </g>
              <defs>
                <clipPath id="clip0_1742_1564">
                  <rect width="24.4507" height="24.4507" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div className="cases__info-btn-swipe">
          <img src={swipe} alt="" />
        </div>
      </div>
      

      <div className="cases__list" ref={scrollRef}>
        {casesList.map((product) => (
          <div className="cases__card">
            <div className="cases__card-left">
              <div className="cases__card-logo">{product.logo}</div>
              <div className="cases__card-text">
                <p>{product.text}</p>
              </div>
              <div className="cases__card-stack">
                {product.stack.map((stack) => (
                  <div className="cases__card-stack-block">{stack}</div>
                ))}
              </div>
            </div>

            <div className="cases__card-right">
              <img src={photoFoody} alt="" />
            </div>
          </div>
        ))}
      </div>

      </div>
    </div>
  );
};

export default Cases;
