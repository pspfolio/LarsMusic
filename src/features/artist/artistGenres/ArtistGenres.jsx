import React from 'react';
import styled from 'styled-components';
import lens from 'assets/images/round-lens-24px.svg';

const CardGenreList = styled.div`
  display: flex;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  margin-top: 8px;
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

const ArtistListItemGenres = ({ genres }) => (
  <CardGenreList>
    {genres.map((genre, index) => (
      <CardGenreListItem key={genre}>
        {genre} {genres.length !== index + 1 && <CardGenreListDivider src={lens} alt="genre divider" />}
      </CardGenreListItem>
    ))}
  </CardGenreList>
);

export default ArtistListItemGenres;
