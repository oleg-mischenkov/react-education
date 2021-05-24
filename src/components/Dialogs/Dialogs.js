import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    addMessageBodyActionType,
    addUserMessageActionType
} from "../../redux/reducer/dialog-reducer";

const Dialogs = (props)=> {
    let store = props.state;
    let putMessageChange = event => store.dispatch(
            addMessageBodyActionType(event.target.value)
        );
    let sendMessage = () => {
        let message = store.getState().dialogsPage.messageBody;
        store.dispatch( addUserMessageActionType(message) )
    }

    return (
        <div className={css.dialogs}>
            <div>
                {
                    store.getState().dialogsPage.usersDate.map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className='messages'>
                {
                    store.getState().dialogsPage.userMessage.map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
            <div className={css.addMsg}>
                <div>
                    <textarea
                        value={store.getState().dialogsPage.messageBody}
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
