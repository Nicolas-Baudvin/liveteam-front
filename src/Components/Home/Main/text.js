import { Button } from '../../StyledComponents';

const Text = ({ onClick }) => {

    return <div className="home-main__text">
        <h1>
            Partagez, Collaborez avec
            votre équipe.
            </h1>
        <p>
            LiveTeam est une application web de discussion instantanée
            sécurisée qui vous permet de rester en contact permanent
            avec votre équipe.
            </p>
        <Button onClick={onClick} >
            Essayer Gratuitement
            </Button>
    </div>
};

export default Text;