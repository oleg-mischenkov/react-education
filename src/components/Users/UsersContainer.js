import {connect} from "react-redux";
import Users from './Users'
import {
    followActionType,
    sendCurrentPageActionType,
    sendTotalUserCountActionType,
    sendUsersActionType,
    unfollowActionType
} from "../../redux/reducer/users-reducer";
import React from "react";
import * as axios from "axios";

class UsersComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`)
            .then( resp => {
                this.props.sendUsers(resp.data.items);
                this.props.sendTotalUserCount(resp.data.totalCount);
            } );
    }

    changePage = page => {
        this.props.sendCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${page}`)
            .then( resp => {
                this.props.sendUsers(resp.data.items);
            } );
    }

    render() {
        return <Users
            users={this.props.users}
            totalUserCount={this.props.totalUserCount}
            usersOnPage={this.props.usersOnPage}
            maxPaginationButtonOnPage={this.props.maxPaginationButtonOnPage}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            changePage={this.changePage}
        />
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        totalUserCount: state.usersPage.totalUserCount,
        usersOnPage: state.usersPage.usersOnPage,
        currentPage: state.usersPage.currentPage,
        maxPaginationButtonOnPage: state.usersPage.maxPaginationButtonOnPage
    }
};

let mapDispatchToProps = dispatch => {
    return {
        follow: userId => dispatch( followActionType(userId) ),
        unfollow: userId => dispatch( unfollowActionType(userId) ),
        sendUsers: newUsers => dispatch( sendUsersActionType(newUsers) ),
        sendTotalUserCount: totalUserCount => dispatch( sendTotalUserCountActionType(totalUserCount) ),
        sendCurrentPage: page => dispatch( sendCurrentPageActionType(page) ),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);