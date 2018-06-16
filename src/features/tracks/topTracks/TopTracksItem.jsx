import React from 'react';
import TopTracksControls from './TopTracksControls';
import MusicListItem from 'common/components/musicListItem/MusicListItem';

const TopTracksItem = ({ id, name, external_urls, albumName, play, images }) => {
  const thumbnail = images.find(img => img.height < 100);
  return (
    <MusicListItem key={id} name={name} secondaryName={albumName} image={thumbnail ? thumbnail.url : ''}>
      {() => <TopTracksControls play={play} trackId={id} spotifyUrl={external_urls['spotify']} />}
    </MusicListItem>
  );
};

export default TopTracksItem;
