import React from 'react';
import TracksControls from '../tracksControls/TracksControls';
import MusicListItem from 'common/components/musicListItem/MusicListItem';

const TopTracksItem = ({ id, name, albumName, images, artistId, albumId, preview_url }) => {
  const thumbnail = images.find(img => img.height < 100);
  return (
    <MusicListItem key={id} name={name} secondaryName={albumName} image={thumbnail ? thumbnail.url : ''}>
      {() => <TracksControls trackId={id} artistId={artistId} albumId={albumId} showPlayButton={!!preview_url} />}
    </MusicListItem>
  );
};

export default TopTracksItem;
