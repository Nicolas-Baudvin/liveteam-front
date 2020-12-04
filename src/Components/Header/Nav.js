import { ListItem } from './StyledComponents';

const Nav = ({ onClick, nav, history }) => {
    return <ul className="header-nav">
        {
            nav.map((item, i) => (
                <ListItem
                    selected={item.selected}
                    connexion={item.title === "connexion"}
                    key={i}
                    className="header-nav__item" onClick={(e) => onClick(e, item.path)}
                >
                    {item.title}
                </ListItem>
            ))
        }
    </ul>
};

export default Nav;