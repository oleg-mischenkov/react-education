import css from './Posts.module.css';
import Post from "./Post/Post";

const Posts = ()=> {
    return (
        <div>
            <h4>My posts</h4>
            <div>
                <textarea content={css.text} />
            </div>
            <div>
                <button>add</button>
            </div>
            <Post msg='Hi, how are you?' />
            <Post msg='It is my first post!'/>
            <Post msg='I am happy/'/>
        </div>
    );
}

export default Posts;