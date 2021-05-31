import {connect} from "react-redux";
import Users from './Users'
import {
    followActionType, sendCurrentPageActionType,
    sendTotalUserCountActionType,
    sendUsersActionType,
    unfollowActionType
} from "../../redux/reducer/users-reducer";

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
        sendCurrentPage: page => dispatch( sendCurrentPageActionType(page) )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);