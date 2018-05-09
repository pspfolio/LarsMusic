import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const ArtistListItem = ({ images, name, genres, external_urls }) => {
  return (
    <ArtistCard>
      <CardArtistImage url={images.url} />
      <CardArtistTitle>{name}</CardArtistTitle>
      <CardGenreList>{genres.slice(0, 2).map(genre => <span key={genre}> {genre} </span>)}</CardGenreList>
      <CardActions>
        <CardActionLinkPlay href={external_urls} target="_blank">
          Spotify
        </CardActionLinkPlay>
        <CardActionLinkOpen to="/">Open</CardActionLinkOpen>
      </CardActions>
    </ArtistCard>
  );
};

export default ArtistListItem;
