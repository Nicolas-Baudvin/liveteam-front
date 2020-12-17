import { useState } from "react";
import Form from '../Form';

const initialState = {
    username: "",
    password: ""
};

const Login = () => {
    const [errors, setErrors] = useState(initialState);
    const [state, setState] = useState(initialState);
    const [email, setEmail] = useState("");

    const handlersFuncs = {
        username: (e) => {
            if (e.target.value.length >= 20)
            {
                return;
            }
            return setState({
                ...state,
                username: e.target.value
            });
        },
        password: (e) => {
            if (e.target.value.length >=30)
            {
                return;
            }
            return setState({
                ...state,
                password: e.target.value
            });
        }
    };

    const handleChangeForgottenPass = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = state;
        const { username: errUsername, password: errPass } = errors;
        if (username && password)
        {
            if (!errUsername && !errPass)
            {
                // TODO: fetch
                console.log("fetching data");
            }
        }
        else
            return setErrors({
                ...errors,
                username: !username.length && "Le champs Pseudo est vide !",
                password: !password.length && "Le champs Mot de passe est vide !"
            })
        
    }
    return <div className="login">
        <img src={`${process.env.PUBLIC_URL}/img/login.png`} alt="Connexion" />
        <div className="login-block">
            <div className="form">
                <Form
                    type="login"
                    onChangeHandlers={handlersFuncs}
                    handleSubmit={handleSubmit}
                    state={state}
                    errors={errors}
                    handleChangeForgottenPass={handleChangeForgottenPass}
                    value={email}
                />
            </div>
        </div>
    </div>
};

export default Login;