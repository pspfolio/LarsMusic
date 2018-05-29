import React from 'react';
import styled from 'styled-components';

const TrackListNameWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TrackListName = styled.span`
  font-size: 16px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.86);
`;

const TrackListAlbumName = styled.span`
  display: block;
  font-size: 14px;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;

const TopTracksName = ({ trackName, albumName }) => (
  <TrackListNameWrapper>
    <TrackListName>{trackName}</TrackListName>
    <TrackListAlbumName>{albumName}</TrackListAlbumName>
  </TrackListNameWrapper>
);

export default TopTracksName;
