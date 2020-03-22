import _ from 'lodash';
import {
    CREATE_ITEM,
    EDIT_ITEM,
    FETCH_ITEMS
} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {..._.mapKeys(action.payload, "id")};
        case CREATE_ITEM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_ITEM:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
};