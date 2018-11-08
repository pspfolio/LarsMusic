import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import ClickableMusicListItem from 'common/components/musicListItem/ClickableMusicListItem';
import AlbumListControls from './AlbumListControls';
import TracksList from 'features/tracks/tracksList/TracksList';
import no_image from 'assets/images/no_image.jpg';
import empty_state from 'assets/images/empty-state.svg';

const List = styled.ul`
  margin-top: 32px;
  padding-left: 0;
`;

const EmptyScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const EmptyScreenImage = styled.img`
  width: 400px;
  margin-top: 32px;
  align-self: center;
  opacity: 0.3;
`;

class AlbumList extends Component {
  renderAlbums = () => {
    const { albums, openAlbum, albumTracks, match, onAlbumClick, onAddFavoriteClick, isAlbumsLoading } = this.props;
    return (
      <List>
        {albums.map(({ id, name, album_type, images, owned }) => (
          <React.Fragment key={id}>
            <ClickableMusicListItem
              name={name}
              secondaryName={album_type}
              image={images.length > 0 ? images.find(img => img.height < 100).url : no_image}
              onClick={() => {
                onAlbumClick(id);
              }}
            >
              {() => <AlbumListControls onClick={() => onAddFavoriteClick(id)} owned={owned} />}
            </ClickableMusicListItem>
            {openAlbum === id && <TracksList tracks={albumTracks} albumId={id} artistId={match.params.id} />}
          </React.Fragment>
        ))}
      </List>
    );
  };

  render() {
    const { albums } = this.props;
    const container =
      albums.length > 0 ? (
        this.renderAlbums()
      ) : (
        <EmptyScreenContainer>
          <EmptyScreenImage src={empty_state} />
        </EmptyScreenContainer>
      );
    return <Fragment>{container}</Fragment>;
  }
}

export default withRouter(AlbumList);
