import {renderApp} from "../render";

let state = {
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
};

export let addTextAreaText = (text) => {
    state.profilePage.textAreaText = text;
};

export let addPost = (post) => {
    let postArr = state.profilePage.userPosts;
    let msg = {
        id: postArr.length + 1,
        msg: post,
        likes: 0
    };
    postArr.push(msg);
    renderApp(state)
};

export default state;