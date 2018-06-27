import { FETCH_FAVORITE_TRAILS_SUCCESS, FETCH_FAVORITE_TRAILS_START } from '../actions/types';

const INITIAL_STATE = {
    trails: [],
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_FAVORITE_TRAILS_START:
            return { ...state, loading: true }
        case FETCH_FAVORITE_TRAILS_SUCCESS:
            return { ...state, trails: action.payload, loading: false }
        default: 
            return state;
    }
}
