import { FormField, Icon, Input, Label, Tooltip, ErrorInputText } from "../StyledComponents";
import PropTypes from 'prop-types';

const InputField = ({ type, label, tooltip, icon = true, onChange, value, i, error }) => {
    return <FormField key={i}>
        <Label>{label}</Label>
        <div className="row">
            <Input error={error} type={type} value={value} onChange={(e) => onChange(e)} />
            {
                icon && <Tooltip title={tooltip}>
                    <Icon src={`${process.env.PUBLIC_URL}/img/question.png`} alt="Indication formulaire" />
                </Tooltip>
            }
        </div>
        <ErrorInputText>
            {error}
        </ErrorInputText>
    </FormField>
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    i: PropTypes.number.isRequired
};

export default InputField;