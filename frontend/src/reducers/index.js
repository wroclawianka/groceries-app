import {combineReducers} from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer"
import itemsReducer from "./itemsReducer";

export default combineReducers({
    auth: authReducer,
    categories: categoryReducer,
    items: itemsReducer
});