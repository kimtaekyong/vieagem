import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation_pc = styled.div`
  ul {
    display: flex;
    justify-content: center;
    padding: 0 0 12px 0;
    gap: 2rem;
    a {
      color: #fff;
      font-size: 16px;
      display: flex;
      height: 40px;
      align-items: center;
      letter-spacing: -0.25px;
    }
  }
`;

function Navigation() {
  return (
    <Navigation_pc>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/guide">GUIDE</Link>
        </li>
        <li className="nav-item">
          <Link to="/Gem">GEM & JEWELRY</Link>
        </li>
        <li className="nav-item">
          <Link to="/Jewelry">HIGH JEWELRY</Link>
        </li>
        <li className="nav-item">
          <Link to="/Wedding">WEDDING JEWELRY</Link>
        </li>
        <li className="nav-item">
          <Link to="/Hommage">HOMMAGE</Link>
        </li>
        <li className="nav-item">
          <Link to="/Pet">PET</Link>
        </li>
      </ul>
    </Navigation_pc>
  );
}

export default Navigation;
