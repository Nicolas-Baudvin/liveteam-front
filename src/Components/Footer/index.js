import { FooterNav } from './StyledComponents';
import { iconNavItems, textNavItems } from './utils';
import "./style.scss"

const Footer = () => {
    return <div className="footer">
        <ul className="footer-nav">
            {
                iconNavItems.map((item, i) => <FooterNav key={i}>
                    <img className="footer-nav__item--icons" src={item.path} alt={item.title} />
                </FooterNav>)
            }
        </ul>
        <ul className="footer-nav">
            {
                textNavItems.map((item, i) => <FooterNav anchor key={i}>
                    <a className="footer-nav__item--text" href={item.path}> {item.title} </a>
                </FooterNav>)
            }
        </ul>
    </div>
};

export default Footer;