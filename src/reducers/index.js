import {combineReducers} from "redux";

const categoriesReducer = () => {
    return [
        {id: 0, label: 'All'},
        {id: 1, label: 'Lunch'},
        {id: 2, label: 'Christmas Dinner'}
    ]
};

const selectedCategoryReducer = (selectedCategory = null, action) => {
    if (action.type === 'CATEGORY_SELECTED') {
        return action.payload
    }
    return selectedCategory;
};

export default combineReducers({
    categories: categoriesReducer,
    selectedCategory: selectedCategoryReducer
});