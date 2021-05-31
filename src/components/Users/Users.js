import React from "react";
import css from './Users.module.css'
import User from "./User/User";
import * as axios from "axios";

class Users extends React.Component {

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
        let finPoint = Math.ceil( this.props.totalUserCount / this.props.usersOnPage );
        let midlPoint = this.props.maxPaginationButtonOnPage / 2;

        let preStart = this.props.currentPage - midlPoint;
        let startPoint = preStart < 1 ? 1 : preStart;

        let preEnd = this.props.currentPage + midlPoint;
        let endPoint = preEnd > finPoint ? finPoint : preEnd;

        let pages = [];
        for (let i = startPoint; i <= endPoint; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div className={css.paginationBlock}>
                    {pages.map( page => {
                        return <span
                            className={ this.props.currentPage === page ? css.selectedPage: ''}
                            onClick={(e) => this.changePage(page) }>
                            {page}
                        </span>
                    } )}
                </div>
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