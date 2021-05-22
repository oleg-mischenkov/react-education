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
    subscriber(observerFunc) {
        this._renderApp = observerFunc
    },
    addPost(post) {
        let postArr = this._state.profilePage.userPosts;
        let msg = {
            id: postArr.length + 1,
            msg: post,
            likes: 0
        };
        postArr.push(msg);
        this.addTextArea('');
        this._renderApp();
    },
    getPosts() {
        return this._state.profilePage.userPosts
    },
    addTextArea(text) {
        this._state.profilePage.textAreaText = text;
        this._renderApp();
    },
    getTextArea() {
        return this._state.profilePage.textAreaText
    }
};

window.store = store;