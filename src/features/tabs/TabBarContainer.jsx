import React, { Component } from 'react';
import TabBar from './TabBar';

class TabBarContainer extends Component {
  constructor(props) {
    super(props);

    const { tabs = [{ name: null }] } = props;

    const firstTab = tabs[0];

    this.state = {
      currentTab: firstTab.name
    };
  }

  onTabClick = name => {
    this.setState({ currentTab: name });
  };

  render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;

    return <TabBar currentTab={currentTab} tabs={tabs} onTabClick={this.onTabClick} />;
  }
}

export default TabBarContainer;
