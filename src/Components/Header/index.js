import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from './Logo';
import Nav from './Nav';
import './style.scss'
import { navItemsArray } from './utils';

const Header = () => {
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
                    console.log(item.path, path);
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
    return <div className="header">
        <Logo onClick={handleClick} />
        <Nav history={history} nav={nav} onClick={handleClick} />
    </div>
};

export default Header;