import {addMessageBodyActionType, addUserMessageActionType} from "../../redux/reducer/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        users: state.dialogsPage.usersDate,
        userMessages: state.dialogsPage.userMessage,
        messageBody: state.dialogsPage.messageBody
    };
};

let mapDispatchToProps = dispatch => {
    return {
        putMessage: message => dispatch( addMessageBodyActionType(message) ),
        sendMessage: message => dispatch( addUserMessageActionType(message) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
