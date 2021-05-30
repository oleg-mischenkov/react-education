import Users from "./Users";
import {connect} from "react-redux";
import {follow, sendUsers, unfollow} from "../../redux/reducer/users-reducer";

let mapStateToProps = state => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch( follow(userId) ),
        unfollow: userId => dispatch( unfollow(userId) ),
        sendUsers: newUsers => dispatch( sendUsers(newUsers) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);