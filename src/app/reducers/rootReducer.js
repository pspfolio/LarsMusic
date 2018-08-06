import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import accessToken from 'features/accessToken/accessTokenReducer';
import artistsEntities from 'features/entities/artists/artistsReducer';
import albumsEntities from 'features/entities/albums/albumsReducer';
import tracks from 'features/entities/tracks/tracksReducer';
import playingBar from 'features/playingBar/playingBarReducer';
import search from 'features/search/searchReducer';
import albums from 'features/album/albumReducer';
import user from 'features/user/userReducer';
import userArtists from 'features/entities/userArtists/userArtistReducer';
import userAlbums from 'features/entities/userAlbums/userAlbumsReducer';

const entities = combineReducers({ artists: artistsEntities, albums: albumsEntities, tracks, userArtists, userAlbums });

const rootReducer = combineReducers({
  entities,
  accessToken,
  playingBar,
  albums,
  search,
  user,
  form: formReducer
});

export default rootReducer;
