import { GET_HIKES } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HIKES:
            return action.payload;
        default: 
            return state;
    }
}