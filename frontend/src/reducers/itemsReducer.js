import {CREATE_ITEM, FETCH_ITEMS} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {...state, items: action.payload};
        case CREATE_ITEM:
            return {...state, item: action.payload};
        default:
            return state;
    }
};