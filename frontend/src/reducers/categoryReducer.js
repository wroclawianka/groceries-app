import {FETCH_CATEGORIES, SELECT_CATEGORY} from "../actions/types";
import _ from "lodash";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            const allCategory = {_id: "0", label: "All"};
            action.payload.push(allCategory);
            return {...state, ..._.mapKeys(action.payload, "_id")};
        case SELECT_CATEGORY:
            return {...state, selected: action.payload};
        default:
            return state;
    }
};