import { FETCH_FAVORITE_TRAILS_SUCCESS, FETCH_FAVORITE_TRAILS_START } from './types';
import firebase from '../firebase';

export const fetchFavoriteTrails = () => {
    return (dispatch) => {
        if (firebase.auth().currentUser) {
            let userID = firebase.auth().currentUser.uid;
            dispatch({ type: FETCH_FAVORITE_TRAILS_START });
            firebase.database().ref().child('users/' + userID + '/favorites')
            .on('value', (snapshot) => {
                    const trails = snapshot.val() || [];
            
                    dispatch({ type: FETCH_FAVORITE_TRAILS_SUCCESS, payload: trails});
            });
        } 
    };
}