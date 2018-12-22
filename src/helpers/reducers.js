import { combineReducers } from "redux";
import {
    LOGIN,
    LOGOUT,
    SHOW_ERROR,
    HIDE_ERROR
} from "./actions";

function scatter(state = null, action)
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

function error(state = null, action)
{
    switch (action.type) {
    case SHOW_ERROR:
        return action.error;
    case HIDE_ERROR:
        return null;
    default:
        return state;
    }
}

const Reducer = combineReducers({
    scatter,
    error
});

export default Reducer;

