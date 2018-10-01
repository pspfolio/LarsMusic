import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h4`
  font-weight: 500;
  color: #3d3333;
  font-size: 28px;
  letter-spacing: 0.25px;
  margin-top: 32px;
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

export default Header;
