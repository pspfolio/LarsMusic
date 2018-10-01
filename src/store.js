import configureStore from 'app/store/configureStore';
import { loadFromLocalStorage } from 'common/utils/localStorage';

const persistedTokens = loadFromLocalStorage('tokens');
const persistedUser = loadFromLocalStorage('user');
const state = { user: persistedUser, auth: { ...persistedTokens } };
const store = configureStore(state);

export default store;
