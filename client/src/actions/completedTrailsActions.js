import { FETCH_COMPLETED_TRAILS, USER_START_FETCHING } from './types';
import firebase from '../firebase';

export const fetchCompletedTrails = () => {
    return (dispatch) => {
        dispatch({ type: USER_START_FETCHING });
        if (firebase.auth().currentUser) {
            let userID = firebase.auth().currentUser.uid;
            firebase.database().ref().child('users/' + userID + '/completed')
            .on('value', (snapshot) => {
                    const trails = snapshot.val() || [];
                    dispatch({ type: FETCH_COMPLETED_TRAILS, payload: trails})
            });
        }
    };
}