import css from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props)=> {
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
            <div>
                {
                    usersDate.map(
                        user => <Dialog name={user.name} id={user.id} />
                    )
                }
            </div>
            <div className='messages'>
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