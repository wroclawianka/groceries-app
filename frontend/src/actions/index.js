import groceries from "../apis/groceries";
import {
    SIGN_IN,
    SIGN_OUT,
    FETCH_CATEGORIES,
    SELECT_CATEGORY,
    FETCH_ITEMS,
    CREATE_ITEM,
    SELECT_ITEM,
    EDIT_ITEM
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

export const fetchCategories = () => async dispatch => {
    const response = await groceries.get('/category');
    dispatch({type: FETCH_CATEGORIES, payload: response.data})
};

export const selectCategory = (category) => {
    return {
        type: SELECT_CATEGORY,
        payload: category
    }
};

export const fetchItems = () => async dispatch => {
    const response = await groceries.get('/item');
    dispatch({type: FETCH_ITEMS, payload: response.data})
};

export const createItem = (label) => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await groceries.post('/item', {label: label, userId});
    dispatch({type: CREATE_ITEM, payload: response.data});
};

export const selectItem = (item) => {
    return {
        type: SELECT_ITEM,
        payload: item
    }
};

export const editItem = (item) => async dispatch => {
    const [id, completed, cost] = [item._id, item.completed, item.cost];
    const response = await groceries.patch(`/item/${id}`, {completed, cost});
    dispatch({type: EDIT_ITEM, payload: response.data})
};