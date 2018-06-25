import { FETCH_FAVORITE_TRAILS } from './types';

import firebase from '../firebase';

export const getFavoriteTrails = (trails) => {
    return { type: FETCH_FAVORITE_TRAILS, payload: trails}
}

export const fetchFavoriteTrails = () => {
    return (dispatch) => {
        dispatch(fetchingUserTrailData());
        if (firebase.auth().currentUser) {
            let userID = firebase.auth().currentUser.uid;
            firebase.database().ref().child('users/' + userID + '/favorites')
            .on('value', (snapshot) => {
                    const trails = snapshot.val() || [];
                    dispatch(getFavoriteTrails(trails))
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