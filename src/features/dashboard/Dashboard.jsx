import React, { Component } from 'react';
import DashboardLayout from './DashboardLayout';
import UserOwnedArtistList from 'features/artist/userOwnedArtistList/UserOwnedArtistList';

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <UserOwnedArtistList itemCount={4} />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
