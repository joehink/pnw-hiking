import { 
    FETCH_TRAIL_START,
    FAVORITED_TRAIL_SUCCESS,
    COMPLETED_TRAIL_SUCCESS,
    IS_COMPLETED_AT_START,
    IS_FAVORITED_AT_START,
    TOGGLE_FAVORITED,
    TOGGLE_COMPLETED,
} from '../actions/types';

const INITIAL_STATE = {
    trail: {},
    loading: false,
    completedTrail: null,
    favoritedTrail: null,
    isCompleted: false,
    isFavorited: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_TRAIL_START:
            return { ...state, loading: true };
        case FAVORITED_TRAIL_SUCCESS:
            return { ...state, favoritedTrail: action.payload, loading: false };
        case COMPLETED_TRAIL_SUCCESS:
            return { ...state, completedTrail: action.payload, loading: false };
        case IS_COMPLETED_AT_START:
            return { ...state, isCompleted: action.payload };
        case IS_FAVORITED_AT_START:
            return { ...state, isFavorited: action.payload };
        case TOGGLE_COMPLETED:
            return { ...state, isCompleted: !state.isCompleted }
        case TOGGLE_FAVORITED:
            return { ...state, isFavorited: !state.isFavorited}
        default: 
            return state;
    }
}
