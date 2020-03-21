import {FETCH_CATEGORIES, SELECT_CATEGORY} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
    "ALL": {_id: "ALL", label: "All", selected: true}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state, ..._.mapKeys(action.payload, "_id")};
        case SELECT_CATEGORY:
            const category = {...state[action.payload], selected: true};
            const remainingCategories = _.omit(state, action.payload);
            Object.keys(remainingCategories).forEach((key) => {
                remainingCategories[key].selected = false;
            });
            return {...remainingCategories, [category._id]: category};
        default:
            return state;
    }
};