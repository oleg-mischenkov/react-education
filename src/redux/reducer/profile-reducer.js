const ADD_POST = 'ADD-POST';
const ADD_AREA_TEXT = 'ADD-AREA-TEXT';

export let profileReducer = (state, action) => {
    debugger;
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

    let addTextArea = text => state.textAreaText = text;

    let map = new Map([
            [ADD_POST, () => addPost(action.post, state)],
            [ADD_AREA_TEXT, () => addTextArea(action.text)]
        ]);

    if (map.has(action.type)) {
        map.get(action.type)();
    }
    debugger;
    return state;
};

export const addAreaTextActionType = areaText => ({type: ADD_AREA_TEXT, text: areaText});

export const addPostActionType = posText => ({type: ADD_POST, post: posText});