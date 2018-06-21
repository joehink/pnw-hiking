import { 
    FETCH_TRAILS_SUCCESS, 
    FETCH_TRAILS_FAILURE, 
    FETCH_TRAILS_START, 
    SEARCH_RADIUS_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
    results: [],
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRAILS_START: 
            return { ...state, loading: action.payload, error: '' }
        case FETCH_TRAILS_SUCCESS:
            return { results: action.payload, error: '', loading: false };
        case FETCH_TRAILS_FAILURE:
            return { ...state, error: action.payload, loading: false };
        case SEARCH_RADIUS_CHANGE:
            return { ...state, error: '' }
        default: 
            return state;
    }
}