import { 
    FETCH_TRAILS_SUCCESS, 
    FETCH_TRAILS_FAILURE, 
    FETCH_TRAILS_START, 
    SEARCH_RADIUS_CHANGE,
    SET_USER_LOCATION
} from '../actions/types';

const INITIAL_STATE = {
    trails: [],
    searchRadius: 10,
    userLocation: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRAILS_START: 
            return { ...state, loading: action.payload, error: '' }
        case FETCH_TRAILS_SUCCESS:
            return { ...state, trails: action.payload, error: '', loading: false };
        case FETCH_TRAILS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case SEARCH_RADIUS_CHANGE:
            return { ...state, searchRadius: action.payload, error: '' };
        case SET_USER_LOCATION:
            return { ...state, userLocation: action.payload };
        default: 
            return state;
    }
}
