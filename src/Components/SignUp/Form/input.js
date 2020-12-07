import { FormField, Icon, Input, Label, Tooltip } from "../../StyledComponents";
import PropTypes from 'prop-types';

const Email = ({ type, label, tooltip, icon = true, onChange, value, code, i }) => {
    return <FormField key={i}>
        <Label>{label}</Label>
        <div className="row">
            <Input type={type} value={value} onChange={(e) => onChange(e)} />
            {
                icon && <Tooltip title={tooltip}>
                    <Icon src={`${process.env.PUBLIC_URL}/img/question.png`} alt="Indication formulaire" />
                </Tooltip>
            }
        </div>
    </FormField>
};

Email.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
};

export default Email;