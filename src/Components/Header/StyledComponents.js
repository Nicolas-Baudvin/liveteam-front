import styled from 'styled-components';

const ListItem = styled.li`
        list-style-type: none;
        color: #fff;
        font-size: 2em;
        margin: 0 2em;
        text-transform: uppercase;
        cursor: pointer;
        background-color: ${props => (props.connexion && "#23BC95") || (props.selected && "rgba(35,188,149, .1)")};
        padding: 0.3em 0.5em;
        border-radius: 8px;
        font-weight: ${props => props.connexion ? "bold" : "normal"};
        box-shadow: ${props => props.connexion ? "0 2px 10px rgba(0, 0, 0, .5)" : "none"};
        transition: .2s ease-in-out;

        &:hover {
            box-shadow: ${props => props.connexion ? "0 2px 7px rgba(0, 0, 0, .5)" : "none"};
            background-color: ${props => props.connexion ? "#23BC95" : "rgba(35,188,149, .1)"};
        }
    `;

    export { ListItem };