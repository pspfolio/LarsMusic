import React, { Component } from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fetchArtists from '../artistActions';
import { selectArtists } from '../artistSelectors';
import Header from 'common/components/header/Header';
import ArtistListItem from './ArtistListItem';

const ArtistContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;

const MoreArtistLinkContainer = styled.div`
  text-align: right;
`;

const MoreArtistLink = styled(Link)`
  color: #9012fe;
  text-decoration: none;
  font-weight: 500;
`;

class ArtistList extends Component {
  componentDidMount() {
    const { getArtists } = this.props;
    getArtists();
  }
  render() {
    const { artists } = this.props;
    const artistList = values(artists);

    return (
      <div>
        <Header>Your collection of Artists</Header>
        <ArtistContainer>{artistList.map(artist => <ArtistListItem key={artist.id} {...artist} />)}</ArtistContainer>
        <MoreArtistLinkContainer>
          <MoreArtistLink to="/">More...</MoreArtistLink>
        </MoreArtistLinkContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  artists: selectArtists(state)
});

const mapDispatchToProps = dispatch => ({
  getArtists: () => dispatch(fetchArtists())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);
