import { FETCH_FAVORITE_TRAILS, USER_START_FETCHING } from './types';
import firebase from '../firebase';

export const fetchFavoriteTrails = () => {
    return (dispatch) => {
        if (firebase.auth().currentUser) {
            dispatch({ type: USER_START_FETCHING });
            let userID = firebase.auth().currentUser.uid;
            firebase.database().ref().child('users/' + userID + '/favorites')
            .on('value', (snapshot) => {
                    const trails = snapshot.val() || [];
                    dispatch({ type: FETCH_FAVORITE_TRAILS, payload: trails});
            });
        } 
    };
}