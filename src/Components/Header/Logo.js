const Logo = ({ onClick }) => {
    return <div onClick={(e) => onClick(e, null)} className="header-logo">
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" width={140} height={90} />
    </div>
};

export default Logo