import React from "react";
import styled from "styled-components";

function Context({ text, desc }) {
  return (
    <Contextinner>
      <h3 className="title">{text}</h3>
      <span className="context__desc">{desc}</span>
    </Contextinner>
  );
}
const Contextinner = styled.div`
  .title {
    font-size: 34px;
    margin-bottom: 24px;
  }
  .context__desc {
    font-size: 16px;
    margin-bottom: 18px;
    line-height: 1.5rem;
  }
`;

export default Context;
