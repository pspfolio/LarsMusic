import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchArtistAlbums } from 'features/entities/albums/albumsActions';
import { toggleAlbumTrackList } from '../albumActions';
import { fetchAlbumTracks } from 'features/entities/tracks/tracksActions';
import { selectAlbumsByArtistId } from 'features/entities/albums/albumsSelectors';
import { selectTracksByAlbumId } from 'features/entities/tracks/tracksSelectors';
import { addArtist } from 'features/entities/userArtists/userArtistActions';
import ClickableMusicListItem from 'common/components/musicListItem/ClickableMusicListItem';
import AlbumListControls from './AlbumListControls';
import TracksList from 'features/tracks/tracksList/TracksList';

const List = styled.ul`
  margin-top: 32px;
  padding: 0 32px;
`;

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums } = this.props;
    fetchArtistAlbums();
  }

  onAlbumClick = id => {
    const { fetchAlbumTracks, openAlbumTrackList } = this.props;
    fetchAlbumTracks(id);
    openAlbumTrackList(id);
  };

  onAddFavoriteClick = id => {
    const { addArtistsToFavorite } = this.props;

    console.log('onfavorite', id);
    addArtistsToFavorite(id);
  };

  render() {
    const { albums, openAlbum, albumTracks, match } = this.props;
    return (
      <div>
        {albums && (
          <List>
            {albums.map(({ id, name, album_type, images }) => (
              <React.Fragment key={id}>
                <ClickableMusicListItem
                  name={name}
                  secondaryName={album_type}
                  image={images.find(img => img.height < 100).url}
                  onClick={() => {
                    this.onAlbumClick(id);
                  }}
                >
                  {() => <AlbumListControls onClick={() => this.onAddFavoriteClick(id)} />}
                </ClickableMusicListItem>
                {openAlbum === id && <TracksList tracks={albumTracks} albumId={id} artistId={match.params.id} />}
              </React.Fragment>
            ))}
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
  addArtistsToFavorite: trackId => {
    dispatch(addArtist(ownProps.match.params.id, trackId));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));
