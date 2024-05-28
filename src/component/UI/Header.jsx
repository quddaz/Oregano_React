import React from "react";
import styled from "styled-components";
const StyleHeader = styled.h2`
  text-align: left;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Header = ({ title }) => {
  return (
    <StyleHeader>
      {title}
    </StyleHeader>
  );
};

export default Header;