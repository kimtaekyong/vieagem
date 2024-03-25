import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footerinner = styled.div`
  width: 100%;
  height: 420px;
  background-color: #1d1d1d;
  .inner {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    .copy__right {
      margin: 20px 0 0 0;
      color: #fefefe;
      font-size: 14px;
    }
  }
  .sns__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    ul {
      display: flex;
      gap: 1rem;
      li {
        button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #fff !important;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .footer__nav {
    display: flex;
    justify-content: center;
    padding: 24px 0;
    border-top: 1px solid #585858;
    border-bottom: 1px solid #585858;
    ul {
      display: flex;
      gap: 2rem;
      li {
        position: relative;
        a {
          color: #fff;
          font-weight: 300;
        }
      }
      li::after {
        position: absolute;
        width: 2px;
        height: 14px;
        top: 50%;
        transform: translateY(-50%);
        right: -16px;
        background-color: #585858;
        content: "";
      }
      li:last-child::after {
        display: none;
      }
    }
  }
  .information {
    padding: 24px 0;
    display: flex;
    justify-content: center;
    ul {
      width: 100%;
      max-width: 1200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      column-gap: 1rem;
      row-gap: 0.5rem;
      li {
        color: rgba(255, 255, 255, 0.3);
        font-weight: 300;
        font-size: 14px;
        position: relative;
      }
      li:after {
        position: absolute;
        width: 2px;
        height: 10px;
        top: 50%;
        transform: translateY(-50%);
        right: -8px;
        background-color: #585858;
        content: "";
      }
      li:last-child::after,
      li:nth-child(6)::after {
        display: none;
      }
    }
  }
`;

