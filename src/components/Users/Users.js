import React from "react";
import css from './Users.module.css'
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";

let Users = (props) => {

    let finPoint = Math.ceil( props.totalUserCount / props.usersOnPage );
    let midlPoint = props.maxPaginationButtonOnPage / 2;

    let preStart = props.currentPage - midlPoint;
    let startPoint = preStart < 1 ? 1 : preStart;

    let preEnd = props.currentPage + midlPoint;
    let endPoint = preEnd > finPoint ? finPoint : preEnd;

    let pages = [];
    for (let i = startPoint; i <= endPoint; i++) {
        pages.push(i);
    }

    return (
        <div>
            {props.preloader ? <Preloader /> : null}
            <div className={css.paginationBlock}>
                {pages.map( page => {
                    return <span key={page}
                        className={ props.currentPage === page ? css.selectedPage: ''}
                        onClick={() => props.changePage(page) }>
                            {page}
                        </span>
                } )}
            </div>
            {props.users.map( user => <User
                id={user.id}
                avatar={user.photos.small}
                name={user.name}
                followed={user.followed}
                status={user.status}
                changeFollow={ id => props.follow(id) }
                changeUnfollow={ id => props.unfollow(id) }
            /> )}
        </div>
    );
}

export default Users;