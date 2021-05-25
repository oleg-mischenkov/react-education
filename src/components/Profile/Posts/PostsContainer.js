import React from "react";

import {
    addAreaTextActionType,
    addPostActionType,
} from "../../../redux/reducer/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";

const PostsContainer = ()=> {
    return <StoreContext.Consumer>
        {
            (store => {
                let commonState = store.getState();

                let addText = text => store.dispatch(
                    addPostActionType(text)
                );

                let addAreaText = text => store.dispatch(
                    addAreaTextActionType(text)
                );
                return (
                    <Posts
                        addText={addText}
                        addAreaText={addAreaText}
                        areaTextValue={commonState.profilePage.textAreaText}
                        posts={commonState.profilePage.userPosts}
                    />
                );
            })
        }
    </StoreContext.Consumer>
};

export default PostsContainer;