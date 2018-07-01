import { FETCH_COMPLETED_TRAILS_SUCCESS, FETCH_COMPLETED_TRAILS_START } from './types';
import firebase from '../firebase';

export const fetchCompletedTrails = userID => {
    return (dispatch) => {
        dispatch({ type: FETCH_COMPLETED_TRAILS_START });
        firebase.database().ref().child('users/' + userID + '/completed')
        .on('value', (snapshot) => {
            const trails = snapshot.val() || [];
            let sortedTrails = Object.values(trails).sort((a,b) => {
                return a.length > b.length
            })
            dispatch({ type: FETCH_COMPLETED_TRAILS_SUCCESS, payload: sortedTrails});
        });
    };
}