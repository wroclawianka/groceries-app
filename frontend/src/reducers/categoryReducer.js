import {FETCH_CATEGORIES, SELECT_CATEGORY} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, list: action.payload};
        case SELECT_CATEGORY:
            return {...state, selected: action.payload};
        default:
            return state;
    }
};