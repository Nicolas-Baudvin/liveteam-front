import { useHistory } from "react-router-dom";

const Logo = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/");
    }
    return <div onClick={(e) => handleClick(e)} className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" width={140} height={90} />
    </div>
};

export default Logo