import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import lens from 'assets/images/round-lens-24px.svg';

const ArtistCard = styled.section`
  width: 296px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1);
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 24px;
`;

const CardArtistImage = styled.div`
  width: 100%;
  height: 194px;
  background-image: url(${props => props.url});
  background-size: cover;
`;

const CardArtistContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 16px;
`;

const CardArtistTitle = styled.h5`
  font-weight: 400;
  font-size: 24px;
  letter-spacing: 0px;
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.87);
  margin: 16px 0 0 0;
`;

const CardGenreList = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-top: 24px;
  letter-spacing: 0.25px;
`;

const CardGenreListItem = styled.span`
  display: flex;
  align-items: center;
`;

const CardGenreListDivider = styled.img`
  height: 5px;
  margin: 0 4px;
`;

const CardActions = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  margin-top: 24px;
  width: 100%;
`;

const CardActionLinkOpen = styled(Link)`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  font-size: 14px;
  letter-spacing: 1.25px;
  margin-left: 24px;
  text-transform: uppercase;
  font-weight: 500;
  &:hover {
    color: #9012fe;
  }
`;

const CardActionLinkSpotify = styled.a`
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  font-weight: 500;
  &:hover {
    color: #1ed760;
  }
`;

const ArtistListItem = ({ images, name, genres, external_urls }) => {
  return (
    <ArtistCard>
      <CardArtistImage url={images.url} />
      <CardArtistContent>
        <CardArtistTitle>{name}</CardArtistTitle>
        <CardGenreList>
          {genres.slice(0, 3).map((genre, index) => (
            <CardGenreListItem key={genre}>
              {genre} {index !== 2 && <CardGenreListDivider src={lens} alt="genre divider" />}
            </CardGenreListItem>
          ))}
        </CardGenreList>
        <CardActions>
          <CardActionLinkSpotify href={external_urls} target="_blank">
            Spotify
          </CardActionLinkSpotify>
          <CardActionLinkOpen to="/">Open</CardActionLinkOpen>
        </CardActions>
      </CardArtistContent>
    </ArtistCard>
  );
};

export default ArtistListItem;
