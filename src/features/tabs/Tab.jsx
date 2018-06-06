import React from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div`
  margin-right: 72px;
  font-size: ${props => (props.active ? '30px' : '20px')};
  color: ${props => (props.active ? '#76ACFC' : '#cfcfcf')};
  font-weight: ${props => (props.active ? 500 : 400)};
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease-out;

  &:hover {
    color: #76acfc;
  }

  &::after {
    content: '';
    display: ${props => (props.active ? 'flex' : 'none')};
    margin: 0 auto;
    height: 3px;
    width: 72px;
    background-color: #76acfc;
  }
`;

const Tab = ({ name, label, active, onClick }) => (
  <TabWrapper active={active}>
    <p onClick={() => onClick(name)}>{label}</p>
  </TabWrapper>
);

export default Tab;
