import { 
    GET_CURR_USER_SUCCESS, 
    GET_CURR_USER_FAILURE, 
    USER_START_AUTHORIZING, 
    SIGN_OUT_USER,
    USER_LOGGED_IN_SUCCESS,
    USER_LOGGED_IN_FAILURE, 
    USER_SIGNED_UP_SUCCESS, 
    USER_SIGNED_UP_FAILURE,
    USER_FETCH_START 
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    loading: false,
    error: '',
    authorizing: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CURR_USER_SUCCESS:
            return { ...state, user: action.payload, error: '', loading: false};
        case GET_CURR_USER_FAILURE:
            return { ...INITIAL_STATE };
        case USER_START_AUTHORIZING:
            return { ...state, authorizing: true }
        case USER_SIGNED_UP_SUCCESS:
            return { ...state, user: action.payload, authorizing: false }
        case USER_SIGNED_UP_FAILURE:
            return { ...state, user: null, authorizing: false, error: action.payload + '' }
        case USER_LOGGED_IN_SUCCESS:
            return { ...state, user: action.payload, authorizing: false }
        case USER_LOGGED_IN_FAILURE:
            return { ...state, user: null, authorizing: false, error: action.payload + '' }
        case USER_FETCH_START:
            return { ...state, loading: true }
        case SIGN_OUT_USER: 
            return { ...INITIAL_STATE }
        default: 
            return state;
    }
}
 