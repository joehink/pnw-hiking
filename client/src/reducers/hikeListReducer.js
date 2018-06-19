import { FETCH_HIKES_SUCCESS, FETCH_HIKES_FAILURE } from '../actions/types';

const INITIAL_STATE = {
    results: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_HIKES_SUCCESS:
            return { results: action.payload, error: '' };
        case FETCH_HIKES_FAILURE:
            return { ...state, error: action.payload };
        default: 
            return state;
    }
}