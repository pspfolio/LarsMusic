import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchArtistAlbums, openAlbumTrackList } from '../albumActions';
import { fetchAlbumTracks } from 'features/tracks/tracksActions';
import { selectAlbumsByArtistId } from '../albumSelectors';
import { selectTracksByAlbumId } from 'features/tracks/tracksSelectors';
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
    this.props.fetchAlbumTracks(id);
    this.props.openAlbumTrackList(id);
  };

  render() {
    const { albums, openAlbum, albumTracks } = this.props;
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
                  {() => <AlbumListControls />}
                </ClickableMusicListItem>
                {openAlbum === id && <TracksList tracks={albumTracks} />}
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
    openAlbum: state.album.openAlbum
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
    dispatch(openAlbumTrackList(albumId));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));
