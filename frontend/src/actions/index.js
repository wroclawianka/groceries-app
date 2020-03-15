import groceries from "../apis/groceries";
import {
    SIGN_IN,
    SIGN_OUT,
    CATEGORY_SELECTED,
    FETCH_ITEMS,
    CREATE_ITEM
} from "./types";

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
};

export const selectCategory = (category) => {
    return {
        type: CATEGORY_SELECTED,
        payload: category
    }
};

export const fetchItems  = () => async dispatch => {
    const response = await groceries.get('/item');
    dispatch({type: FETCH_ITEMS, payload: response.data})
};

export const createItem = (label) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await groceries.post('/item', {label : label, userId});
    dispatch({type: CREATE_ITEM, payload: response.data});
};