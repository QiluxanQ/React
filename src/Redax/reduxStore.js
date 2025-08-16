import {combineReducers, createStore} from "redux";
import profileReduser from "./profileReduse";
import dialogsReduse from "./dialogsReduse";


let reducer = combineReducers({
    profilePage:profileReduser,
    messagesPage:dialogsReduse
})


let store = createStore(reducer);

export default store;