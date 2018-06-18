import { combineReducers } from 'redux';
import hikeListReducer from './hikeListReducer';
import searchRadiusReducer from './searchRadiusReducer';
import userLocationReducer from './userLocationReducer'

export default combineReducers({
    hikeList: hikeListReducer,
    searchRadius: searchRadiusReducer,
    userLocation: userLocationReducer
});