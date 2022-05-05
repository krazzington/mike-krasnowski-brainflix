import './Header.scss';

function Header() {
    return (
        <>
        <header class="header">
            <img src="../../assets/images/BrainFlix-logo.svg" alt="BrainFlix-logo"/>
            <input class="header__form" type="text" placeholder="Search"></input>
            <img src="../../assets/images/Mohan-muruge.jpg" alt="Mohan"/>
            <button class="header__button">Upload</button>
        </header>
        </>
    )
}

export default Header