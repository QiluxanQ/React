const updateNewMessageText = 'updateNewMessageText';
const sendMessages = 'sendMessages';

let intialState =  {
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
    let stateCopy = {
        ...state,
        // messages:[...state.messages]
    };



    switch (action.type) {
        case "updateNewMessageText": {
            stateCopy.newMessagesBody = action.body;
            return stateCopy;
        }
        case "sendMessages": {
            let body = state.newMessagesBody;
            stateCopy.newMessagesBody = ''
            stateCopy.messages.push({id: 4, message: body})
            return stateCopy;
        }
        default:
            return state;
    }
    return state;
}
export const sendMessagesCreator = () => {
    return{
        type: sendMessages,
    }
}
export const updateNewMessagesTextCreater = (body) => {
    return{
        type: updateNewMessageText,
        body:body
    }
}
export default dialogsReduse;