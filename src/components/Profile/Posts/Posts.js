import React from "react";
import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props)=> {
    let textAreaRef = React.createRef();

    let addText = () => {
        alert(textAreaRef.current.value);
    };

    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea content={css.text} ref={textAreaRef} />
            </div>
            <div>
                <button onClick={addText}>add</button>
            </div>
            {
                props.date.map(
                    post => <Post msg={post.msg} likeCount={post.likes} />
                )
            }

        </div>
    );
}

export default Posts;