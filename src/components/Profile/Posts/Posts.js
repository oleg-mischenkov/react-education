import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props)=> {
    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea content={css.text} />
            </div>
            <div>
                <button>add</button>
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