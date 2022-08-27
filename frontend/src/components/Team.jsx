import React from "react";

const Team = () => {
  return (
    <div className="team">
      <div className="wrapper">
        <div className="team__cont">
          <div className="team__cont-info">
            <h4>Наша команда:</h4>
          </div>
          <div className="team__cont-circles">
            <div className="team__cont-circles-up">
              <div className="team__cont-circles-cont">
                <div className="team__cont-circles-circle"></div>
                <p>Айдер </p>
                <span>SEO</span>
              </div>
              <div className="team__cont-circles-cont">
                <div className="team__cont-circles-circle"></div>
                <p>Айдер </p>
                <span>SEO</span>
              </div>
              <div className="team__cont-circles-cont">
                <div className="team__cont-circles-circle"></div>
                <p>Айдер </p>
                <span>SEO</span>
              </div>
            </div>
            {/* <div className="team__cont-circles-down">
            <div className="team__cont-circles-circle">Айдер СЕО</div>
            <div className="team__cont-circles-circle">Айдер СЕО</div>
            <div className="team__cont-circles-circle">Айдер СЕО</div>
          </div> */}
            <div className="team__cont-circles-down">
              <div className="team__cont-circles-cont">
                <div className="team__cont-circles-circle"></div>
                <p>Айдер </p>
                <span>SEO</span>
              </div>
              <div className="team__cont-circles-cont">
                <div className="team__cont-circles-circle"></div>
                <p>Айдер </p>
                <span>SEO</span>
              </div>
              <div className="team__cont-circles-cont">
                <div className="team__cont-circles-circle team__cont-circles-circle-last "></div>
                <p>Айдер </p>
                <span>SEO</span>
              </div>

              {/* <div className="team__cont-circles-circle">Айдер СЕО</div>
            <div className="team__cont-circles-circle">Айдер СЕО</div> */}
            </div>
          </div>

          <p className="team__cont-full">
            Полный состав{" "}
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1742_1564)">
                <path
                  d="M24.1706 11.5493C24.1703 11.549 24.17 11.5487 24.1697 11.5484L19.1791 6.58182C18.8052 6.20976 18.2005 6.21115 17.8283 6.58507C17.4562 6.95895 17.4577 7.56367 17.8315 7.93578L21.1822 11.2702H0.955106C0.427601 11.2702 0 11.6978 0 12.2254C0 12.7529 0.427601 13.1805 0.955106 13.1805H21.1822L17.8316 16.5149C17.4577 16.887 17.4563 17.4918 17.8284 17.8656C18.2005 18.2396 18.8053 18.2409 19.1791 17.8689L24.1698 12.9023C24.17 12.902 24.1703 12.9017 24.1706 12.9014C24.5447 12.5281 24.5435 11.9214 24.1706 11.5493Z"
                  fill="#fff"
                />
              </g>
              <defs>
                <clipPath id="clip0_1742_1564">
                  <rect width="24.4507" height="24.4507" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
