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
    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <Dialog name='Jhon' id='1' />
                <Dialog name='Shara' id='2' />
                <Dialog name='Bob' id='3' />
                <Dialog name='Dug' id='4' />
                <Dialog name='Boris' id='5' />
                <Dialog name='Cristina' id='6' />
            </div>
            <div className={css.messages}>
                <Message text='Hello' />
                <Message text='Hi, my name is Boris' />
                <Message text='Yo Yo Yo!' />
            </div>
        </div>
    );
}

export default Dialogs;