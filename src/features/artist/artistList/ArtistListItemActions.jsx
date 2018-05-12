import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const ArtistListItemActions = ({ externalUrl }) => (
  <CardActions>
    <CardActionLinkSpotify href={externalUrl} target="_blank">
      Spotify
    </CardActionLinkSpotify>
    <CardActionLinkOpen to="/">Open</CardActionLinkOpen>
  </CardActions>
);

export default ArtistListItemActions;
