import { FETCH_COMPLETED_TRAILS } from './types';
import firebase from '../firebase';

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