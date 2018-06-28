import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fetchArtists } from '../artistActions';
import { selectArtistByLimit } from '../artistSelectors';
import Header from 'common/components/header/Header';
import ArtistList from '../artistList/ArtistList';
import { albumsRef } from 'firebase.js';

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
    const { getArtists } = this.props;
    getArtists();
    albumsRef.on('value', snapshot => {
      console.log('DATAAA', snapshot.val());
    });
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
  artists: selectArtistByLimit(state, ownProps.itemCount)
});

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardArtistList);