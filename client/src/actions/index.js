import { GET_HIKES, SEARCH_RADIUS_CHANGE, SET_USER_LOCATION } from './types';
import axios from 'axios';

export const findHikes = (userCoordinates) => {
    return dispatch => {
        
    }
}

export const searchRadiusChange = value => {
    return { type: SEARCH_RADIUS_CHANGE, payload: value}
}

export const setUserLocation = position => {
    return { type: SET_USER_LOCATION, payload: position}
}