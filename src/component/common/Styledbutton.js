import React from "react";
import styled from "styled-components";

function Styledbutton({ onClick, children, className, color, afterColor, padding, size }) {
  return (
    <Button onClick={onClick} className={className} color={color} afterColor={afterColor} padding={padding} size={size}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  position: relative;
  background: none;
  border: none;
  color: ${(props) => props.color || "#fff"};
  padding: ${(props) => props.padding || "12px"};
  font-size: ${(props) => props.size || "16px"};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.afterColor || "#fff"};
  }
`;

export default Styledbutton;
