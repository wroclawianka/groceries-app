import {
    CREATE_ITEM,
    SELECT_ITEM,
    EDIT_ITEM,
    FETCH_ITEMS
} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {...state, items: action.payload};
        case CREATE_ITEM:
            return {...state, item: action.payload};
        case SELECT_ITEM:
            return {...state, item: action.payload};
        case EDIT_ITEM:
            return {...state, item: action.payload};
        default:
            return state;
    }
};