import {
    addMessageBodyActionType,
    addUserMessageActionType
} from "../../redux/reducer/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let currentState = store.getState();

                let users = currentState.dialogsPage.usersDate;
                let userMessages = currentState.dialogsPage.userMessage;
                let messageBody = currentState.dialogsPage.messageBody;

                let putMessage = message => store.dispatch(
                    addMessageBodyActionType(message)
                );

                let sendMessage = message => store.dispatch(
                    addUserMessageActionType(message)
                );
                return (
                    <Dialogs
                        putMessage={putMessage}
                        sendMessage={sendMessage}
                        users={users}
                        userMessages={userMessages}
                        messageBody={messageBody}
                    />
                )
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;
