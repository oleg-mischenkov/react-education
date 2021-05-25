import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props)=> {
    debugger;
    let putMessageChange = event => props.putMessage(event.target.value);
    let sendMessage = () => props.sendMessage(props.messageBody)

    return (
        <div className={css.dialogs}>
            <div>
                {
                    props.users.map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className='messages'>
                {
                    props.userMessages.map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
            <div className={css.addMsg}>
                <div>
                    <textarea
                        value={props.messageBody}
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
