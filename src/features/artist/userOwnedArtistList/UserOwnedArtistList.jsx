import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchUserArtists } from 'features/entities/userArtists/userArtistActions';
import { selectUserArtists } from 'features/entities/userArtists/userArtistSelectors';
import Header from 'common/components/header/Header';
import ArtistList from '../artistList/ArtistList';

const MoreArtistLinkContainer = styled.div`
  text-align: right;
`;

const MoreArtistLink = styled(Link)`
  color: #9012fe;
  text-decoration: none;
  font-weight: 500;
`;

class DashboardArtistList extends Component {
  componentDidMount() {
    const { getUserArtists } = this.props;
    getUserArtists();
  }
  render() {
    const { artists } = this.props;

    return (
      <div>
        <Header>Your collection of Artists</Header>
        <ArtistList artists={artists} />
        <MoreArtistLinkContainer>
          <MoreArtistLink to="/">More...</MoreArtistLink>
        </MoreArtistLinkContainer>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  artists: selectUserArtists(state, ownProps.itemCount)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getUserArtists: () => dispatch(fetchUserArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardArtistList);
