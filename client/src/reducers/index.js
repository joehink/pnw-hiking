import { combineReducers } from 'redux';
import trailListReducer from './trailListReducer';
import searchRadiusReducer from './searchRadiusReducer';
import userLocationReducer from './userLocationReducer'

export default combineReducers({
    trailList: trailListReducer,
    searchRadius: searchRadiusReducer,
    userLocation: userLocationReducer
});