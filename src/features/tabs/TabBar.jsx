import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const TabBarWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
  position: absolute;
  left: 0;
  right: 0;
`;

const TabBarContent = styled.div`
  padding-left: 32px;
  display: flex;
  width: 1250px;
  margin: 0 auto;
  align-items: center;
`;

const TabBar = props => {
  const { tabs, currentTab, onTabClick } = props;

  const tabItems = tabs.map(tabInfo => {
    const { name, label } = tabInfo;
    return <Tab key={name} name={name} label={label} active={currentTab === name} onClick={onTabClick} />;
  });

  return (
    <TabBarWrapper>
      <TabBarContent>{tabItems}</TabBarContent>
    </TabBarWrapper>
  );
};

export default TabBar;
