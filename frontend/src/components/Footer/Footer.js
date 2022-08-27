import React from "react";

import allInOne from "./Footer.style";
const { FooterContainer, Service, Contact, Contact__info } = allInOne;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="wrapper">
        
        <Service>
          <h1>Сервисы</h1>

          <div>
            <p>Партнерство</p>
            <p>Прайс лист</p>
            <p>Наши проекты</p>
          </div>
        </Service>

        <Contact>
          <h1>Связь с нами</h1>

          <div>
            <Contact__info>
              <div>
                <div>
                  <p>+7 700 777 00 77</p>
                  <p>Мангилик Ел С-3.6</p>
                </div>
                <div>
                  <p>+7 777 222 02 02</p>
                  <p>Мангилик Ел С-4.6</p>
                </div>
              </div>

              <p>made with 💚 by Panda Innovation</p>
            </Contact__info>
          </div>
        </Contact>
      </div>
    </FooterContainer>
  );
};

export default Footer;
