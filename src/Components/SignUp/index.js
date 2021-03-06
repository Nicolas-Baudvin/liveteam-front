import { useState } from 'react';
import Form from '../Form';
import { checkFields } from './utils';
import { checkEmail } from '../../Utils';
import './style.scss';
import { useDispatch } from 'react-redux';
import { signup } from '../../Store/Registration/Actions';

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

const Signup = () => {
    const [state, setState] = useState(initialstate);
    const [errors, setErrors] = useState(initialErrors);
    const dispatch = useDispatch();


    const onChangeHandlers = {
        email: (e) => {
            if (e.target.value.length >= 100)
            {
                return;
            }
            else if (!checkEmail(e.target.value))
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const isUsernameCorrect = checkFields(state.username).username();
        const isPasswordCorrect = checkFields(state.password).password();

        if (!isUsernameCorrect)
        {
            setErrors({
                ...errors,
                username: "Le pseudo contient des caractères prohibés. Les seuls caractères autorisés sont les caractères alphanumériques."
            });
        }
        if (!isPasswordCorrect)
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
            dispatch(signup({ ...state }));
        }
    };
    return <div className="signup">
        <img className="signup-pic" src={`${process.env.PUBLIC_URL}/img/signupsvg.png`} alt="inscription" />
        <div className="signup-container">
            <div className="form">
                <Form handleSubmit={handleSubmit} errors={errors} state={state} type="signup" onChangeHandlers={onChangeHandlers} />
            </div>
        </div>
    </div>
};

export default Signup;