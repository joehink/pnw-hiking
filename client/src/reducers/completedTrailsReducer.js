import { FETCH_COMPLETED_TRAILS } from '../actions/types';

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_COMPLETED_TRAILS:
            return action.payload;
        default: 
            return state;
    }
}
