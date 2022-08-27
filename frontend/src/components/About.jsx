import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="wrapper"> 
        
      <div className="about__container">
        <div className="about__main">
          <h1 className="about__main-text">Превратим идею</h1>
          <h1 className="about__main-text">
            в <span className="about__main-text-span">реальный проект</span>.
          </h1>
        </div>

        <button className="about__btn btn btn-filled">
            Связаться с нами
        </button>

        <div className="about__ears">
          <div className="ears">
            <div className="about__ears-left">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="39.7084"
                  cy="40.2816"
                  r="39.0153"
                  transform="rotate(31.25 39.7084 40.2816)"
                  stroke="url(#paint0_linear_1742_1573)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1742_1573"
                    x1="39.7084"
                    y1="0.766285"
                    x2="43.4013"
                    y2="48.4001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="about__ears-right">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="39.7084"
                  cy="40.2816"
                  r="39.0153"
                  transform="rotate(31.25 39.7084 40.2816)"
                  stroke="url(#paint0_linear_1742_1573)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1742_1573"
                    x1="39.7084"
                    y1="0.766285"
                    x2="43.4013"
                    y2="48.4001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="about__ears-cont">
            <div className="about__ears-main">
              <p>Panda Innovation</p>
            </div>
            <div className="about__ears-text">
              <p>это команда опытных </p>
              <p> разработчиков для создания</p>
              <p>лучшего MVP вашего проекта.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
