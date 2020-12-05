import Logo from './Logo';
import Nav from './Nav';
import './style.scss'

const Header = () => {
    return <div className="header">
        <Logo />
        <Nav />
    </div>
};

export default Header;