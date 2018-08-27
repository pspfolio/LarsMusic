import React, { Component } from 'react';
import DashboardLayout from './DashboardLayout';
import UserOwnedArtistList from 'features/artist/userOwnedArtistList/UserOwnedArtistList';
import SearchForm from 'features/search/SearchForm';

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <SearchForm onSubmit={() => {}} />
        <UserOwnedArtistList itemCount={4} />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
