import User from "./User/User";
import * as axios from "axios";

let Users = (props) => {

    if (props.users.length === 0) {
        /*props.sendUsers(
            [
                {
                    id: 1, follow: true, avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', fullName: 'Oleg', status: 'I\'m happy!!!', location: {
                        city: 'Kharkov',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 2, follow: false, avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', fullName: 'Nikolay', status: 'I\'m a boss :)', location: {
                        city: 'Kharkov',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 3, follow: true, avatarUrl: 'https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png', fullName: 'Jhon', status: 'I\'m from USA', location: {
                        city: 'NY',
                        country: 'United State'
                    }
                }
            ]
        );*/
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( resp => {
                debugger;
                props.sendUsers(resp.data.items)
            } );
    }

    return (
        <div>
            {props.users.map( user => <User
                id={user.id}
                avatar={user.photos.small}
                name={user.name}
                followed={user.followed}
                status={user.status}
                /*location={user.location}*/
                changeFollow={ id => props.follow(id) }
                changeUnfollow={ id => props.unfollow(id) }
            /> )}
        </div>
    )
}

export default Users;