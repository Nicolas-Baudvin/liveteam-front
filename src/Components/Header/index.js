import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import { navItemsArray } from './utils';

import './style.scss'

const Header = () => {
    const [nav, setNav] = useState(navItemsArray);

    const history = useHistory();

    const handleHistoryChange = (path) => {
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
        setNav(newNav);
    };

    const handleClick = (e, path) => {
        if (!path)
        {
            history.push("/");
        }
        else
        {
            history.push(path);
            handleHistoryChange(path);
        }
    };

    return <div className="header">
        <Logo handleClick={handleClick} />
        <Nav handleClick={handleClick} nav={nav} />
    </div>
};

export default Header;