import styled from "styled-components";

const colors = {
    green: { color: "#23BC95", hover: "#1FA482" },
    red: { color: "#EC0B43" },
    violet: { color: "#6C63FF" }
};

export const Button = styled.button`
    padding: ${props => !props.text && ".5em 1em"};
    background-color: ${props => props.color && colors["green"].color};
    border: none;
    border-radius: ${props => !props.text && "8px"};
    color: ${ props => (!props.text && "#fff") || (props.text && "rgb(110,110,110)") };
    font-size: ${props => !props.text ? "1.5rem" : ".8rem"};
    box-shadow: ${props => !props.text && "0 3px 6px rgba(0,0,0,.16)"};
    width: ${props => !props.text && "300px"};
    cursor: pointer;
    transition: .2s ease-in-out;
    text-transform: uppercase;
    font-weight: ${props => props.bold && "bold"};
    letter-spacing: ${props => props.spacing === "true" && ".08em"};
    margin: ${props => !props.text && "1em 0"};

    &:hover {
        box-shadow: ${props => !props.text && "0 3px 9px rgba(0,0,0,.32)"};
        transform: ${props => !props.text && "translate(0, -2px)"};
        background-color: ${props => props.color && colors[props.color].hover};
        text-decoration: ${props => props.text && "underline"};
        color: ${props => props.text && "rgb(50,50,50)"}
    }

    &:focus {
        border: none;
        outline: none;
        transform: ${props => !props.text && "translate(0, 2px)"};
        box-shadow: ${props => !props.text && "0 2px 4px rgba(0,0,0,.40)"};
        background-color: ${props => props.color && colors[props.color].hover};
    }
`;

export const Input = styled.input`
    border: 1px solid rgba(0,0,0,.4);
    font-size: 1.5em;
    padding: .6em;
    border-radius: 8px;
    transition: .2s ease-in-out;
    color: rgb(50,50,50);

    &:hover {
        box-shadow: 0 0 0 2px rgb(108, 99, 255);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgb(108, 99, 255);
    }
`;

export const FormField = styled.div`
    margin: 1em 0;
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    color: rgb(90,90,90);
    padding-left: 1.5em;
    margin-bottom: 1em;
    font-size: 1rem;
`;

export const Icon = styled.img`
    cursor: pointer;
    margin-left: 1em;
    position: absolute;
    right: -3em;
    top: 50%;
    transform: translate(50%, -50%);
`;

export const Tooltip = styled.abbr`
    font-weight: bold;
`;