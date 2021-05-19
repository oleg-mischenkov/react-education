import css from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props)=> {
    let path = "/dialogs/" + props.id;

    return (
        <div className={css.dialog}>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props)=> {
    return (
        <div className={css.message}>
            {props.text}
        </div>
    );
}

const Dialogs = ()=> {
    let usersDate = [
        {id: 1, name: 'Jhon'},
        {id: 2, name: 'Shara'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Dug'},
        {id: 5, name: 'Boris'},
        {id: 6, name: 'Cristina'},
    ];

    let userMessage = [
        {id: 1, msg: 'Hello'},
        {id: 2, msg: 'Hi, my name is Boris'},
        {id: 3, msg: 'Yo Yo Yo!'},
        {id: 4, msg: 'Yo Yo Yo!'}
    ];

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {
                    usersDate.map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className={css.messages}>
                {
                    userMessage.map(
                        message => <Message text={message.msg} />
                    )
                }
            </div>
        </div>
    );
}

export default Dialogs;