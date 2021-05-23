import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {getUserActionType, getUserMsgActionType} from "../../redux/state";

const Dialogs = (props)=> {
    return (
        <div className={css.dialogs}>
            <div>
                {
                    props.state.dispatch( getUserActionType() ).map(
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
        </div>
    );
}

export default Dialogs;
