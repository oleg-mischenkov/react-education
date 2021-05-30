const ADD_POST = 'ADD-POST';
const ADD_AREA_TEXT = 'ADD-AREA-TEXT';

let initialState = {
    userPosts: [
        {id: 1, msg: 'Hi, how are you?', likes: 2},
        {id: 2, msg: 'It is my first post!', likes: 12},
        {id: 3, msg: 'I am happy', likes: 9}
    ],
    textAreaText: 'Ok'

};

export let profileReducer = (state = initialState, action) => {

    let innerState = {...state};
    innerState.userPosts = [...state.userPosts];
    innerState.textAreaText = state.textAreaText;

    let addPost = (post, state) => {
        let postArr = state.userPosts;
        let msg = {
            id: postArr.length + 1,
            msg: post,
            likes: 0
        };
        postArr.push(msg);
        state.textAreaText = '';
        return state;
    };

    let addTextArea = text => innerState.textAreaText = text;

    let map = new Map([
        [ADD_POST, () => addPost(action.post, innerState)],
        [ADD_AREA_TEXT, () => addTextArea(action.text)]
    ]);

    if (map.has(action.type)) {
        map.get(action.type)();
    }
    return innerState;
};

export const addAreaTextActionType = areaText => ({type: ADD_AREA_TEXT, text: areaText});

export const addPostActionType = posText => ({type: ADD_POST, post: posText});