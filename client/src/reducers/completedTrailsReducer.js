import { FETCH_COMPLETED_TRAILS_SUCCESS, FETCH_COMPLETED_TRAILS_START } from '../actions/types';

const INITIAL_STATE = {
    trails: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COMPLETED_TRAILS_START:
            return { ...state, loading: true }
        case FETCH_COMPLETED_TRAILS_SUCCESS:
            return { ...state, trails: action.payload, loading: false }
        default: 
            return state;
    }
}
