import preloader from '../../../assets/loadergif.gif';
import css from './Preloader.module.css';

let Preloader = (props) => {
    return (
        <div className={css.preloader}>
            <img src={preloader} alt="Loading"/>
        </div>
    );
}

export default Preloader;