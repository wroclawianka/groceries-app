import {
    SIGN_IN,
    SIGN_OUT,
    CATEGORY_SELECTED,
    ADD_ITEM
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

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
};