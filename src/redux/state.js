import {profileReducer} from "./reducer/profile-reducer";
import {dialogReducer} from "./reducer/dialog-reducer";

const ADD_SUBSCRIBER = 'ADD-SUBSCRIBER';

export let store = {
    _state: {
        profilePage: {
            userPosts: [
                {id: 1, msg: 'Hi, how are you?', likes: 2},
                {id: 2, msg: 'It is my first post!', likes: 12},
                {id: 3, msg: 'I am happy', likes: 9}
            ],
            textAreaText: 'Ok'
        },
        dialogsPage: {
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
        }
    },
    _renderApp() {
        debugger;
        console.log('it have not function')
    },
    subscriber(observerFunc) {
        this._renderApp = observerFunc
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._renderApp();
    }
};

window.store = store;

export const addSubscriber = observer => ({type: ADD_SUBSCRIBER, observerFunc: observer});