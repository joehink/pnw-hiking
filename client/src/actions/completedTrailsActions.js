import { FETCH_COMPLETED_TRAILS_SUCCESS, FETCH_COMPLETED_TRAILS_START } from './types';
import firebase from '../firebase';

export const fetchCompletedTrails = userID => {
    return (dispatch) => {
        dispatch({ type: FETCH_COMPLETED_TRAILS_START });
        firebase.database().ref().child('users/' + userID + '/completed')
        .on('value', (snapshot) => {
            const trails = snapshot.val() || [];
            dispatch({ type: FETCH_COMPLETED_TRAILS_SUCCESS, payload: trails});
        });
    };
}