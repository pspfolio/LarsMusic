import React, { Component } from 'react';
import styled from 'styled-components';
import DashboardLayout from './DashboardLayout';
import UserOwnedArtistList from 'features/artist/userOwnedArtistList/UserOwnedArtistList';
import SearchForm from 'features/search/SearchForm';
import UserName from 'features/user/UserName';

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <TopBar>
          <SearchForm onSubmit={() => {}} />
          <UserName />
        </TopBar>
        <UserOwnedArtistList itemCount={4} />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
