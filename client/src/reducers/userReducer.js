import { GET_CURR_USER_SUCCESS, GET_CURR_USER_FAILURE, USER_START_AUTHORIZING, 
            USER_LOGGED_IN, USER_SIGNED_UP, FAVORITE_TRAIL, FETCH_FAVORITE_TRAILS } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURR_USER_SUCCESS:
            return { user: action.payload, error: ''};
        case GET_CURR_USER_FAILURE:
            return { ...state, error: action.payload};
        case USER_START_AUTHORIZING:
            return { ...state, authorizing: true }
        case USER_SIGNED_UP:
            return { user: action.payload, authorizing: false }
        case USER_LOGGED_IN:
            return { user: action.payload, authorizing: false }
        case FAVORITE_TRAIL: 
            return { favorites: action.payload }
        case FETCH_FAVORITE_TRAILS:
            return { favorites: action.payload }
        default: 
            return state;
    }
}
