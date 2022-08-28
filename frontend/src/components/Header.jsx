import React from "react";
import '../../static/css/header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">

      <div className="container">
        <div className="header__logo">
          {/* Link nado */}
          <p>
            PANDA <span>INNOVATION</span>
          </p>
        </div>

        <div className="header__about">
          <ul>
            <li className="header__about-choice">Услуги</li>
            <li className="header__about-choice">Портфолио</li>
            <li className="header__about-choice">Команда</li>
          </ul>

          {/* <div className="blur"></div> */}
        </div>

        <button className="btn btn-nfilled">Связаться с нами</button>
        <button className="btn-phone btn-nfilled">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.118 13.702L12.9998 14.5C10.2181 13.1038 8.49983 11.5 7.49983 9L8.26978 4.8699L6.81435 1H3.06343C1.93588 1 1.04797 1.93178 1.21637 3.04668C1.63678 5.83 2.87636 10.8765 6.49983 14.5C10.305 18.3052 15.7855 19.9564 18.8018 20.6127C19.9666 20.8662 20.9998 19.9575 20.9998 18.7655V15.1812L17.118 13.702Z"
              stroke="url(#paint0_linear_1721_809)"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1721_809"
                x1="11.0509"
                y1="1"
                x2="11.0509"
                y2="20.6554"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00D17F" />
                <stop offset="1" stop-color="#0BFA63" />
              </linearGradient>
            </defs>
          </svg>
        </button>

        <div className="header__burger">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.75 26.9166H18.4167"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.75 17L11.3333 17"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.75 7.08337L4.25 7.08337"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
