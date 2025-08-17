const updateNewMessageText = 'updateNewMessageText';
const sendMessages = 'sendMessages';

let intialState = {
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
}

export const dialogsReduse = (state = intialState, action) => {

    switch (action.type) {
        case "updateNewMessageText":
            return {
                ...state,
                newMessagesBody: action.body
            };
        case "sendMessages":
            let body = state.newMessagesBody;
            return {
                ...state,
                newMessagesBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };

        default:
            return state;
    }
}
export const sendMessagesCreator = () => {
    return {
        type: sendMessages,
    }
}
export const updateNewMessagesTextCreater = (body) => {
    return {
        type: updateNewMessageText,
        body: body
    }
}
export default dialogsReduse;