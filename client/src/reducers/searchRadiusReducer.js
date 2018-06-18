import { SEARCH_RADIUS_CHANGE } from '../actions/types';

const INITIAL_STATE = 0;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_RADIUS_CHANGE:
            return action.payload;
        default: 
            return state;
    }
}