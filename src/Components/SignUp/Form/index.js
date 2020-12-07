import Input from './input';
import { useState } from 'react';
import { Button } from '../../StyledComponents';
import { useHistory } from 'react-router-dom';
import { isEmailCorrect } from './utils';

const initialstate = {
    username: "",
    password: "",
    email: "",
    confPass: "",
};

const initialErrors = {
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
];

const Form = () => {
    const history = useHistory();
    const [state, setState] = useState(initialstate);
    const [errors, setErrors] = useState(initialErrors);

    const handlerFuncs = {
        email: (e) => {
            if (e.target.value.length >= 100)
            {
                return;
            }
            else if (!isEmailCorrect(e.target.value))
            {
                setErrors({
                    ...errors,
                    email: "Email invalide"
                });
            }
            else
                setErrors({ ...errors, email: "" });

            return setState({ ...state, email: e.target.value });
        },
        username: (e) => {
            if (e.target.value.length >= 20)
            {
                return;
            }
            else if (e.target.value.length <= 6)
                setErrors({
                    ...errors,
                    username: "Le pseudonyme doit faire 6 caractères ou plus"
                });
            else
                setErrors({
                    ...errors,
                    username: ""
                });

            setState({ ...state, username: e.target.value });
        },
        password: (e) => {
            if (e.target.value.length >= 30)
            {
                return setErrors({
                    ...errors,
                    password: "Le mot de passe doit faire entre 6 et 30 caractères !"
                })
            }
            else if (e.target.value.length <= 8)
                setErrors({
                    ...errors,
                    password: "Le mot de passe doit faire 8 caractères ou plus"
                });
            else
                setErrors({
                    ...errors,
                    password: ""
                });

            setState({ ...state, password: e.target.value });
        },
        confPass: (e) => {
            setState({ ...state, confPass: e.target.value });
            if (state.password !== e.target.value)
            {
                setErrors({
                    ...errors,
                    confPass: "Les mots de passe doivent être identiques !"
                })
            }
            else
                setErrors({
                    ...errors,
                    confPass: ""
                });
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
                        error={errors[input.code]}
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