import css from "./User.module.css";

let User = props => {
    let getAvatar = avatar => avatar != null ? avatar : 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png';
    let getButtonValue = btnValue =>  btnValue ? 'Follow' : 'Unfollow';
    let changeButton = () => props.followed ? props.changeUnfollow(props.id) : props.changeFollow(props.id);

    return (
        <div className={css.user} key={props.id}>
            <div>
                <div className={css.ava}>
                    <img src={getAvatar(props.avatar)} alt='user avatar' />
                </div>
                <div className={css.button}>
                    <button onClick={changeButton}>{getButtonValue( props.followed )}</button>
                </div>
            </div>
            <div className={css.content}>
                <div>
                    <h3 className={css.name}>
                        {props.name}
                    </h3>
                    <div>
                        <span>{props.status}</span>
                    </div>
                </div>
                <div className={css.location}>
                    <div>{'props.location.country'}</div>
                    <div>{'props.location.city'}</div>
                </div>
            </div>
        </div>
    )
};

export default User;