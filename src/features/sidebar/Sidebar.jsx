import React, { Component } from 'react';
import styled from 'styled-components';

const Aside = styled.aside`
  width: 300px;
  color: #353d33;
  height: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  padding-top: 50px;
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
`;

class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <nav>
          <Title>LarsMusic</Title>
        </nav>
      </Aside>
    );
  }
}

export default Sidebar;
