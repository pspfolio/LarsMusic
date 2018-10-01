import React from 'react';
import styled from 'styled-components';
import Sidebar from 'features/sidebar/Sidebar';

const Content = styled.div`
  display: flex;
  height: 100%;
`;

const Container = styled.main`
  padding: 0 24px;
  width: 100%;
  height: 100%;
`;

const DashboardLayout = ({ children }) => (
  <Content>
    <Sidebar />
    <Container>{children}</Container>
  </Content>
);

export default DashboardLayout;
