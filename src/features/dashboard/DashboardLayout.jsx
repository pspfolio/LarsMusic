import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from 'features/sidebar/Sidebar';
import { devices } from 'common/utils/styledUtils';
import hamburger from 'assets/images/hamburger.svg';

const NavIcon = styled.img`
  margin-top: 16px;
  width: 25px;
  height: 25px;
  display: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${devices.md`
    display: flex;
  `};

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  display: flex;
  height: 100%;
`;

const Container = styled.main`
  padding: 0 24px;
  width: 100%;
  height: 100%;
`;

class DashboardLayout extends Component {
  state = {
    mobileNavOpen: false
  };

  onNavOpenClick = () => {
    this.setState({ mobileNavOpen: true });
  };

  onNavCloseClick = () => {
    this.setState({ mobileNavOpen: false });
  };

  render() {
    const { mobileNavOpen } = this.state;
    const { children } = this.props;
    return (
      <Content>
        <Sidebar mobileNavOpen={mobileNavOpen} onNavCloseClick={this.onNavCloseClick} />
        <Container>
          <NavIcon onClick={this.onNavOpenClick} src={hamburger} alt="play" />
          {children}
        </Container>
      </Content>
    );
  }
}

export default DashboardLayout;
