import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchArtistAlbums } from 'features/entities/albums/albumsActions';
import { toggleAlbumTrackList } from '../albumActions';
import { fetchAlbumTracks } from 'features/entities/tracks/tracksActions';
import { selectAlbumsByArtistId } from 'features/entities/albums/albumsSelectors';
import { selectTracksByAlbumId } from 'features/entities/tracks/tracksSelectors';
import { fetchUserOwnedAlbumsByArtistId, toggleLikedAlbum } from 'features/entities/userAlbums/userAlbumsActions';
import ClickableMusicListItem from 'common/components/musicListItem/ClickableMusicListItem';
import AlbumListControls from './AlbumListControls';
import no_image from 'assets/images/no_image.jpg';
import TracksList from 'features/tracks/tracksList/TracksList';

const List = styled.ul`
  margin-top: 32px;
  padding-left: 0;
`;

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums, fetchUserOwnedAlbumsByArtistId } = this.props;
    fetchArtistAlbums();
    fetchUserOwnedAlbumsByArtistId();
  }

  onAlbumClick = id => {
    const { fetchAlbumTracks, openAlbumTrackList } = this.props;
    fetchAlbumTracks(id);
    openAlbumTrackList(id);
  };

  onAddFavoriteClick = id => {
    const { toggleLikedAlbum } = this.props;
    toggleLikedAlbum(id);
  };

  render() {
    const { albums, openAlbum, albumTracks, match } = this.props;
    return (
      <div>
        {albums && (
          <List>
            {albums.map(({ id, name, album_type, images, owned }) => {
              console.log(images);
              return (
                <React.Fragment key={id}>
                  <ClickableMusicListItem
                    name={name}
                    secondaryName={album_type}
                    image={images.length > 0 ? images.find(img => img.height < 100).url : no_image}
                    onClick={() => {
                      this.onAlbumClick(id);
                    }}
                  >
                    {() => <AlbumListControls onClick={() => this.onAddFavoriteClick(id)} owned={owned} />}
                  </ClickableMusicListItem>
                  {openAlbum === id && <TracksList tracks={albumTracks} albumId={id} artistId={match.params.id} />}
                </React.Fragment>
              );
            })}
          </List>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    albums: selectAlbumsByArtistId(state, ownProps.match.params.id),
    albumTracks: selectTracksByAlbumId(state),
    openAlbum: state.albums.openAlbum
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: () => {
    dispatch(fetchArtistAlbums(ownProps.match.params.id));
  },
  fetchAlbumTracks: albumId => {
    dispatch(fetchAlbumTracks(albumId));
  },
  openAlbumTrackList: albumId => {
    dispatch(toggleAlbumTrackList(albumId));
  },
  toggleLikedAlbum: trackId => {
    dispatch(toggleLikedAlbum(ownProps.match.params.id, trackId));
  },
  fetchUserOwnedAlbumsByArtistId: () => {
    dispatch(fetchUserOwnedAlbumsByArtistId(ownProps.match.params.id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));
