import groceries from "../apis/groceries";
import {
    SIGN_IN,
    SIGN_OUT,
    CATEGORY_SELECTED,
    ADD_ITEM, FETCH_ITEMS
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
    const response = await groceries.get('/get/item');
    dispatch({type: FETCH_ITEMS, payload: response.data})
};

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};