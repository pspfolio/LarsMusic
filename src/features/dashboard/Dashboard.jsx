import React, { Component } from 'react';
import DashboardLayout from './DashboardLayout';
import ArtistListLimitContainer from 'features/artist/artistListLimitContainer/ArtistListLimitContainer';

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <ArtistListLimitContainer itemCount={4} />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
