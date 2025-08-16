import s from './../Dialogs.module.css'

const Messages = (props) => {
    return (
        <div>
        <div className={s.dialog}>{props.messages}</div>

        </div>
    )
}
export default Messages;