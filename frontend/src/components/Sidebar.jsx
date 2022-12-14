import React from "react";
import '../../static/css/sidebar.css'


// import insta from "../assets/img/instagram.svg";
// import telegram from "../assets/img/telegram.svg";
// import whatsapp from "../assets/img/whatsapp.svg";
// import linkedin from "../assets/img/linkedin.svg";
// import tiktok from "../assets/img/tiktok.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__contents">
        <div className="sidebar__contents-line"></div>

        <div className="sidebar__contents__social">
          {/* <img width="38" src={insta} alt="instagram" className='sidebar__contents-pic'/> */}
          
          <div className="sidebar__contents-pic">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7495 0H7.24982C3.26277 0 0 3.26277 0 7.24982V21.7502C0 25.7362 3.26277 29 7.24982 29H21.7495C25.7365 29 28.9993 25.7362 28.9993 21.7502V7.24982C28.9993 3.26277 25.7365 0 21.7495 0ZM26.5826 21.7502C26.5826 24.4145 24.4153 26.5833 21.7495 26.5833H7.24982C4.58516 26.5833 2.41673 24.4145 2.41673 21.7502V7.24982C2.41673 4.58481 4.58516 2.41673 7.24982 2.41673H21.7495C24.4153 2.41673 26.5826 4.58481 26.5826 7.24982V21.7502Z"
                fill="white"
              />
              <path
                d="M22.3544 8.45804C23.3554 8.45804 24.1669 7.64658 24.1669 6.64559C24.1669 5.64459 23.3554 4.83313 22.3544 4.83313C21.3535 4.83313 20.542 5.64459 20.542 6.64559C20.542 7.64658 21.3535 8.45804 22.3544 8.45804Z"
                fill="white"
              />
              <path
                d="M14.4998 7.24988C10.495 7.24988 7.25 10.4952 7.25 14.4997C7.25 18.5027 10.495 21.7502 14.4998 21.7502C18.5035 21.7502 21.7496 18.5027 21.7496 14.4997C21.7496 10.4952 18.5035 7.24988 14.4998 7.24988ZM14.4998 19.3335C11.8308 19.3335 9.66673 17.1695 9.66673 14.4997C9.66673 11.8299 11.8308 9.6666 14.4998 9.6666C17.1689 9.6666 19.3329 11.8299 19.3329 14.4997C19.3329 17.1695 17.1689 19.3335 14.4998 19.3335Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="sidebar__contents-pic">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1742_1804)">
                <path
                  d="M28.4321 2.37599C27.9656 1.94853 27.3025 1.80607 26.7015 2.00415L1.20255 10.4097C0.507626 10.6387 0.0363762 11.2591 0.0019953 11.9899C-0.0323289 12.7208 0.378599 13.3826 1.04888 13.676L7.35497 16.435C7.38572 16.5778 9.19602 24.974 9.25758 25.2594C9.3366 25.626 9.52266 25.9525 9.91682 26.0529C10.3155 26.1545 10.5972 25.9366 10.8947 25.7139C11.0602 25.5899 15.5743 22.2098 15.5743 22.2098L21.0452 26.6866C21.3638 26.9475 21.7533 27.0835 22.1504 27.0835C22.3395 27.0835 22.5303 27.0527 22.716 26.9897C23.2918 26.7944 23.7187 26.3245 23.8578 25.7327L28.9536 4.06751C29.0984 3.45154 28.8987 2.80346 28.4321 2.37599ZM11.3023 18.0161C11.2992 18.0234 11.2961 18.0317 11.2932 18.0417L10.2384 21.7272L9.06115 16.2673L17.1561 11.7698L11.4965 17.6875C11.4073 17.7807 11.3417 17.8934 11.3023 18.0161ZM11.6371 23.0302L12.1162 21.3562L12.5745 19.755L14.2166 21.0987L11.6371 23.0302ZM27.2956 3.67748L22.1999 25.3426C22.1974 25.3534 22.194 25.3682 22.169 25.3767C22.1443 25.3851 22.1323 25.3755 22.1238 25.3685L16.1374 20.4697C16.1373 20.4696 16.1372 20.4694 16.137 20.4693L13.3633 18.1996L22.2742 8.88236C22.5652 8.57803 22.5902 8.10672 22.3328 7.77339C22.0754 7.44 21.6131 7.34479 21.2451 7.54938L8.05063 14.8803L1.73163 12.1155C1.71237 12.1071 1.70178 12.1024 1.70331 12.0699C1.70484 12.0374 1.71583 12.0337 1.73576 12.0272L27.2347 3.62169C27.247 3.61767 27.261 3.61302 27.2815 3.63172C27.302 3.65052 27.2986 3.66479 27.2956 3.67748Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1742_1804">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="sidebar__contents-pic">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1742_1809)">
                <path
                  d="M24.8809 4.11906C22.2246 1.4627 18.6936 0 14.9368 0C14.9365 0 14.9356 0 14.9354 0C13.0773 0.000221252 11.2666 0.359978 9.5539 1.06953C7.84097 1.77909 6.30636 2.80504 4.99234 4.11906C2.33621 6.77519 0.873508 10.3068 0.873508 14.0632C0.873508 16.3034 1.41403 18.5297 2.43821 20.5132L0.0743441 27.2663C-0.0922589 27.7426 0.0256686 28.2604 0.38277 28.6172C0.632564 28.8672 0.961345 29 1.29942 29C1.44434 29 1.59081 28.9757 1.73374 28.9257L8.4868 26.562C10.4703 27.5862 12.6966 28.1267 14.9368 28.1267C18.6932 28.1267 22.2246 26.6638 24.8809 24.0077C27.5371 21.3515 29 17.8199 29 14.0635C29 10.3068 27.5373 6.77519 24.8809 4.11906ZM23.6782 22.8049C21.3433 25.14 18.2387 26.4257 14.9368 26.4257C12.9167 26.4257 10.91 25.9261 9.1333 24.9805C8.81116 24.8093 8.43038 24.7798 8.08855 24.8995L1.95322 27.0468L4.1007 20.9115C4.22039 20.5692 4.19075 20.1884 4.0195 19.8665C3.07408 18.0903 2.57428 16.0835 2.57428 14.0632C2.57428 10.7613 3.86019 7.65666 6.19507 5.32178C8.52973 2.98713 11.6339 1.70121 14.9356 1.70077H14.9368C18.2389 1.70077 21.3433 2.98669 23.6782 5.32178C26.0133 7.65666 27.2992 10.7611 27.2992 14.0632C27.2992 17.3654 26.0133 20.4701 23.6782 22.8049Z"
                  fill="white"
                />
                <path
                  d="M20.163 15.3195C19.5161 14.6726 18.4634 14.6726 17.8164 15.3195L17.1089 16.0271C15.3519 15.0697 13.9301 13.648 12.9725 11.891L13.6801 11.1834C14.3273 10.5365 14.3273 9.48379 13.6801 8.83685L11.7734 6.93009C11.1264 6.28315 10.0737 6.28315 9.42675 6.93009L7.90144 8.45541C7.02771 9.32913 6.98412 10.8312 7.77864 12.6851C8.46851 14.2947 9.73097 16.0638 11.3335 17.6664C12.936 19.2689 14.7052 20.5314 16.3148 21.2212C17.1956 21.5987 17.9967 21.787 18.689 21.787C19.4539 21.787 20.0858 21.5571 20.5445 21.0984L22.0698 19.5729V19.5731C22.3833 19.2596 22.5559 18.843 22.5559 18.3998C22.5559 17.9564 22.3833 17.5398 22.0698 17.2265L20.163 15.3195ZM19.3417 19.8957C19.0924 20.1451 18.3255 20.2325 16.985 19.6581C15.5694 19.0514 13.9894 17.9168 12.5362 16.4636C11.083 15.0105 9.94868 13.4307 9.34201 12.0151C8.76742 10.6746 8.85481 9.90749 9.10416 9.65813L10.6003 8.16203L12.4482 10.0101L11.5625 10.896C11.162 11.2965 11.0653 11.9038 11.3222 12.4074C12.4867 14.6907 14.3091 16.5132 16.5925 17.6777C17.0962 17.9345 17.7036 17.8381 18.104 17.4374L18.9897 16.5517L20.8378 18.3998L19.3417 19.8957Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1742_1809">
                  <rect width="29" height="29" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="sidebar__contents-pic">
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1742_1813)">
                <path
                  d="M13.0629 23.959H9.0981V11.1582H13.0629V23.959ZM13.4585 7.07986C13.4585 5.79814 12.4187 4.75781 11.1376 4.75781C9.85168 4.75781 8.81445 5.79814 8.81445 7.07986C8.81445 8.36201 9.85168 9.40234 11.1376 9.40234C12.4187 9.40234 13.4585 8.36201 13.4585 7.07986ZM27.9023 16.9165C27.9023 13.4802 27.1764 10.9316 23.1622 10.9316C21.2334 10.9316 19.9386 11.8963 19.41 12.8995H19.4062V11.1582H15.5547V23.959H19.4062V17.6033C19.4062 15.9388 19.8299 14.3263 21.8931 14.3263C23.9282 14.3263 23.9941 16.2298 23.9941 17.709V23.959H27.9023V16.9165ZM33 25.6016V3.39844C33 1.52443 31.4756 0 29.6016 0H7.39844C5.52443 0 4 1.52443 4 3.39844V25.6016C4 27.4756 5.52443 29 7.39844 29H29.6016C31.4756 29 33 27.4756 33 25.6016ZM29.6016 2.26562C30.2262 2.26562 30.7344 2.77384 30.7344 3.39844V25.6016C30.7344 26.2262 30.2262 26.7344 29.6016 26.7344H7.39844C6.77384 26.7344 6.26562 26.2262 6.26562 25.6016V3.39844C6.26562 2.77384 6.77384 2.26562 7.39844 2.26562H29.6016Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1742_1813"
                  x="0"
                  y="0"
                  width="37"
                  height="37"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1742_1813"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1742_1813"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="sidebar__contents-pic">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3306 6.3702C23.2866 6.3702 20.8101 3.89365 20.8101 0.849609C20.8101 0.380398 20.4297 0 19.9605 0H15.4103C14.9411 0 14.5607 0.380398 14.5607 0.849609V19.5052C14.5607 21.2947 13.1048 22.7506 11.3152 22.7506C9.52559 22.7506 8.0697 21.2947 8.0697 19.5052C8.0697 17.7155 9.52559 16.2596 11.3152 16.2596C11.7844 16.2596 12.1648 15.8792 12.1648 15.41V10.8598C12.1648 10.3906 11.7844 10.0102 11.3152 10.0102C6.07969 10.0102 1.82031 14.2696 1.82031 19.5052C1.82037 24.7406 6.07969 29 11.3152 29C16.5507 29 20.8102 24.7406 20.8102 19.5052V11.2475C22.5012 12.149 24.3827 12.6196 26.3306 12.6196C26.7999 12.6196 27.1802 12.2392 27.1802 11.77V7.21981C27.1802 6.7506 26.7998 6.3702 26.3306 6.3702ZM25.481 10.8852C23.6672 10.7344 21.9448 10.1007 20.4567 9.03016C20.1979 8.84404 19.8567 8.81838 19.573 8.96372C19.2894 9.10911 19.1109 9.40104 19.1109 9.71981V19.5052C19.1109 23.8037 15.6137 27.3008 11.3152 27.3008C7.01664 27.3008 3.51953 23.8037 3.51953 19.5052C3.51953 15.4936 6.56516 12.1801 10.4655 11.7554V14.6334C8.14231 15.0373 6.37048 17.0682 6.37048 19.5052C6.37048 22.2317 8.58864 24.4498 11.3152 24.4498C14.0417 24.4498 16.2599 22.2317 16.2599 19.5052V1.69922H19.1606C19.5496 5.0025 22.1777 7.63068 25.4809 8.01969V10.8852H25.481Z"
                fill="white"
              />
            </svg>
          </div>

          {/* <img
            width="38"
            src={telegram}
            alt="instagram"
            className="sidebar__contents-pic"
          />
          <img
            width="38"
            src={whatsapp}
            alt="instagram"
            className="sidebar__contents-pic"
          />
          <img
            width="38"
            src={linkedin}
            alt="instagram"
            className="sidebar__contents-pic"
          />
          <img
            width="38"
            src={tiktok}
            alt="instagram"
            className="sidebar__contents-pic"
          /> */}
        </div>

        <div className="sidebar__contents-line"></div>
      </div>
    </div>
  );
};

export default Sidebar;
