import { 
    FETCH_TRAIL_START,
    FAVORITED_TRAIL_SUCCESS,
    COMPLETED_TRAIL_SUCCESS,
    IS_COMPLETED_AT_START,
    IS_FAVORITED_AT_START,
    TOGGLE_FAVORITED,
    TOGGLE_COMPLETED,
    TRAIL_FAVORITE_ACTION_START,
    TRAIL_COMPLETED_ACTION_START
} from './types';
import firebase from '../firebase';

export const isTrailInDB = ( userID, trail, collection ) => {
    return dispatch => {
        dispatch({ type: FETCH_TRAIL_START, payload: true })
        const ref = firebase.database().ref().child(`users/${userID}/${collection}`)
        const query = ref.orderByChild('id').equalTo(trail.id).limitToFirst(1)
        query.once('value', snap => {
            if(snap.exists()) {
                if(collection === 'favorites') {
                    dispatch({ type: IS_FAVORITED_AT_START, payload: true });
                    dispatch({ type: FAVORITED_TRAIL_SUCCESS, payload: snap.val() })
                } else if (collection === 'completed') {
                    dispatch({ type: IS_COMPLETED_AT_START, payload: true });
                    dispatch({ type: COMPLETED_TRAIL_SUCCESS, payload: snap.val() })
                }
            } else {
                if (collection === 'favorites') {
                    dispatch({ type: IS_FAVORITED_AT_START, payload: false });
                    dispatch({ type: FAVORITED_TRAIL_SUCCESS, payload: null })
                } else if (collection === 'completed') {
                    dispatch({ type: IS_COMPLETED_AT_START, payload: false });
                    dispatch({ type: COMPLETED_TRAIL_SUCCESS, payload: null });
                }
            }
        })
    }
}

export const removeFromDb = (userID, trail, collection) => {
    return dispatch => {
        if(collection === 'favorites') {
            dispatch({ type: TRAIL_FAVORITE_ACTION_START });
        } else {
            dispatch({ type: TRAIL_COMPLETED_ACTION_START });
        }
        const trailId = Object.keys(trail)[0];
        firebase.database().ref().child(`users/${userID}/${collection}/${trailId}`).remove()
            .then(() => {
                if(collection === 'favorites') {
                    dispatch({ type: TOGGLE_FAVORITED })
                } else if ( collection === 'completed' ) {
                    dispatch({ type: TOGGLE_COMPLETED })
                }

            })
            .catch(err => {
                console.log(err)
            })
    }
    
}

export const addToDb = (userID, trail, collection) => {
    return dispatch => {
        if(collection === 'favorites') {
            dispatch({ type: TRAIL_FAVORITE_ACTION_START });
        } else {
            dispatch({ type: TRAIL_COMPLETED_ACTION_START });
        }
        const ref = firebase.database().ref().child(`users/${userID}/${collection}`)
        const newTrailRef = ref.push()
        trail.firebaseId = newTrailRef.key;
        const newTrail = trail;
        newTrailRef.set(trail, (error) => {
            if (error) {
                console.log(error);
            } else {
                if(collection === 'favorites') {
                    dispatch({ type: TOGGLE_FAVORITED });
                    dispatch({ type: FAVORITED_TRAIL_SUCCESS, payload: { [newTrail.firebaseId]: newTrail } })
                } else if ( collection === 'completed' ) {
                    dispatch({ type: TOGGLE_COMPLETED });
                    dispatch({ type: COMPLETED_TRAIL_SUCCESS, payload: { [newTrail.firebaseId]: newTrail } })
                }
            }
        });
    }
}

export const toggle = collection => {
    if (collection === 'favorites') {
        return { type: TOGGLE_FAVORITED }
    } else if (collection === 'completed') {
        return { type: TOGGLE_COMPLETED }
    } 
}

 