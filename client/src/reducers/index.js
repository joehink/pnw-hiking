import { combineReducers } from 'redux';
import trailListReducer from './trailListReducer';
import searchRadiusReducer from './searchRadiusReducer';
import userLocationReducer from './userLocationReducer';
import userReducer from './userReducer';

export default combineReducers({
    trailList: trailListReducer,
    searchRadius: searchRadiusReducer,
    userLocation: userLocationReducer,
    currUser: userReducer
});