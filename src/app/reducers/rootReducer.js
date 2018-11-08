import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from 'features/accessToken/accessTokenReducer';
import artistsEntities from 'features/entities/artists/artistsReducer';
import albumsEntities from 'features/entities/albums/albumsReducer';
import tracks from 'features/entities/tracks/tracksReducer';
import playingBar from 'features/playingBar/playingBarReducer';
import search from 'features/search/searchReducer';
import albums from 'features/album/albumReducer';
import user from 'features/user/userReducer';
import userArtists from 'features/entities/userArtists/userArtistReducer';
import userAlbums from 'features/entities/userAlbums/userAlbumsReducer';
import loading from './loadingReducer';

const entities = combineReducers({ artists: artistsEntities, albums: albumsEntities, tracks, userArtists, userAlbums });

const rootReducer = combineReducers({
  entities,
  auth,
  playingBar,
  albums,
  search,
  user,
  form: formReducer,
  loading
});

export default rootReducer;
