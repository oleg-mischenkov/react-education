import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props)=> {
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
                    props.messages.map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
        </div>
    );
}

export default Dialogs;