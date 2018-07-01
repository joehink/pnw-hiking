import { combineReducers } from 'redux';
import discoverReducer from './discoverReducer';
import favoriteTrailsReducer from './favoriteTrailsReducer';
import userReducer from './userReducer';
import trailReducer from './trailReducer';
import completedTrailsReducer from './completedTrailsReducer';

export default combineReducers({
    discover: discoverReducer,
    favoriteTrails: favoriteTrailsReducer,
    completedTrails: completedTrailsReducer,
    currUser: userReducer,
    trail: trailReducer
});