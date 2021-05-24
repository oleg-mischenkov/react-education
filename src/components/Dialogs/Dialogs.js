import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {
    addMessageBodyActionType, addUserMessageActionType,
    getMessageBodyActionType,
    getUserActionType,
    getUserMsgActionType
} from "../../redux/state";

const Dialogs = (props)=> {
    let store = props.state;
    let getMessage = () => store.dispatch( getMessageBodyActionType() );
    let putMessageChange = event => store.dispatch(
            addMessageBodyActionType(event.target.value)
        );
    let sendMessage = () => {
        let message = store.dispatch( getMessageBodyActionType() );
        store.dispatch( addUserMessageActionType(message) )
    }

    return (
        <div className={css.dialogs}>
            <div>
                {
                    store.dispatch( getUserActionType() ).map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className='messages'>
                {
                    props.state.dispatch( getUserMsgActionType() ).map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
            <div className={css.addMsg}>
                <div>
                    <textarea
                        value={getMessage()}
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
