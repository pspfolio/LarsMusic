import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import UserName from 'features/user/UserName';
import Sidebar from 'features/sidebar/Sidebar';

const Content = styled.div`
  display: flex;
  height: 100%;
`;

const Container = styled.main`
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
