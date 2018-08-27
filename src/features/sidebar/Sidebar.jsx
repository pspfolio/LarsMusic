import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Aside = styled.aside`
  width: 300px;
  color: #353d33;
  height: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  padding-top: 50px;
  font-size: 1.5em;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1.5px;
  color: #7977fb;
`;

const NavigationList = styled.ul`
  margin-top: 48px;
  padding-left: 0;
`;

const NavigationListItem = styled.li`
  margin-left: 60px;
  margin-bottom: 32px;
  list-style-type: none;
`;

const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 700;
  color: #3d3333;
  letter-spacing: 1px;

  &::after {
    position: absolute;
    content: '';
    height: 2px;
    bottom: -8px;
    left: 0;
    width: 0;
    background-color: #7977fb;
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

class Sidebar extends Component {
  render() {
    return (
      <Aside>
        <nav>
          <Title>LarsMusic</Title>

          <NavigationList>
            <NavigationListItem>
              <Link to="/own" activeClassName="selected">
                Oma musiikki
              </Link>
            </NavigationListItem>
            <NavigationListItem>
              <Link to="/search" activeClassName="selected">
                Etsi
              </Link>
            </NavigationListItem>
          </NavigationList>
        </nav>
      </Aside>
    );
  }
}

export default Sidebar;