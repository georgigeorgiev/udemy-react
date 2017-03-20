import { FETCH_POST, DELETE_POST, FETCH_POSTS } from '../actions/index';

const INITAL_STATE = {
    all: [],
    post: null
};

export default function(state = INITAL_STATE, action) {
    switch(action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data };
        case DELETE_POST:
            return state;
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default: 
            return state;
    }
}