import { combineReducers } from 'redux';
import discoverReducer from './discoverReducer';
import favoriteTrailsReducer from './favoriteTrailsReducer';
import userReducer from './userReducer';
import trailReducer from './trailReducer';

export default combineReducers({
    discover: discoverReducer,
    favoriteTrails: favoriteTrailsReducer,
    currUser: userReducer,
    trail: trailReducer
});