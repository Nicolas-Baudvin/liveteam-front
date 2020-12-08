import Input from './input';
import { Button } from '../StyledComponents';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginInputsArray, signupInputsArray } from './utils';

const Form = ({ errors, state, handleSubmit, type, onChangeHandlers }) => {
    const history = useHistory();

    const handleClick = () => {
        return type === "signup" ? history.push("/connexion") : history.push("/inscription");
    };

    const handleClickForgotenPassword = () => {
        // TODO: fetch
    };

    return <>
        <h1 className="form-title"> {type === "signup" ? "S'inscrire" : "Connexion"} </h1>
        <form onSubmit={handleSubmit} action="">
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
        <Button className="form-changeView" onClick={handleClick} text>
            {
                type === "signup" ? "Déjà inscrit ?" : "Pas encore inscrit ?"
            }
        </Button>
        {
            type === "login" && <Button onClick={handleClickForgotenPassword} className="form-forgotPass" text>
                Mot de passe oublié ?
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
     * Depend of form type, signup or login
     */
    state: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string,
        password: PropTypes.string.isRequired,
        confPass: PropTypes.string
    }),
    handleSubmit: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["login", "signup"]).isRequired
};

export default Form;