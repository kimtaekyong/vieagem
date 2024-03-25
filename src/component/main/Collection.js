import React from "react";
import Pagetitle from "../common/Pagetitle";
import styled from "styled-components";
import Styledbutton from "../common/Styledbutton";

const Collection_wrap = styled.div`
  position: relative;
  padding-right: 260px;
  width: 100%;
  .Collection__inner {
    max-width: 1400px;
  }
  .left__bg {
    width: 100%;
    overflow: hidden;
    img {
    }
  }
  .right__contant {
    position: absolute;
    right: 260px;
    top: 80px;
    .collection__item_text {
      padding: 60px 0 0 300px;
      h4 {
        font-size: 22px;
      }
      p {
        margin: 8px 0 14px 0;
        font-size: 16px;
      }
    }
  }
`;
const handleClick = () => {
  console.log("클릭");
};

function Collection() {
  return (
    <>
      <Pagetitle
        text="비아젬의 새로운 컬렉션"
        desc={
          <>
            <p>
              탄생과 삶의 소중한 기억, 메모리얼을 상징하는 비아젬 메모리얼락 컬렉션과 함께
              <br />
              소중한 순간을 영원토록 기억하세요.
            </p>
          </>
        }
      />
      <Collection_wrap>
        <div className="Collection__inner">
          <div className="left__bg">
            <img src="images/collection__bg.png" alt="비아젬 컬렉션 배경 이미지"></img>
          </div>
          <div className="right__contant">
            <div className="collection__item_img">
              <img src="images/collection__item.png"></img>
            </div>
            <div className="collection__item_text">
              <h4>MEMORIAL LOCK Collection</h4>
              <p>오픈하트 시크릿 스톤과 추억의 메시지</p>
              <Styledbutton onClick={handleClick} color="#1d1d1d" afterColor="#1d1d1d" padding="12px 0" size="14px">
                더 알아보기
              </Styledbutton>
            </div>
          </div>
        </div>
      </Collection_wrap>
    </>
  );
}

export default Collection;
