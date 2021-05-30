import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";
import {usersReducer} from "./reducer/users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;