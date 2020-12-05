import { useHistory } from 'react-router-dom';
import { Button } from '../../StyledComponents';

const Main = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/inscription");
    }
    return <div className="home-main">
        <div className="home-main__text">
            <h1>
                Partagez, Collaborez avec
                votre équipe.
            </h1>
            <p>
                LiveTeam est une application web de discussion instantanée
                sécurisée qui vous permet de rester en contact permanent
                avec votre équipe.
            </p>
            <Button onClick={handleClick}>
                Essayer Gratuitement
            </Button>
        </div>
        <img className="home-main__pic" src={`${process.env.PUBLIC_URL}/img/homepic.png`} alt="Communication" />
    </div>
};

export default Main;