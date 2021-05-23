import React from "react";
import css from './Posts.module.css';
import Post from "./Post/Post";
import {
    addAreaTextActionType,
    addPostActionType,
    getPostsActionType,
    getTextAreaActionType
} from "../../../redux/state";

const Posts = (props)=> {
    let textAreaRef = React.createRef();

    let addText = () => props.state.dispatch(
        addPostActionType(textAreaRef.current.value)
    );

    let addAreaText = () => props.state.dispatch(
        addAreaTextActionType(textAreaRef.current.value)
    );

    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea
                    onChange={addAreaText}
                    content={css.text}
                    ref={textAreaRef}
                    value={props.state.dispatch( getTextAreaActionType() )} />
            </div>
            <div>
                <button onClick={addText}>add</button>
            </div>
            {
                props.state.dispatch( getPostsActionType() ).map(
                    post => <Post msg={post.msg} likeCount={post.likes} />
                )
            }

        </div>
    );
}

export default Posts;