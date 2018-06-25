import {  
    GET_CURR_USER_SUCCESS, 
    GET_CURR_USER_FAILURE, 
    USER_START_AUTHORIZING, 
    USER_LOGGED_IN, 
    USER_SIGNED_UP
} from './types';

import firebase from '../firebase';

export const getCurrUser = (navigation) => {
    return dispatch => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                dispatch({ type: GET_CURR_USER_SUCCESS, payload: user})
                navigation.navigate('LoggedInApp')
            } else {
                dispatch({ type: GET_CURR_USER_FAILURE, payload: 'No user found'})
                navigation.navigate('SignUp')
            }
        })
    }
}

export const signUp = (email, password) => {
    return dispatch => {
        dispatch(authorizing());
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
                                dispatch({ type: USER_SIGNED_UP, payload: user })
                            })
            });
    }
}

export const logIn = (email, password) => {
    return dispatch => {
        dispatch(authorizing());
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                dispatch({ type: USER_LOGGED_IN, payload: user })
            });
    }
}

export const authorizing = () => {
    return { type: USER_START_AUTHORIZING }
}