import React from "react";
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then( resp => {
                this.props.sendUsers(resp.data.items)
            } );
    }

    render() {
        return (
            <div>
                {this.props.users.map( user => <User
                    id={user.id}
                    avatar={user.photos.small}
                    name={user.name}
                    followed={user.followed}
                    status={user.status}
                    changeFollow={ id => this.props.follow(id) }
                    changeUnfollow={ id => this.props.unfollow(id) }
                    /> )}
            </div>
        );
    }
}

export default Users;