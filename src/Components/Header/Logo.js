const Logo = ({ handleClick }) => {
    return <div onClick={(e) => handleClick(e, "/")} className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="LiveTeam" width={140} height={90} />
        <h1><span>Live</span><span>Team</span></h1>
    </div>
};

export default Logo;