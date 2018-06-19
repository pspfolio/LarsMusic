import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { fetchArtistAlbums } from '../albumActions';
import { selectAlbumsByArtistId } from '../albumSelectors';
import ClickableMusicListItem from 'common/components/musicListItem/ClickableMusicListItem';
import AlbumListControls from './AlbumListControls';

const List = styled.ul`
  margin-top: 32px;
  padding: 0 32px;
`;

class AlbumList extends Component {
  componentDidMount() {
    const { fetchArtistAlbums } = this.props;
    fetchArtistAlbums();
  }

  onClick = id => {};

  render() {
    const { albums } = this.props;

    return (
      <div>
        {albums && (
          <List>
            {albums.map(({ id, name, album_type, images }) => (
              <ClickableMusicListItem
                key={id}
                name={name}
                secondaryName={album_type}
                image={images.find(img => img.height < 100).url}
                onClick={() => {
                  console.log(`yolo ${id}`);
                }}
              >
                {() => <AlbumListControls />}
              </ClickableMusicListItem>
            ))}
          </List>
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
