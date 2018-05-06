import React, { Component } from 'react';
import DashboardLayout from './DashboardLayout';
import ArtistList from 'features/artistList/ArtistList';

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <ArtistList />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
