import { 
    FETCH_TRAILS_START,
    FETCH_TRAILS_SUCCESS,
    FETCH_TRAILS_FAILURE,  
    SEARCH_RADIUS_CHANGE, 
    SET_USER_LOCATION 
} from './types';
import axios from 'axios';
import geolib from 'geolib';

export const findTrails = ({position, searchRadius, navigation}) => {
    const { latitude, longitude } = position.coords;
    const maxResults = 500;
    const sort = 'distance';
    const key ='200292830-8db73dcb549ccc93d02472f29702934a'
    const url = `https://www.hikingproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&sort=${sort}&maxDistance=${searchRadius}&maxResults=${maxResults}&key=${key}`
    return dispatch => {
        dispatch({ type: FETCH_TRAILS_START, payload: true })
        axios.get(url)
            .then(results => {
                //Filter out non-featured hikes
                const trailsWithDistance = results.data.trails.filter((trail, index) => {
                    return trail.type === "Featured Hike"
                })
                //Add a distance from user property to each trail object in array
                .map(trail => {
                    const distanceFromUser = parseFloat(geolib.getDistance({latitude, longitude}, {latitude: trail.latitude, longitude: trail.longitude}) * 0.00062137).toFixed(1);
                    return { ...trail, distanceFromUser}
                })
                //Sort hikes nearest to furthest
                .sort((a, b) => a.distanceFromUser - b.distanceFromUser);

                dispatch({ type: FETCH_TRAILS_SUCCESS, payload: trailsWithDistance })
                navigation.navigate('Results');                
            }).catch(error => {
                console.log(error)
                dispatch({ type: FETCH_TRAILS_FAILURE, payload: 'Sorry, we were not able to connect'})
            })
    }
}

export const searchRadiusChange = value => {
    return { type: SEARCH_RADIUS_CHANGE, payload: value }
}

export const setUserLocation = position => {
    return { type: SET_USER_LOCATION, payload: position }
}