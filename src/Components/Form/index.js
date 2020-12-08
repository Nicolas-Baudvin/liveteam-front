import Input from './input';
import { Button } from '../StyledComponents';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginInputsArray, signupInputsArray } from './utils';

const Form = ({ errors, state, handleSubmit, type, onChangeHandlers }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/connexion");
    };

    return <>
        <h1 className="form-title"> S'inscrire </h1>
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
                inscription
            </Button>
        </form>
        <Button className="form-changeView" onClick={handleClick} text>
            Déjà inscrit ?
        </Button>
    </>
};

Form.propTypes = {
    /**
     * Depend of form type, signup or login
     */
    errors: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        confPass: PropTypes.string.isRequired
    }) || PropTypes.shap({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),

    /**
     * Depend of form type, signup or login
     */
    state: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        confPass: PropTypes.string.isRequired
    }) || PropTypes.shap({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
    }),
    handleSubmit: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["login", "signup"]).isRequired
};

export default Form;