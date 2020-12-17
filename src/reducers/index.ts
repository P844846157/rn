
import { combineReducers } from "redux";
import projectReducer from "./projectReducer";


export interface RootReducerProps {
    projectReducer: any
}

const rootReducer = combineReducers({
    projectReducer: projectReducer,
});

export default rootReducer;