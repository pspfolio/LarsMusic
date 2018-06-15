import React from 'react';
import TopTracksControls from './TopTracksControls';
import MusicListItem from 'common/components/musicListItem/MusicListItem';

const TopTracksItem = ({ id, name, external_urls, album, play }) => {
  console.log(name);
  return (
    <MusicListItem
      key={id}
      name={name}
      secondaryName={album.name}
      image={album.images.find(img => img.height < 100).url}
    >
      {() => <TopTracksControls play={play} trackId={id} spotifyUrl={external_urls['spotify']} />}
    </MusicListItem>
  );
};

export default TopTracksItem;
