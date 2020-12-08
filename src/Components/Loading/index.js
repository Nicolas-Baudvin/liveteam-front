import './style.scss';

const Loading = () => {
    return <div className="loading">
        <img className="loading-logo" src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo" />
        <img className="loading-text" src={`${process.env.PUBLIC_URL}/img/loading.svg`} alt="Chargement en cours ..." />
    </div>
};

export default Loading;