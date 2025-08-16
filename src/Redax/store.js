import profileReduser from "./profileReduse";
import dialogsReduse from "./dialogsReduse";

let store = {
    _states: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello', likesCount: 12},
                {id: 2, message: 'My first', likesCount: 2},
                {id: 3, message: 'World', likesCount: 3},
            ],
            newPostText: 'Hello, World!'

        },
        messagesPage: {
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Wrld'},
                {id: 3, message: 'World'},
            ],
            dialogs: [
                {id: 1, name: 'ila'},
                {id: 2, name: 'World'},
                {id: 3, name: 'World'},
            ],
            newMessagesBody: ''
        },
    },


    getState() {
        return this._states
    },
    renderElementsThree() {
        console.log('State changed!');
    },

    subscribe(observer) {
        this.renderElementsThree = observer
    },

    dispatch(action) {
        this._states.profilePage = profileReduser(this._states.profilePage,action);
            this._states.messagesPage = dialogsReduse(this._states.messagesPage,action);
        this.renderElementsThree(this._states)

    },
}





export default store;