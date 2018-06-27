import { combineReducers } from 'redux';
import discoverReducer from './discoverReducer';
import favoriteTrailsReducer from './favoriteTrailsReducer';
import completedTrailsReducer from './completedTrailsReducer';
import userReducer from './userReducer';

export default combineReducers({
    discover: discoverReducer,
    favoriteTrails: favoriteTrailsReducer,
    completedTrails: completedTrailsReducer,
    currUser: userReducer
});