import React, { Component } from 'react';
import DashboardLayout from './DashboardLayout';
import ArtistList from 'features/artist/artistList/ArtistList';

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
