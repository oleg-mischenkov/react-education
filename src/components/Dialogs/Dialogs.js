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
                <Dialog name={usersDate[0].name} id={usersDate[0].id} />
                <Dialog name={usersDate[1].name} id={usersDate[1].id} />
                <Dialog name={usersDate[2].name} id={usersDate[2].id} />
                <Dialog name={usersDate[3].name} id={usersDate[3].id} />
                <Dialog name={usersDate[4].name} id={usersDate[4].id} />
                <Dialog name={usersDate[5].name} id={usersDate[5].id} />
            </div>
            <div className={css.messages}>
                <Message text={userMessage[0].msg} />
                <Message text={userMessage[1].msg} />
                <Message text={userMessage[2].msg} />
                <Message text={userMessage[3].msg} />
            </div>
        </div>
    );
}

export default Dialogs;