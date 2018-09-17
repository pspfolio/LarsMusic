import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import UserOwnedArtistList from 'features/artist/userOwnedArtistList/UserOwnedArtistList';
import SearchForm from 'features/search/SearchForm';

const TopBar = styled.div`
  display: flex;
  align-items: center;
`;

class Dashboard extends Component {
  render() {
    return (
      <DashboardLayout>
        <TopBar>
          <SearchForm onSubmit={() => this.props.history.push('/search')} />
        </TopBar>
        <UserOwnedArtistList itemCount={4} />
      </DashboardLayout>
    );
  }
}

export default withRouter(Dashboard);
