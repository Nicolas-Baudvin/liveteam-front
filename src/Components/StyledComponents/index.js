import styled from "styled-components";

const colors = {
    green: { color: "#23BC95", hover: "#1FA482" },
    red: { color: "#EC0B43" },
    violet: { color: "#6C63FF" }
};

export const Button = styled.button`
    padding: .5em 1em;
    background-color: ${props => props.color ? colors[props.color].color : colors["green"].color};
    border: none;
    border-radius: 8px;
    color: #fff;
    font-size: 1.5em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
    width: 300px;
    cursor: pointer;
    transition: .2s ease-in-out;

    &:hover {
        box-shadow: 0 3px 9px rgba(0, 0, 0, .32);
        transform: translate(0, -2px);
        background-color: ${props => props.color ? colors[props.color].hover : colors["green"].hover};
    }

    &:focus {
        border: none;
        outline: none;
        transform: translate(0, 2px);
        box-shadow: 0 2px 4px rgba(0, 0, 0, .40);
        background-color: ${props => props.color ? colors[props.color].hover : colors["green"].hover};
    }
`;