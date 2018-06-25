import { FETCH_TRAILS_FAILURE, FETCH_TRAILS_SUCCESS, SEARCH_RADIUS_CHANGE, SET_USER_LOCATION, 
            GET_CURR_USER_SUCCESS, GET_CURR_USER_FAILURE, USER_START_AUTHORIZING, USER_LOGGED_IN, SIGN_OUT_USER,
                USER_SIGNED_UP, FETCH_TRAILS_START, FAVORITE_TRAIL, FETCH_FAVORITE_TRAILS, FETCH_COMPLETED_TRAILS, USER_START_FETCHING } from './types';
import axios from 'axios';
import firebase from '../firebase';
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
                    const distanceFromUser = parseFloat(geolib.getDistance({latitude, longitude}, {latitude: trail.latitude, longitude: trail.longitude}) * 0.00062137).toFixed(1);

                    return trail.type === "Featured Hike" && distanceFromUser < searchRadius
                })
                //Add a distance from user property to each trail object in array
                .map(trail => {
                    const distanceFromUser = parseFloat(geolib.getDistance({latitude, longitude}, {latitude: trail.latitude, longitude: trail.longitude}) * 0.00062137).toFixed(1);
                    return { ...trail, distanceFromUser}
                })
                //Sort hikes nearest to furthest
                .sort((a, b) => a.distanceFromUser - b.distanceFromUser);

                dispatch({ type: FETCH_TRAILS_SUCCESS, payload: trailsWithDistance })               
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
    return { type: SET_USER_LOCATION, payload: position}
}

export const getCurrUser = () => {
    return dispatch => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch({ type: GET_CURR_USER_SUCCESS, payload: user})
                // navigation.navigate('LoggedInApp')
            } else {
                dispatch({ type: GET_CURR_USER_FAILURE, payload: 'No user found'})
                // navigation.navigate('SignUp')
            }
        })
    }
}

export const signUp = (email, password) => {
    return dispatch => {
        dispatch(authorizing());
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
                let userID = user.user.uid;
                let userEmail = user.user.email;
                firebase.database()
                            .ref()
                            .child('users/' + userID)
                            .set({
                                email: userEmail
                            })
                            .then(() => {
                                dispatch({ type: USER_SIGNED_UP, payload: user })
                            })
            });
    }
}

export const signOutUser = (navigation) => {
    return dispatch => {
        firebase.auth().signOut()
        .then(() => {
            dispatch(signOut());
            navigation.navigate('MainApp');
        })
    }
}

export const signOut = () => {
    return { type: SIGN_OUT_USER }
}

// export const addTrailToFavorites = (trail) => {
//     return { type: FAVORITE_TRAIL, payload: trail }
// };

export const getFavoriteTrails = (trails) => {
    return { type: FETCH_FAVORITE_TRAILS, payload: trails}
}

export const fetchFavoriteTrails = () => {
    return (dispatch) => {
        if (firebase.auth().currentUser) {
            dispatch(fetchingUserTrailData());
            let userID = firebase.auth().currentUser.uid;
            firebase.database().ref().child('users/' + userID + '/favorites')
            .on('value', (snapshot) => {
                    const trails = snapshot.val() || [];
                    dispatch(getFavoriteTrails(trails));
            });
        } 
    };
}

export const deleteFavoriteTrail = (trailID) => {
    return dispatch => {
        let userID = firebase.auth().currentUser.uid;
        firebase.database().ref().child('users/' + userID + '/favorites/' + trailID).remove()
    }
};

export const addFavoriteTrail = (trail) => {
    return dispatch => {
        let userID = firebase.auth().currentUser.uid;
        const newTrailRef = firebase.database().ref().child('users/' + userID + '/favorites').push()
        trail.id = newTrailRef.key;
        newTrailRef.set(trail);
    }
};

export const getCompletedTrails = (trails) => {
    return { type: FETCH_COMPLETED_TRAILS, payload: trails}
}

export const fetchCompletedTrails = () => {
    return (dispatch) => {
        dispatch(fetchingUserTrailData());
        if (firebase.auth().currentUser) {
            let userID = firebase.auth().currentUser.uid;
            firebase.database().ref().child('users/' + userID + '/completed')
            .on('value', (snapshot) => {
                    const trails = snapshot.val() || [];
                    dispatch(getCompletedTrails(trails))
            });
        }
    };
}

export const deleteCompletedTrail = (trailID) => {
    return dispatch => {
        let userID = firebase.auth().currentUser.uid;
        firebase.database().ref().child('users/' + userID + '/completed/' + trailID).remove()
    }
};

export const addCompletedTrail = (trail) => {
    return dispatch => {
        let userID = firebase.auth().currentUser.uid;
        const newTrailRef = firebase.database().ref().child('users/' + userID + '/completed').push()
        trail.id = newTrailRef.key;
        newTrailRef.set(trail);
    }
};

export const logIn = (email, password) => {
    return dispatch => {
        dispatch(authorizing());
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: USER_LOGGED_IN, payload: user })
            });
    }
}

export const authorizing = () => {
    return { type: USER_START_AUTHORIZING }
}

export const fetchingUserTrailData = () => {
    return { type: USER_START_FETCHING }
}