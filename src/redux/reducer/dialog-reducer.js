const ADD_USER_MESSAGE = 'ADD-USER-MESSAGE';
const ADD_MESSAGE_BODY = 'ADD-MESSAGE-BODY';

let initialState = {
    usersDate: [
        {id: 1, name: 'Jhon'},
        {id: 2, name: 'Shara'},
        {id: 3, name: 'Bob'},
        {id: 4, name: 'Dug'},
        {id: 5, name: 'Boris'},
        {id: 6, name: 'Cristina'},
        {id: 7, name: 'Kano'}
    ],
    userMessage: [
        {id: 1, msg: 'Hello'},
        {id: 2, msg: 'Hi, my name is Boris'},
        {id: 3, msg: 'Yo Yo Yo!'},
        {id: 4, msg: 'Yo Yo Yo!'}
    ],
    messageBody: ''

};

export const dialogReducer = (state = initialState, action) => {
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