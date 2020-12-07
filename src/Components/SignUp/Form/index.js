import Input from './input';
import { useState } from 'react';
import { Button } from '../../StyledComponents';
import { useHistory } from 'react-router-dom';

const initialstate = {
    username: "",
    password: "",
    email: "",
    confPass: "",
};
const inputsArray = [
    { type: "email", label: "Email", tooltip: "L'email doit être valide et contenir 100 caractères maximum", code: "email" },
    { type: "text", label: "Pseudonyme", tooltip: "Le pseudonyme doit contenir entre 6 et 20 caractères", code: "username" },
    { type: "password", label: "Mot de passe", tooltip: "Le mot de passe doit faire entre 8 et 30 caractères", code: "password" },
    { type: "password", label: "Confirmation mot de passe", tooltip: "Mot de passe identique au champs mot de passe du dessus", code: "confPass" }
]

const Form = () => {
    const history = useHistory();
    const [state, setState] = useState(initialstate);
    const handlerFuncs = {
        email: (e) => {
            setState({ ...state, email: e.target.value });
        },
        username: (e) => {
            setState({ ...state, username: e.target.value });
        },
        password: (e) => {
            setState({ ...state, password: e.target.value });
        },
        confPass: (e) => {
            setState({ ...state, confPass: e.target.value });
        },
    };

    const handleClick = () => {
        history.push("/connexion");
    };

    return <>
        <h1 className="form-title"> S'inscrire </h1>
        <form action="">
            {
                inputsArray.map((input, i) =>
                    (<Input
                        key={i}
                        i={i}
                        type={input.type}
                        value={state[input.code]}
                        onChange={handlerFuncs[input.code]}
                        label={input.label}
                        tooltip={input.tooltip}
                        code={input.code}
                    />))
            }
            <Button type="submit" spacin="true" bold color="green">
                inscription
            </Button>
        </form>
        <Button className="form-changeView" onClick={handleClick} text>
            Déjà inscrit ?
        </Button>
    </>
};

export default Form;