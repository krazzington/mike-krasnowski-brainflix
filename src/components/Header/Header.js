import './Header.scss';
import BrainFlixLogo from '../../assets/images/BrainFlix-logo.svg';
import Mohan from '../../assets/images/Mohan-muruge.jpg';


function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={BrainFlixLogo} alt="BrainFlix-logo"/>
            <input className="header__input" type="text" placeholder="Search" />
            <button className="header__button">Upload</button>
            <img className="header__image" src={Mohan} alt="Mohan" />
        </header>
    )
}

export default Header