import css from './Dialog.midule.css'
import {NavLink} from "react-router-dom";

const Dialog = (props)=> {
    let path = "/dialogs/" + props.id;

    return (
        <div className='dialog'>
            <NavLink to={path} activeClassName={css.active}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;