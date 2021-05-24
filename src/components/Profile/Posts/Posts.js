import React from "react";
import css from './Posts.module.css';
import Post from "./Post/Post";
import {
    addAreaTextActionType,
    addPostActionType,
} from "../../../redux/reducer/profile-reducer";

const Posts = (props)=> {
    let textAreaRef = React.createRef();

    let addText = () => props.state.dispatch(
        addPostActionType(textAreaRef.current.value)
    );

    let addAreaText = () => props.state.dispatch(
        addAreaTextActionType(textAreaRef.current.value)
    );

    debugger;
    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea
                    onChange={addAreaText}
                    content={css.text}
                    ref={textAreaRef}
                    value={props.state.getState().profilePage.textAreaText} />
            </div>
            <div>
                <button onClick={addText}>add</button>
            </div>
            {
                props.state.getState().profilePage.userPosts.map(
                    post => <Post msg={post.msg} likeCount={post.likes} />
                )
            }

        </div>
    );
}

export default Posts;