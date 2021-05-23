import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props)=> {
    debugger;
    return (
        <div className={css.dialogs}>
            <div>
                {
                    props.state.dispatch({type: 'GET-USERS'}).map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className='messages'>
                {
                    props.state.dispatch({type: 'GET-USER-MESSAGES'}).map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
        </div>
    );
}

export default Dialogs;