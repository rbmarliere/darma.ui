import { combineReducers } from "redux";
import {
    LOGIN,
    LOGOUT
} from "./actions";

function scatter(state = [], action)
{
    switch (action.type) {
    case LOGIN:
        return action.scatter;
    case LOGOUT:
        return null;
    default:
        return state;
    }
}

const Reducer = combineReducers({
    scatter
});

export default Reducer;

