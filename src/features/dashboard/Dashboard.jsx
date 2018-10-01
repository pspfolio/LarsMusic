import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import UserOwnedArtistList from 'features/artist/userOwnedArtist/UserOwnedArtistList';
import SearchForm from 'features/search/SearchForm';

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

const Dashboard = ({ history }) => (
  <DashboardLayout>
    <TopBar>
      <SearchForm onSubmit={() => history.push('/search')} />
    </TopBar>
    <UserOwnedArtistList itemCount={4} />
  </DashboardLayout>
);

export default withRouter(Dashboard);
