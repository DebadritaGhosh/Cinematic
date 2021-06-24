//IMPORTING DEPENDENCIES
import { combineReducers } from "redux";
//IMPORTING REDUCERS
import movieReducer from "./moviesReducer";

const rootReducer = combineReducers({
    movie: movieReducer,
});

export default rootReducer;