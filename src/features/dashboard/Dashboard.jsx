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

const UserNameWrapper = styled.div`
  @media (max-width: 769px) {
    display: none;
  }
`;

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <TopBar>
          <SearchForm onSubmit={() => {}} />
          <UserNameWrapper>
            <UserName />
          </UserNameWrapper>
        </TopBar>
        <UserOwnedArtistList itemCount={4} />
      </DashboardLayout>
    );
  }
}

export default Dashboard;
