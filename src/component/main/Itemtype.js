import React from "react";
import Styledbutton from "../common/Styledbutton";
import styled from "styled-components";
import Context from "../common/Context";

const Itemtypeinner = styled.div`
  width: 100%;
  margin-bottom: 230px;
  .left_img_rt_text {
    display: flex;
    margin: -3px;
    div {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .type__text_Box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
  .right_img_lt_text {
    display: flex;
    div {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .type__text_Box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }
  }
`;

function Itemtype() {
  return (
    <Itemtypeinner>
      <div className="left_img_rt_text">
        <div className="type__img_Box">
          <img
            src="images/itemtype_01.png"
            alt="종류별 아이템 이미지 목걸이
          "
          ></img>
        </div>
        <div className="type__text_Box">
          <Context
            text="EVER BLOSSOM PENDANT"
            desc={
              <p>
                핸드 폴리싱된 싱글 다이아몬드가 스털링 실버 소재의 우아한 펜던트의 중앙에서 반짝입니다.
                <br /> 피부에 내려앉은 한 줄기 빛처럼 걸쳐지는 이 디자인을 다양한 길이, 메탈의 네크리스와 함께
                <br />
                레이어링하여 개성 넘치는 룩을 연출해보세요.
              </p>
            }
          ></Context>
          <Styledbutton color="#1d1d1d" afterColor="#1d1d1d" padding="12px 0" size="14px">
            더 알아보기
          </Styledbutton>
        </div>
      </div>
      <div className="right_img_lt_text">
        <div className="type__text_Box">
          <Context
            text="ONE LINE SMALL EARRINGS"
            desc={
              <p>
                한 줄의 라운드 브릴리언트 다이아몬드가 귀에 매달려 있으며,
                <br />
                악보의 음표처럼 4개의 더 큰 프롱 세팅 다이아몬드가 강조되어 있습니다. <br />
                다이아몬드의 총 무게는 약 1.30캐럿이며, <br />
                머리를 돌릴 때마다 빛을 받습니다.
              </p>
            }
          ></Context>
          <Styledbutton color="#1d1d1d" afterColor="#1d1d1d" padding="12px 0" size="14px">
            더 알아보기
          </Styledbutton>
        </div>
        <div className="type__img_Box">
          <img
            src="images/itemtype_02.png"
            alt="종류별 아이템 이미지 귀걸이
          "
          ></img>
        </div>
      </div>
    </Itemtypeinner>
  );
}

export default Itemtype;
