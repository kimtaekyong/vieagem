import React from "react";
import styled from "styled-components";
import Styledbutton from "../common/Styledbutton";

function Visual() {
  const handleClick = () => {
    alert("메인 페이지에서 다른 링크로 연결 될 버튼입니다.");
  };

  return (
    <Visualwrap>
      <div className="visual__wrap">
        <img src="images/main_bg.png" className="img-fluid rounded-top" alt="메인 비주얼" />
        <div className="visual__text_box">
          <h3>비아젬 시그니처</h3>
          <p>
            순수함과 영원함의 상징인 연꽃의 아름다움에서 영감을 받은 비아젬 연꽃컬렉션은
            <br /> 4개의 18K 화이트 골드 마이크로파베 다이아몬드 꽃잎이 라운드 브릴리언트 다이아몬드를 감싸며
            <br /> 눈길을 사로잡는 매력을 선사합니다.
          </p>
          <Styledbutton onClick={handleClick} className="custom-button">
            더 알아보기
          </Styledbutton>
        </div>
      </div>
    </Visualwrap>
  );
}

const Visualwrap = styled.div`
  .visual__wrap {
    position: relative;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: 100vh;
  }
  .visual__text_box {
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
  }
  h3 {
    color: #fff;
    font-size: 34px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    word-break: keep-all;
    color: #fff;
    font-weight: 100;
    padding: 24px 0;
    margin: 0 auto;
    max-width: 1280px;
    line-height: 24px;
  }
`;

export default Visual;
