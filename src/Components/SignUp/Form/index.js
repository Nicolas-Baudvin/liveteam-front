import Input from './input';
import { useState } from 'react';
import { Button } from '../../StyledComponents';
import { useHistory } from 'react-router-dom';
import { isEmailCorrect, checkFields, inputsArray } from './utils';

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

const Form = () => {
    const history = useHistory();
    const [state, setState] = useState(initialstate);
    const [errors, setErrors] = useState(initialErrors);

    const onChangeHandlers = {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const isUsernameCorrect = checkFields(state.username).username();
        const isPasswordCorrect = checkFields(state.password).password();

        if (isUsernameCorrect)
        {
            setErrors({
                ...errors,
                username: "Le pseudo contient des caractères prohibés. Les seuls caractères autorisés sont les caractères alphanumériques."
            });
        }
        if (isPasswordCorrect)
        {
            setErrors({
                ...errors,
                password: "Le mot de passe est invalide. Il doit contenir 8 caractères minimum, 1 lettre majuscule, une lettre minuscule, et un chiffre."
            });
        }

        if (
            isPasswordCorrect
            && isUsernameCorrect
            && !errors.confPass
            && !errors.email
            && !errors.password
            && !errors.username
        )
        {
            // Fetch
        }
    };

    return <>
        <h1 className="form-title"> S'inscrire </h1>
        <form onSubmit={handleSubmit} action="">
            {
                inputsArray.map((input, i) =>
                    (<Input
                        key={i}
                        i={i}
                        type={input.type}
                        value={state[input.code]}
                        onChange={onChangeHandlers[input.code]}
                        label={input.label}
                        tooltip={input.tooltip}
                        error={errors[input.code]}
                    />))
            }
            <Button type="submit" spacing="true" bold color="green">
                inscription
            </Button>
        </form>
        <Button className="form-changeView" onClick={handleClick} text>
            Déjà inscrit ?
        </Button>
    </>
};

export default Form;