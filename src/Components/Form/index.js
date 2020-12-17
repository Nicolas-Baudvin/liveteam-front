import Input from './input';
import { Button } from '../StyledComponents';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginInputsArray, signupInputsArray } from './utils';
import { useState } from 'react';
import ForgottenPass from './ForgottenPass';

const Form = ({ errors, state, handleSubmit, type, onChangeHandlers, handleForgottenPass }) => {
    const history = useHistory();
    const [showForgottenPasswordInput, setShow] = useState(false);

    const handleClick = () => {
        return type === "signup" ? history.push("/connexion") : history.push("/inscription");
    };

    const handleClickForgotenPassword = () => {
        setShow(true);
    };

    const handleSubmitForgottenPassword = () => {
        // TODO: Fetch
    };

    const backToConnexion = () => {
        setShow(false);
    }

    return <>
        <h1 className="form-title"> {type === "signup" ? "S'inscrire" : "Connexion"} </h1>
        {
            !showForgottenPasswordInput && <form onSubmit={handleSubmit} action="">
                {
                    type === "signup" && signupInputsArray.map((input, i) =>
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
                {
                    type === "login" && loginInputsArray.map((input, i) =>
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
                    {
                        type === "signup" ? "inscription" : "Connexion"
                    }
                </Button>
            </form>
        }
        {
            showForgottenPasswordInput && <ForgottenPass
            handleSubmitForgottenPassword={handleSubmitForgottenPassword}
            handleForgottenPass={handleForgottenPass}
             />
        }
        <Button className="form-changeView" onClick={handleClick} text>
            {
                type === "signup" ? "Déjà inscrit ?" : "Pas encore inscrit ?"
            }
        </Button>
        {
            type === "login" && !showForgottenPasswordInput && <Button onClick={handleClickForgotenPassword} className="form-forgotPass" text>
                Mot de passe oublié ?
            </Button>
        }
        {
            type === "login" && showForgottenPasswordInput && <Button onClick={backToConnexion} className="form-forgotPass" text>
                Retour page connexion
            </Button>
        }
    </>
};

Form.propTypes = {
    /**
     * Depend of form type, signup or login
     */
    errors: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string,
        password: PropTypes.string.isRequired,
        confPass: PropTypes.string
    }),

    /**
     * Same as above
     */
    state: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string,
        password: PropTypes.string.isRequired,
        confPass: PropTypes.string
    }),
    handleSubmit: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["login", "signup"]).isRequired,
    onChangeHandlers: PropTypes.arrayOf(PropTypes.func).isRequired,
    handleForgottenPass: PropTypes.func.isRequired
};

export default Form;