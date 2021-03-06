import { FETCH_FAVORITE_TRAILS_SUCCESS, FETCH_FAVORITE_TRAILS_START } from './types';
import firebase from '../firebase';

export const fetchFavoriteTrails = userID => {
    return (dispatch) => {
        dispatch({ type: FETCH_FAVORITE_TRAILS_START });
        // let userID = firebase.auth().currentUser.uid;
        firebase.database().ref().child('users/' + userID + '/favorites')
        .on('value', (snapshot) => {
            const trails = snapshot.val() || [];
            let sortedTrails = Object.values(trails).sort((a,b) => {
                return a.length > b.length
            })
            dispatch({ type: FETCH_FAVORITE_TRAILS_SUCCESS, payload: sortedTrails});
        });
    };
}