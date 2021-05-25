import React from "react";

import {
    addAreaTextActionType,
    addPostActionType,
} from "../../../redux/reducer/profile-reducer";
import Posts from "./Posts";

const PostsContainer = (props)=> {
    let commonState = props.state.getState();

    let addText = text => props.state.dispatch(
        addPostActionType(text)
    );

    let addAreaText = text => props.state.dispatch(
        addAreaTextActionType(text)
    );

    return <Posts
        addText={addText}
        addAreaText={addAreaText}
        areaTextValue={commonState.profilePage.textAreaText}
        posts={commonState.profilePage.userPosts}
    />;
};

export default PostsContainer;