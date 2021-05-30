import css from "./User.module.css";

let User = props => {
    return (
        <div className={css.user} key={props.id}>
            <div>
                <div className={css.ava}>
                    <img src={props.avatar} />
                </div>
                <div className={css.button}>
                    <button onClick={
                        () => {
                            props.followed ? props.changeUnfollow(props.id) : props.changeFollow(props.id)
                        }
                    }>
                        {props.followed ? 'Follow' : 'Unfollow'}
                    </button>
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
                    <div>{props.location.country}</div>
                    <div>{props.location.city}</div>
                </div>
            </div>
        </div>
    )
};

export default User;