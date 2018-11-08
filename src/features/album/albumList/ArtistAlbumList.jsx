import React, { Component } from 'react';
import AlbumListContainer from './AlbumListContainer';
import AlbumList from './AlbumList';

class ArtistAlbumList extends Component {
  render() {
    return (
      <AlbumListContainer>
        {({ data, actions }) => (
          <AlbumList
            albums={data.albums}
            openAlbum={data.openAlbum}
            albumTracks={data.albumTracks}
            match={data.match}
            {...actions}
          />
        )}
      </AlbumListContainer>
    );
  }
}

export default ArtistAlbumList;
