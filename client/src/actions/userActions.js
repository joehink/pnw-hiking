import {  
    GET_CURR_USER_SUCCESS, 
    GET_CURR_USER_FAILURE, 
    USER_START_AUTHORIZING, 
    USER_LOGGED_IN_SUCCESS, 
    USER_LOGGED_IN_FAILURE,
    USER_SIGNED_UP_SUCCESS, 
    USER_SIGNED_UP_FAILURE,
    SIGN_OUT_USER,
    USER_FETCH_START 
} from './types';

import firebase from '../firebase';

export const getCurrUser = navigation => {
    return dispatch => {
        dispatch({ type: USER_FETCH_START })
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch({ type: GET_CURR_USER_SUCCESS, payload: user})
                navigation.navigate('MainApp');
            } else {
                dispatch({ type: GET_CURR_USER_FAILURE })
                navigation.navigate('MainApp');
            }
        })
    }
}

export const signUp = (email, password) => {
    return dispatch => {
        dispatch({ type: USER_START_AUTHORIZING });
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
                                dispatch({ type: USER_SIGNED_UP_SUCCESS, payload: user });
                            })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: USER_SIGNED_UP_FAILURE, payload: error });
            });
    }
}

export const logIn = (email, password) => {
    return dispatch => {
        dispatch({ type: USER_START_AUTHORIZING });
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: USER_LOGGED_IN_SUCCESS, payload: error })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: USER_LOGGED_IN_FAILURE, payload: error});
            });
    }
}

export const signOutUser = (navigation) => {
    return dispatch => {
        firebase.auth().signOut()
        .then(() => {
            dispatch({ type: SIGN_OUT_USER });
            navigation.navigate('MainApp');
        })
    }
}