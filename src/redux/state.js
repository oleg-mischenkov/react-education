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
        debugger;
        return new Map([
            ['GET-USERS', () => {return this._getUsers()}],
            ['GET-USER-MESSAGES', () => {return this._getUserMessages()}],
            ['GET-TEXT-AREA', () => {return this._getTextArea()}],
            ['GET-POSTS', () => {return this._getPosts()}],
            ['ADD-POST', () => this._addPost(action.post)],
            ['ADD-AREA-TEXT', () => this._addTextArea(action.text)],
            ['ADD-SUBSCRIBER', () => this._subscriber(action.observerFunc)]
        ]).get(action.type)();
    }
};

window.store = store;