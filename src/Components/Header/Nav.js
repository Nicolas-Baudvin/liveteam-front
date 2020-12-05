import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListItem } from './StyledComponents';
import { navItemsArray } from './utils';

const Nav = () => {
    const [nav, setNav] = useState(navItemsArray);

    const history = useHistory();

    const handleClick = (e, path) => {
        if (!path)
        {
            history.push("/");
        }
        else
        {
            history.push(path);
            const newNav = nav.map((item) => {
                if (item.path === path)
                {
                    item.selected = true;
                }
                else
                {
                    item.selected = false;
                }
                return item;
            });
            setNav([...newNav]);
        }
    };
    return <ul className="header-nav">
        {
            nav.map((item, i) => (
                <ListItem
                    selected={item.selected}
                    connexion={item.title === "connexion"}
                    key={i}
                    className="header-nav__item" onClick={(e) => handleClick(e, item.path)}
                >
                    {item.title}
                </ListItem>
            ))
        }
    </ul>
};

export default Nav;