import React from 'react';
import styled from 'styled-components';

const TopBar = styled.nav`
  width: 100%;
  background-color: #5e24d4;
  background-image: linear-gradient(to right, #5e24d4, #9c69dc);
  height: 80px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TopBarContainer = styled.div`
  width: 1170px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Container = styled.main`
  width: 1170px;
  margin: 0 auto;
`;

const TopBarHeader = styled.h1`
  color: #fff;
  font-weight: 300;
`;

const DashboardLayout = ({ children }) => (
  <div>
    <TopBar>
      <TopBarContainer>
        <TopBarHeader>LarsMusic</TopBarHeader>
      </TopBarContainer>
    </TopBar>
    <Container>{children}</Container>
  </div>
);

export default DashboardLayout;
