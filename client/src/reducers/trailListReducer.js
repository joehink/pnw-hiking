import { FETCH_TRAILS_SUCCESS, FETCH_TRAILS_FAILURE } from '../actions/types';

const INITIAL_STATE = {
    results: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRAILS_SUCCESS:
            return { results: action.payload, error: '' };
        case FETCH_TRAILS_FAILURE:
            return { ...state, error: action.payload };
        default: 
            return state;
    }
}