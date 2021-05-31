const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SEND_USERS = 'SEND-USERS';

let initialState = {
    users: []
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
            users: [...state.users, ...newUsers]
        }
    };

    let map = new Map([
        [FOLLOW, () => changeToFollow(action.userId) ],
        [UNFOLLOW, () => changeToUnfollow(action.userId) ],
        [SEND_USERS, () => changeUsers(action.users) ]
    ]);

    if (map.has(action.type)) {
        state = map.get(action.type)();
    }

    return state;
}

export const follow = userId => ({type: FOLLOW, userId: userId});

export const unfollow = userId => ({type: UNFOLLOW, userId: userId});

export const sendUsers = users => ({type: SEND_USERS, users: users});
