import React from "react";
import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props)=> {
    let textAreaRef = React.createRef();

    let addText = () => props.addText(textAreaRef.current.value);

    let addAreaText = () => props.addAreaText(textAreaRef.current.value);

    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea
                    onChange={addAreaText}
                    content={css.text}
                    ref={textAreaRef}
                    value={props.areaTextValue} />
            </div>
            <div>
                <button onClick={addText}>add</button>
            </div>
            {
                props.posts.map(
                    post => <Post msg={post.msg} likeCount={post.likes} />
                )
            }

        </div>
    );
}

export default Posts;