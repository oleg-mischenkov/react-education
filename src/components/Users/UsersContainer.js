import {connect} from "react-redux";
import Users from './Users'
import {
    follow, sendCurrentPage, sendPreloader, sendTotalUserCount, sendUsers, unfollow
} from "../../redux/reducer/users-reducer";
import React from "react";
import * as axios from "axios";

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.sendPreloader(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${this.props.currentPage}`)
            .then( resp => {
                this.props.sendUsers(resp.data.items);
                this.props.sendTotalUserCount(resp.data.totalCount);
                this.props.sendPreloader(false);
            } );
    }

    changePage = page => {
        this.props.sendPreloader(true);
        this.props.sendCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersOnPage}&page=${page}`)
            .then( resp => {
                this.props.sendUsers(resp.data.items);
                this.props.sendPreloader(false);
            } );
    }

    render() {
        return <Users
            users={this.props.users}
            totalUserCount={this.props.totalUserCount}
            usersOnPage={this.props.usersOnPage}
            maxPaginationButtonOnPage={this.props.maxPaginationButtonOnPage}
            currentPage={this.props.currentPage}
            preloader={this.props.preloader}
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
        maxPaginationButtonOnPage: state.usersPage.maxPaginationButtonOnPage,
        preloader: state.usersPage.preloader
    }
};

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        sendUsers,
        sendTotalUserCount,
        sendCurrentPage,
        sendPreloader
    }
    )(UsersComponent);