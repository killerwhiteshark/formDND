import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import newFormReducer from "./newForm";

import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    newForm: newFormReducer
});

export default allReducer;