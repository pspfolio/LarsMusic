import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopBar = styled.nav`
  width: 100%;
  background-color: #424242;
  height: 72px;
  display: flex;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const TopBarContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 24px;
`;

const Container = styled.main`
  max-width: 1250px;
  margin: 0 auto;
`;

const TopBarHeader = styled(Link)`
  color: #fff;
  font-weight: 300;
  font-size: 1.5em;
  text-decoration: none;
`;

const DashboardLayout = ({ children }) => (
  <div>
    <TopBar>
      <TopBarContainer>
        <TopBarHeader to="/">LarsMusic</TopBarHeader>
      </TopBarContainer>
    </TopBar>
    <Container>{children}</Container>
  </div>
);

export default DashboardLayout;
