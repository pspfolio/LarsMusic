import React from 'react';
import styled from 'styled-components';
import TopTracksName from './TopTracksName';
import TopTracksControls from './TopTracksControls';

const TrackListRow = styled.li`
  margin: 24px 0;
  display: flex;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const TrackListImage = styled.img`
  height: 64px;
`;

const TopTracksItem = ({ id, name, external_urls, album, play }) => (
  <TrackListRow key={id}>
    <TrackListImage src={album.images.find(img => img.height < 100).url} alt={`${name} album art`} />
    <TopTracksName trackName={name} albumName={album.name} />
    <TopTracksControls play={play} trackId={id} spotifyUrl={external_urls['spotify']} />
  </TrackListRow>
);

export default TopTracksItem;
