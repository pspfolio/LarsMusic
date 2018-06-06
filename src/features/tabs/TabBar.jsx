import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabBarWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid grey;
`;

const TabBar = props => {
  const { tabs, currentTab, onTabClick } = props;

  const tabItems = tabs.map(tabInfo => {
    const { name, label } = tabInfo;
    return <Tab key={name} name={name} label={label} active={currentTab === name} onClick={onTabClick} />;
  });

  return <TabBarWrapper>{tabItems}</TabBarWrapper>;
};

export default TabBar;
