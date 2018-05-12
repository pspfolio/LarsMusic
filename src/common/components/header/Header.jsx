import React from 'react';
import styled from 'styled-components';

const Styled = styled.h4`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  font-size: 34px;
  letter-spacing: 0.25px;
  margin-top: 32px;
`;

const Header = ({ children }) => <Styled>{children}</Styled>;

export default Header;
