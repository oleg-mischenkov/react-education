import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    addMessageBodyActionType,
    addUserMessageActionType
} from "../../redux/reducer/dialog-reducer";

const Dialogs = (props)=> {
    debugger;
    let store = props.state.getState();
    let putMessageChange = event => props.state.dispatch(
            addMessageBodyActionType(event.target.value)
        );
    let sendMessage = () => {
        let message = store.dialogsPage.messageBody;
        props.state.dispatch( addUserMessageActionType(message) )
    }

    return (
        <div className={css.dialogs}>
            <div>
                {
                    store.dialogsPage.usersDate.map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className='messages'>
                {
                    store.dialogsPage.userMessage.map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
            <div className={css.addMsg}>
                <div>
                    <textarea
                        value={store.dialogsPage.messageBody}
                        onChange={putMessageChange}
                    />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
