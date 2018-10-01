import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import SiteTitle from 'common/components/SiteTitle';

const Aside = styled.aside`
  width: 300px;
  color: #353d33;
  min-height: 100vh;
  background: #fff;

  @media (max-width: 769px) {
    display: none;
  }
`;

const NavigationList = styled.ul`
  margin-top: 48px;
  padding-left: 0;
`;

const NavigationListItem = styled.li`
  margin-left: 20%;
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
    background-color: ${props => props.theme.primaryColor};
    transition: all 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

const Sidebar = () => (
  <Aside>
    <nav>
      <SiteTitle />
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

export default Sidebar;
