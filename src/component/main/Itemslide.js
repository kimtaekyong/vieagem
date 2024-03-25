import React from "react";
import styled from "styled-components";
import Centerslide from "./Centerslide";
import Pagetitle from "../common/Pagetitle";

const ItemsslideWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 140px auto 180px;
  text-align: center;
`;

function Itemslide() {
  return (
    <ItemsslideWrap>
      <Pagetitle
        text="BEST"
        desc={
          <>
            <p>
              생명의 시작과 끝을 함께하는 새로운 패러다임의 보석 비아젬의
              <br />
              인기 모델과 함께 하세요.
            </p>
          </>
        }
      />
      <Centerslide />
    </ItemsslideWrap>
  );
}

export default Itemslide;
