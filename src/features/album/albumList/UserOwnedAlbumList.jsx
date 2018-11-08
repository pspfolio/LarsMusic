import React, { Component } from 'react';
import AlbumListContainer from './AlbumListContainer';
import AlbumList from './AlbumList';

class UserOwnedAlbumList extends Component {
  render() {
    return (
      <AlbumListContainer>
        {({ data, actions }) => (
          <AlbumList
            albums={data.ownedAlbums}
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

export default UserOwnedAlbumList;
