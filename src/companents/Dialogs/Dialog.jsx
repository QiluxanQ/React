import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./Messages/Message";
import React from "react"

const Dialogs = (props) => {

    let state = props.messagesPage

    let onClickMessages = () => {
        props.sendMessages()
    }

    let onNewMessagesChencge = (e) => {
        let body = e.target.value
        props.updateNewMessagesTextCreater(body)

    }


    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Messages messages={message.message} key={message.id}/>)
    let newMessageBody = state.newMessagesBody


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    {dialogsElements}

                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea value={newMessageBody} onChange={onNewMessagesChencge}></textarea>
            <div>
                <button onClick={onClickMessages}>add</button>
            </div>
        </div>

    )

}

export default Dialogs;