import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtistAlbums } from '../albumActions';
import { selectAlbumsByArtistId } from '../albumSelectors';
import MusicListItem from 'common/components/musicListItem/MusicListItem';
import AlbumListControls from './AlbumListControls';

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums } = this.props;
    fetchArtistAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <div>
        {albums && (
          <ul>
            {albums.map(({ id, name, album_type, images }) => (
              <MusicListItem
                key={id}
                name={name}
                secondaryName={album_type}
                image={images.find(img => img.height < 100).url}
              >
                {() => <AlbumListControls />}
              </MusicListItem>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    albums: selectAlbumsByArtistId(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: () => {
    dispatch(fetchArtistAlbums(ownProps.match.params.id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));
