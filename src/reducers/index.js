import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import formReducer from "./form";

import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    newForm: formReducer
});

export default allReducer;