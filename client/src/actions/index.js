import { FETCH_HIKES_FAILURE, FETCH_HIKES_SUCCESS, SEARCH_RADIUS_CHANGE, SET_USER_LOCATION } from './types';
import axios from 'axios';

export const findHikes = (userLocation, searchRadius, navigation) => {
    const { latitude, longitude } = userLocation.coords;
    return dispatch => {
        axios.get(`https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${searchRadius}&maxResults=500&key=200292830-8db73dcb549ccc93d02472f29702934a`)
            .then(results => {
                dispatch({ type: FETCH_HIKES_SUCCESS, payload: results.data.trails })
                navigation.navigate('Results');
            }).catch(error => {
                console.log(error)
                dispatch({ type: FETCH_HIKES_FAILURE, payload: 'Sorry, no trails were found'})
            })
    }
}

export const searchRadiusChange = value => {
    return { type: SEARCH_RADIUS_CHANGE, payload: value}
}

export const setUserLocation = position => {
    return { type: SET_USER_LOCATION, payload: position}
}