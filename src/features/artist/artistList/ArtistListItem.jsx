import React from 'react';
import styled from 'styled-components';
import ArtistListItemActions from './ArtistListItemActions';
import ArtistListItemGenres from './ArtistListItemGenres';

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

const ArtistListItem = ({ images, name, genres, external_urls, id }) => {
  const image = images.find(image => image.width > 199 && image.width < 350);
  return (
    <ArtistCard>
      <CardArtistImage url={image.url} />
      <CardArtistContent>
        <CardArtistTitle>{name}</CardArtistTitle>
        <ArtistListItemGenres genres={genres.slice(0, 3)} />
        <ArtistListItemActions externalUrl={external_urls} artistId={id} />
      </CardArtistContent>
    </ArtistCard>
  );
};

export default ArtistListItem;
