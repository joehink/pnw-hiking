import { FETCH_TRAILS_FAILURE, FETCH_TRAILS_SUCCESS, SEARCH_RADIUS_CHANGE, SET_USER_LOCATION } from './types';
import axios from 'axios';
import geolib from 'geolib';

export const findTrails = ({userLocation, searchRadius, navigation}) => {
    const { latitude, longitude } = userLocation.coords;
    const maxResults = 500;
    const key ='200292830-8db73dcb549ccc93d02472f29702934a'
    const url = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${searchRadius}&maxResults=${maxResults}&key=${key}`
    return dispatch => {
        axios.get(url)
            .then(results => {
                //Add a distance from user property to each trail object in array
                const trailsWithDistance = results.data.trails.map(trail => {
                    const distanceAway = parseFloat(geolib.getDistance({latitude, longitude}, {latitude: trail.latitude, longitude: trail.longitude}) * 0.00062137).toFixed(1);
                    return { ...trail, distanceFromUser: distanceAway }
                });

                //Filter out trails that are further away thatn the search radius
                const trailsWithinSearchradius = trailsWithDistance.filter(trail => trail.distanceFromUser <= searchRadius);

                //Sort the trails by distancFromUser, closest first
                const sortedTrails = trailsWithinSearchradius.sort((a, b) => a.distanceFromUser - b.distanceFromUser);

                dispatch({ type: FETCH_TRAILS_SUCCESS, payload: sortedTrails })
                navigation.navigate('Results');
            }).catch(error => {
                console.log(error)
                dispatch({ type: FETCH_TRAILS_FAILURE, payload: 'Sorry, no trails were found'})
            })
    }
}

export const searchRadiusChange = value => {
    return { type: SEARCH_RADIUS_CHANGE, payload: value}
}

export const setUserLocation = position => {
    return { type: SET_USER_LOCATION, payload: position}
}