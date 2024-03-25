import React from "react";
import styled from "styled-components";

function Pagetitle({ text, desc }) {
  return (
    <TitleContainer>
      <h3 className="title">{text}</h3>
      <span className="page__desc">{desc}</span>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  text-align: center;

  h3 {
    font-size: 34px;
    margin-bottom: 18px;
  }
  p {
    font-size: 16px;
    margin-bottom: 70px;
    line-height: 1.4rem;
  }
`;

export default Pagetitle;
