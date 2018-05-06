import React from 'react';
import styled from 'styled-components';

const Styled = styled.h2`
  font-weight: 700;
  color: #5a5a5a;
  letter-spacing: 1.2px;
  margin-top: 32px;
`;

const Header = ({ children }) => <Styled>{children}</Styled>;

export default Header;
