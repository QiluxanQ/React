import {sendMessagesCreator, updateNewMessagesTextCreater} from "../../../Redax/dialogsReduse";
import Dialogs from "../Dialog";

import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchProps = (dispatch) => {
    return {
        sendMessages: () => {
            dispatch(sendMessagesCreator())
        },
        updateNewMessagesTextCreater : (body) => {
            dispatch(updateNewMessagesTextCreater(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchProps)(Dialogs)

export default DialogsContainer;