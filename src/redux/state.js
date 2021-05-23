const GET_USERS = 'GET-USERS';
const GET_USER_MESSAGES = 'GET-USER-MESSAGES';
const GET_TEXT_AREA = 'GET-TEXT-AREA';
const GET_POSTS = 'GET-POSTS';
const ADD_POST = 'ADD-POST';
const ADD_AREA_TEXT = 'ADD-AREA-TEXT';
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
            ]
        }
    },
    _renderApp() {
        console.log('it have not function')
    },
    _subscriber(observerFunc) {
        this._renderApp = observerFunc
    },
    _getUsers() {
        return this._state.dialogsPage.usersDate;
    },
    _getUserMessages() {
        return this._state.dialogsPage.userMessage;
    },
    _addPost(post) {
        let postArr = this._state.profilePage.userPosts;
        let msg = {
            id: postArr.length + 1,
            msg: post,
            likes: 0
        };
        postArr.push(msg);
        this._addTextArea('');
        this._renderApp();
    },
    _getPosts() {
        return this._state.profilePage.userPosts
    },
    _addTextArea(text) {
        this._state.profilePage.textAreaText = text;
        this._renderApp();
    },
    _getTextArea() {
        return this._state.profilePage.textAreaText
    },
    dispatch(action) {
        return new Map([
            [GET_USERS, () => {return this._getUsers()}],
            [GET_USER_MESSAGES, () => {return this._getUserMessages()}],
            [GET_TEXT_AREA, () => {return this._getTextArea()}],
            [GET_POSTS, () => {return this._getPosts()}],
            [ADD_POST, () => this._addPost(action.post)],
            [ADD_AREA_TEXT, () => this._addTextArea(action.text)],
            [ADD_SUBSCRIBER, () => this._subscriber(action.observerFunc)]
        ]).get(action.type)();
    }
};

window.store = store;

export const getUserActionType = () => ({type: GET_USERS});

export const getUserMsgActionType = () => ({type: GET_USER_MESSAGES});

export const addAreaTextActionType = areaText => ({type: ADD_AREA_TEXT, text: areaText});

export const addPostActionType = posText => ({type: ADD_POST, post: posText});

export const getTextAreaActionType = () => ({type: GET_TEXT_AREA});

export const getPostsActionType = () => ({type: GET_POSTS});