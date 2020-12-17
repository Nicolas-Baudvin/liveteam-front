import { Button, Input } from "../StyledComponents"

const ForgottenPass = ({ handleSubmitForgottenPassword, handleChangeForgottenPass, value }) => {
    return <form onSubmit={handleSubmitForgottenPassword} action="">
        <Input label="Votre email" onChange={handleChangeForgottenPass} value={value} />

        <p style={{ textAlign: 'center' }}>Nous allons vous envoyer un lien sur votre email pour refaire un nouveau mot de passe.</p>

        <Button type="submit" color="green">
            Envoyer
                </Button>
    </form>
};

export default ForgottenPass;