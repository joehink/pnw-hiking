import { 
    FETCH_TRAIL_START,
    FAVORITED_TRAIL_SUCCESS,
    COMPLETED_TRAIL_SUCCESS,
    IS_COMPLETED_AT_START,
    IS_FAVORITED_AT_START,
    TOGGLE_FAVORITED,
    TOGGLE_COMPLETED,
    TRAIL_FAVORITE_ACTION_START,
    TRAIL_COMPLETED_ACTION_START
} from '../actions/types';

const INITIAL_STATE = {
    trail: {},
    loading: false,
    completedTrail: null,
    favoritedTrail: null,
    isCompleted: false,
    isFavorited: false,
    favoriting: false,
    completing: false 
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
        case TRAIL_FAVORITE_ACTION_START:
            return { ...state, favoriting: true }
        case TRAIL_COMPLETED_ACTION_START:
            return { ...state, completing: true }
        case TOGGLE_COMPLETED:
            return { ...state, isCompleted: !state.isCompleted, completing: false }
        case TOGGLE_FAVORITED:
            return { ...state, isFavorited: !state.isFavorited, favoriting: false}
        default: 
            return state;
    }
}
 