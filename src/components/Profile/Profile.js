import css from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props)=> {
    return (
        <div>
            <div>
                <img className={css.headImg} src="https://nissi-beach.com/wp-content/uploads/2016/11/NissiBeach-21-1620x600.jpg" alt='main image' />
            </div>
            <PostsContainer state={props.state}/>
        </div>
    );
};

export default Profile;