import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props)=> {
    let postData = [
        {id: 1, msg: 'Hi, how are you?', likes: 7},
        {id: 2, msg: 'It is my first post!', likes: 12},
        {id: 3, msg: 'I am happy', likes: 8},
    ];

    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea content={css.text} />
            </div>
            <div>
                <button>add</button>
            </div>
            <Post msg={postData[0].msg} likeCount={postData[0].likes} />
            <Post msg={postData[1].msg} likeCount={postData[1].likes} />
            <Post msg={postData[2].msg} likeCount={postData[2].likes} />
        </div>
    );
}

export default Posts;