import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import no_image from 'assets/images/no_image.jpg';

// Delete
import ArtistListItemActions from './ArtistListItemActions';
import ArtistGenres from '../artistGenres/ArtistGenres';

const ArtistCard = styled.section`
  width: 296px;
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  margin-bottom: 32px;
  margin-right: 32px;
`;

const CardArtistImage = styled.div`
  width: 100%;
  height: 194px;
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const CardArtistTitle = styled.h5`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0px;
  margin-top: 16px;
  color: rgba(0, 0, 0, 0.87);
  margin: 16px 0 0 0;
  color: #3d3333;
`;

const CardLink = styled(Link)`
  text-decoration: none;
`;

const ArtistListItem = ({ images, name, genres, external_urls, id }) => {
  const image = images[0];
  const imageUrl = image ? image.url : no_image;
  return (
    <ArtistCard>
      <CardLink to={`/artist/${id}`}>
        <CardArtistImage url={imageUrl} />
        <CardArtistTitle>{name}</CardArtistTitle>
      </CardLink>
    </ArtistCard>
  );
};

export default ArtistListItem;
