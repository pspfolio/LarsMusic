import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArtistAlbums } from '../albumActions';
import { selectTopTracksByArtistId } from '../albumSelectors';
import MusicListItem from 'common/components/musicListItem/MusicListItem';

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums } = this.props;
    fetchArtistAlbums();
  }

  render() {
    const { albums } = this.props;
    console.log(this.props.albums);
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
                {() => <h5>Controls here</h5>}
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
    albums: selectTopTracksByArtistId(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArtistAlbums: () => {
    dispatch(fetchArtistAlbums(ownProps.match.params.id));
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumList));
