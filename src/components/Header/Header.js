import css from './Header.module.css';

const Header = ()=> {
    return (
        <header className={css.header}>
            <img src="https://freightnex.co.in/wp-content/uploads/2019/02/cropped-Site-Logo.png" alt="logo"/>
        </header>
    );
};

export default Header;