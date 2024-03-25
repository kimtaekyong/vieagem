import React from "react";
import Styledbutton from "../common/Styledbutton";
import styled from "styled-components";
import Context from "../common/Context";

const WeddingBg = styled.div`
  background-image: url("images/wedding_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 600px;
  margin: 180px auto 130px;
  .wedding__inner {
    position: relative;
    max-width: 1400px;
    height: 600px;
    margin: 0 auto;
    padding: 0 40px;
    .wedding__contant_text {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
    }
  }
`;
function Wedding() {
  const handleClick = () => {
    console.log("A");
  };
  return (
    <WeddingBg>
      <div className="wedding__inner">
        <div className="wedding__contant_text">
          <Context
            text="사랑하는 사람과의 새로운 여정"
            desc={
              <p>
                평생 소중한 순간을 함께 나눌 동반자의 생체 원소와 사랑의 맹세를
                <br /> 비아젬에 담아 변치 않는 사랑을 간직하세요.
              </p>
            }
          ></Context>
          <Styledbutton onClick={handleClick} color="#1d1d1d" afterColor="#1d1d1d" padding="12px 0" size="14px">
            더 알아보기
          </Styledbutton>
        </div>
      </div>
    </WeddingBg>
  );
}

export default Wedding;
