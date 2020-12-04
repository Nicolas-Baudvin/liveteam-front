import { ListIconItem } from './StyledComponents';
import { iconNavItems } from './utils';
import "./style.scss"

const Footer = () => {
    return <div className="footer">
        <ul className="footer-nav">
            {
                iconNavItems.map((item, i) => <ListIconItem key={i}>
                    <img className="footer-nav__item--icons" src={item.path} alt={item.title} />
                </ListIconItem>)
            }
        </ul>
    </div>
};

export default Footer;