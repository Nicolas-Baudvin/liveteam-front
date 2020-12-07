import Form from './Form';
import './style.scss'

const Signup = () => {
    return <div className="signup">
        <img className="signup-pic" src={`${process.env.PUBLIC_URL}/img/signupsvg.png`} alt="inscription" />
        <div className="signup-container">
            <div className="form">
                <Form />
            </div>
        </div>
    </div>
};

export default Signup;