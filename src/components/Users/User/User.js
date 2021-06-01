import css from './User.module.css';
import avatarUrl from './../../../assets/avatar.png'

let User = props => {
    let getAvatar = avatar => avatar != null ? avatar : avatarUrl;
    let getButtonValue = btnValue =>  btnValue ? 'Follow' : 'Unfollow';
    let changeButton = () => props.followed ? props.changeUnfollow(props.id) : props.changeFollow(props.id);

    debugger;

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