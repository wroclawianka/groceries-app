import _ from 'lodash';
import {FETCH_ITEMS} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {...state, items: action.payload};
        default:
            return state;
    }
};