function Footer() {
  return (
    <Footerinner>
      <div className="inner">
        <div className="sns__icon">
          <ul>
            <li>
              <button onClick={() => window.open("https://www.instagram.com/vieagem_official/")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_381_1895)">
                    <path
                      d="M12 3C9.55575 3 9.24922 3.01037 8.2893 3.05415C7.33135 3.09785 6.67712 3.25002 6.10464 3.47246C5.51281 3.70247 5.0109 4.01022 4.51058 4.51055C4.01022 5.01088 3.70247 5.51284 3.47249 6.10467C3.24999 6.67712 3.09788 7.33135 3.05413 8.2893C3.01034 9.24922 3 9.55575 3 12C3 14.4443 3.01034 14.7508 3.05413 15.7107C3.09788 16.6687 3.24999 17.3229 3.47249 17.8953C3.70249 18.4871 4.01025 18.9891 4.51058 19.4894C5.01093 19.9897 5.51281 20.2976 6.10464 20.5276C6.67712 20.75 7.33135 20.9021 8.2893 20.9459C9.24922 20.9896 9.55575 21 12 21C14.4443 21 14.7508 20.9896 15.7107 20.9459C16.6687 20.9021 17.3229 20.75 17.8953 20.5276C18.4871 20.2976 18.9891 19.9897 19.4894 19.4894C19.9897 18.9891 20.2976 18.4871 20.5276 17.8953C20.75 17.3229 20.9021 16.6687 20.9459 15.7107C20.9896 14.7508 21 14.4443 21 12C21 9.55575 20.9896 9.24922 20.9459 8.2893C20.9021 7.33135 20.75 6.67712 20.5276 6.10467C20.2976 5.51284 19.9897 5.01088 19.4894 4.51055C18.9891 4.01022 18.4871 3.70247 17.8953 3.47246C17.3229 3.25002 16.6687 3.09785 15.7107 3.05415C14.7508 3.01037 14.4443 3 12 3ZM12 4.62161C14.4031 4.62161 14.6878 4.6308 15.6368 4.6741C16.5143 4.7141 16.9908 4.86072 17.3079 4.98397C17.7281 5.14726 18.0278 5.34227 18.3428 5.65721C18.6578 5.97215 18.8527 6.27197 19.016 6.69205C19.1392 7.00919 19.2859 7.48574 19.3259 8.36325C19.3692 9.31222 19.3784 9.59693 19.3784 12C19.3784 14.4031 19.3692 14.6878 19.3259 15.6368C19.2859 16.5143 19.1392 16.9908 19.016 17.3079C18.8527 17.7281 18.6578 18.0278 18.3428 18.3428C18.0278 18.6578 17.728 18.8527 17.308 19.016C16.9908 19.1392 16.5143 19.2859 15.6368 19.3259C14.6879 19.3692 14.4033 19.3784 12 19.3784C9.5967 19.3784 9.31215 19.3692 8.36325 19.3258C7.48572 19.2859 7.00918 19.1392 6.69208 19.016C6.27194 18.8527 5.97215 18.6578 5.65723 18.3428C5.3423 18.0278 5.14726 17.728 4.98397 17.308C4.86072 16.9908 4.71413 16.5143 4.6741 15.6368C4.6308 14.6878 4.62161 14.4031 4.62161 12C4.62161 9.59693 4.6308 9.31222 4.6741 8.36325C4.71413 7.48572 4.86072 7.00918 4.98397 6.69208C5.14726 6.27194 5.3423 5.97215 5.65721 5.65723C5.97215 5.34227 6.27197 5.14726 6.69205 4.98397C7.00919 4.86072 7.48574 4.7141 8.36325 4.6741C9.31222 4.6308 9.59693 4.62161 12 4.62161Z"
                      fill="#101010"
                    />
                    <path
                      d="M12.0005 15C10.3436 15 9.00052 13.6568 9.00052 12C9.00052 10.3431 10.3436 8.99992 12.0005 8.99992C13.6574 8.99992 15.0005 10.3431 15.0005 12C15.0005 13.6568 13.6574 15 12.0005 15ZM12.0005 7.37834C9.44804 7.37834 7.37891 9.44752 7.37891 12C7.37891 14.5524 9.44804 16.6216 12.0005 16.6216C14.553 16.6216 16.6222 14.5524 16.6222 12C16.6222 9.44752 14.553 7.37834 12.0005 7.37834ZM17.8848 7.19574C17.8848 7.7922 17.4012 8.27572 16.8047 8.27572C16.2083 8.27572 15.7247 7.7922 15.7247 7.19574C15.7247 6.59928 16.2083 6.11572 16.8047 6.11572C17.4012 6.11572 17.8848 6.59928 17.8848 7.19574Z"
                      fill="#101010"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_1895">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
            <li>
              <button onClick={() => window.open("https://www.youtube.com/c/Vieagem")}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_381_1892)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.2061 4.94803C21.1102 5.19497 21.8207 5.91992 22.0627 6.84243H22.061C22.5 8.5128 22.5 12 22.5 12C22.5 12 22.5 15.4872 22.061 17.1576C21.8189 18.0801 21.1084 18.805 20.2043 19.0519C18.5672 19.5 12 19.5 12 19.5C12 19.5 5.43274 19.5 3.79569 19.0519C2.89159 18.805 2.1811 18.0801 1.93909 17.1576C1.5 15.4872 1.5 12 1.5 12C1.5 12 1.5 8.5128 1.93909 6.84243C2.1811 5.91992 2.89159 5.19497 3.79569 4.94803C5.43274 4.5 12 4.5 12 4.5C12 4.5 18.5672 4.5 20.2061 4.94803ZM15.3571 12L9.89962 8.78625V15.2138L15.3571 12Z"
                      fill="#101010"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_1892">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__nav">
        <ul>
          <li>
            <Link to="/Company">회사소개</Link>
          </li>
          <li>
            <Link to="/Partner">제휴문의</Link>
          </li>
          <li>
            <Link to="/Terms">이용약관</Link>
          </li>
          <li>
            <Link to="/Privacy" style={{ fontWeight: "bold" }}>
              개인정보처리방침
            </Link>
          </li>
          <li>
            <Link to="/Cscenter">고객센터</Link>
          </li>
        </ul>
      </div>
      <div className="inner">
        <div className="information">
          <ul>
            <li>비아생명공학(주)</li>
            <li>대표이사 : 최필재</li>
            <li>서울특별시 중구 세종대로 73 태평로빌딩 27층</li>
            <li>사업자등록번호 : 220-88-96490</li>
            <li>통신판매신고번호 : 제 2019-서울중구-1141</li>
            <li>e-Mail : info@vieagem.com </li>
            <li>고객센터 : 02-6003-1387</li>
            <li>팩스번호 : 070-5133-7888</li>
            <li>개인정보관리책임자 : 최서연</li>
          </ul>
        </div>
        <p className="copy__right">Copyright © VIEAGEM ALL RIGHTS RESERVED.</p>
      </div>
    </Footerinner>
  );
}

export default Footer;
