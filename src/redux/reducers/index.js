import { combineReducers } from "redux";
import listReducer from "./listReducer";

const allReducers = combineReducers({
    listReducer: listReducer
})

export default allReducers;