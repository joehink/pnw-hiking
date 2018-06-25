import { 
    GET_CURR_USER_SUCCESS, 
    GET_CURR_USER_FAILURE, 
    USER_START_AUTHORIZING, 
    SIGN_OUT_USER,
    USER_LOGGED_IN, 
    USER_SIGNED_UP, 
    FAVORITE_TRAIL, 
    FETCH_FAVORITE_TRAILS, 
    FETCH_COMPLETED_TRAILS, 
    USER_START_FETCHING 
} from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURR_USER_SUCCESS:
            return { user: action.payload, error: ''};
        case GET_CURR_USER_FAILURE:
            return { ...state };
        case USER_START_AUTHORIZING:
            return { ...state, authorizing: true }
        case USER_SIGNED_UP:
            return { user: action.payload, authorizing: false }
        case USER_LOGGED_IN:
            return { user: action.payload, authorizing: false }
        case USER_START_FETCHING:
            return { ...state, fetching: true }
        case FAVORITE_TRAIL: 
            return { ...state, favorites: action.payload }
        case FETCH_FAVORITE_TRAILS:
            return { ...state, favorites: action.payload, fetching: false }
        case FETCH_COMPLETED_TRAILS:
            return { ...state, completed: action.payload, fetching: false }
        case SIGN_OUT_USER: 
            return { user: null }
        default: 
            return state;
    }
}
