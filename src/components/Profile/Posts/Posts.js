import React from "react";
import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props)=> {
    let textAreaRef = React.createRef();

    let addText = () => {
        let text = textAreaRef.current.value;
        props.state.dispatch({type: 'ADD-POST', post: text});
    };

    let addAreaText = () => {
        props.state.dispatch({type: 'ADD-AREA-TEXT', text: textAreaRef.current.value})
    };

    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea
                    onChange={addAreaText}
                    content={css.text}
                    ref={textAreaRef}
                    value={props.state.dispatch({type: 'GET-TEXT-AREA'})} />
            </div>
            <div>
                <button onClick={addText}>add</button>
            </div>
            {
                props.state.dispatch({type: 'GET-POSTS'}).map(
                    post => <Post msg={post.msg} likeCount={post.likes} />
                )
            }

        </div>
    );
}

export default Posts;