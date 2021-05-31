import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = ()=> {
    return (
        <nav className={css.nav}>
            <div>
                <NavLink to='/profile' activeClassName={css.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' activeClassName={css.activeLink}>Dialogs</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={css.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={css.activeLink}>Users</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;