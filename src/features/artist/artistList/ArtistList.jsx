import React, { Component } from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import fetchArtists from '../artistActions';
import { selectArtists } from '../artistSelectors';
import Header from 'common/components/header/Header';

const ArtistContainer = styled.article`
  display: flex;
  justify-content: space-between;
`;

const ArtistCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 248px;
  height: 235px;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 24px;
`;

const CardArtistImage = styled.div`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background-image: url(${props => props.url});
  background-size: cover;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.24);
`;

const CardArtistTitle = styled.h3`
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 0.75px;
  color: #6a6a6a;
  margin: 16px 0 0 0;
`;

const CardGenreList = styled.div`
  color: #a8a8a8;
  font-size: 0.9rem;
`;

const CardActions = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  align-items: flex-end;
  justify-content: space-evenly;
`;

const CardActionLinkOpen = styled(Link)`
  color: #a8a8a8;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #9012fe;
  }
`;

const CardActionLinkPlay = styled.a`
  color: #a8a8a8;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #1db954;
  }
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
    console.log(artistList);
    return (
      <div>
        <Header>Your collection of Artists</Header>
        <ArtistContainer>
          {artistList.map(artist => (
            <ArtistCard key={artist.id}>
              <CardArtistImage url={artist.images[2].url} />
              <CardArtistTitle>{artist.name}</CardArtistTitle>
              <CardGenreList>
                {artist.genres.slice(0, 2).map(genre => <span key={genre}> {genre} </span>)}
              </CardGenreList>
              <CardActions>
                <CardActionLinkPlay href={artist.external_urls['spotify']} target="_blank">
                  Spotify
                </CardActionLinkPlay>
                <CardActionLinkOpen to="/">Open</CardActionLinkOpen>
              </CardActions>
            </ArtistCard>
          ))}
        </ArtistContainer>
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
