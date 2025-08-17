import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduse";
import dialogsReduse from "./dialogsReduse";
import usersRedux from "./usersRedux";


let reducer = combineReducers({
    profilePage:profileReduser,
    messagesPage:dialogsReduse,
    usersPage:usersRedux
})


let store = createStore(reducer);

export default store;