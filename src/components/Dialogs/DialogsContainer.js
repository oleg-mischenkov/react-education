import {
    addMessageBodyActionType,
    addUserMessageActionType
} from "../../redux/reducer/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props)=> {
    let currentState = props.state.getState();
    let state = props.state;

    let users = currentState.dialogsPage.usersDate;
    let userMessages = currentState.dialogsPage.userMessage;
    let messageBody = currentState.dialogsPage.messageBody;

    let putMessage = message => state.dispatch(
        addMessageBodyActionType(message)
    );

    let sendMessage = message => state.dispatch(
        addUserMessageActionType(message)
    );

    return <Dialogs
        putMessage={putMessage}
        sendMessage={sendMessage}
        users={users}
        userMessages={userMessages}
        messageBody={messageBody}
    />;
};

export default DialogsContainer;
