const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SEND_USERS = 'SEND-USERS';
const SEND_TOTAL_USER_COUNT = 'SEND-TOTAL-USER-COUNT';
const SEND_CURRENT_PAGE = 'SEND_CURRENT_PAGE';

let initialState = {
    users: [],
    totalUserCount: 0,
    usersOnPage: 5,
    currentPage: 1,
    maxPaginationButtonOnPage: 10
};

export const usersReducer = (state = initialState, action) => {
    let changeFollowState = (flag, userId) => {
        return state.users.map( item => {
            if (item.id === userId) {
                return {...item, followed: flag};
            }
            return item;
        } )
    };

    let changeToFollow = userId => {
        return {
            ...state,
            users: changeFollowState(true, userId)
        }
    };

    let changeToUnfollow = userId => {
        return {
            ...state,
            users: changeFollowState(false, userId)
        }
    };

    let changeUsers = newUsers => {
        return {
            ...state,
            users: [...newUsers]
        }
    };

    let changeTotalUserCount = count => {
        return {
            ...state,
            totalUserCount: count
        };
    }

    let changeCurrentPage = currentPage => {
        return {
            ...state,
            currentPage: currentPage
        };
    }

    let map = new Map([
        [FOLLOW, () => changeToFollow(action.userId) ],
        [UNFOLLOW, () => changeToUnfollow(action.userId) ],
        [SEND_USERS, () => changeUsers(action.users) ],
        [SEND_TOTAL_USER_COUNT, () => changeTotalUserCount(action.count)],
        [SEND_CURRENT_PAGE, () => changeCurrentPage(action.currentPage)]
    ]);

    if (map.has(action.type)) {
        state = map.get(action.type)();
    }

    return state;
}

export const followActionType = userId => ({type: FOLLOW, userId});

export const unfollowActionType = userId => ({type: UNFOLLOW, userId});

export const sendUsersActionType = users => ({type: SEND_USERS, users});

export const sendTotalUserCountActionType = count => ({type: SEND_TOTAL_USER_COUNT, count});

export const sendCurrentPageActionType = currentPage => ({type: SEND_CURRENT_PAGE, currentPage});
