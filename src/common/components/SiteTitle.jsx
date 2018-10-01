import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled(Link)`
  margin-top: 0;
  padding-top: 50px;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1.5px;
  color: ${props => props.theme.primaryColor};
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

const SiteTitle = () => <Title to="/">LarsMusic</Title>;

export default SiteTitle;
