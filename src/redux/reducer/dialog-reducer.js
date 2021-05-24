const ADD_USER_MESSAGE = 'ADD-USER-MESSAGE';
const ADD_MESSAGE_BODY = 'ADD-MESSAGE-BODY';

export const dialogReducer = (state, action) => {
    let addUserMessage = message => {
        let arrLen = state.userMessage.length;
        let msg = {
            id: arrLen + 1,
            msg: message
        };
        state.userMessage.push(msg);
        state.messageBody = '';
        return state;
    };

    let addMessageBody = (message) => state.messageBody = message;


    let map = new Map([
            [ADD_USER_MESSAGE, () => addUserMessage(action.message)],
            [ADD_MESSAGE_BODY, () => addMessageBody(action.message)]
        ]);

    if (map.has(action.type)) {
        map.get(action.type)();
    }
    return state;
}

export const addMessageBodyActionType = message => ({type: ADD_MESSAGE_BODY, message: message});

export const addUserMessageActionType = message => ({type: ADD_USER_MESSAGE, message: message});