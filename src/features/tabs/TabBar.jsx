import React from 'react';
import styled from 'styled-components';
import ToggleDisplay from 'common/components/ToggleDisplay';
import Tab from './Tab';

const TabBarWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ececec;
`;

const TabBarContent = styled.div`
  padding-left: 32px;
  display: flex;
  width: 1250px;
  margin: 0 auto;
  align-items: center;
`;

const TabPanelWrapper = styled.div`
  margin-bottom: 80px;
`;

const TabBar = props => {
  const { tabs, currentTab, onTabClick } = props;

  const tabItems = tabs.map(({ name, label }) => (
    <Tab key={name} name={name} label={label} active={currentTab === name} onClick={onTabClick} />
  ));

  const tabPanels = tabs.map(tabInfo => {
    const { name, component: TabComponent } = tabInfo;
    return (
      <ToggleDisplay show={name === currentTab} key={name}>
        <TabComponent />
      </ToggleDisplay>
    );
  });

  return (
    <div>
      <TabBarWrapper>
        <TabBarContent>{tabItems}</TabBarContent>
      </TabBarWrapper>
      <TabPanelWrapper>{tabPanels}</TabPanelWrapper>
    </div>
  );
};

export default TabBar;
