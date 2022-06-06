import './Header.scss';
import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">
            <img className="header__logo" src={BrainFlixLogo} alt="BrainFlix-logo"/>
            </Link>
            <input className="header__input" type="text" placeholder="Search" />
            <Link to='/videoUpload' className="header__button">
                <button className="header__button">upload</button>
            </Link>
            <img className="header__image" src={Mohan} alt="Mohan" />
        </header>
    )
}

export default Header;