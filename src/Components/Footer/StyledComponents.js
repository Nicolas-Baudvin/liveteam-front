const { default: styled } = require("styled-components");

export const FooterNav = styled.li`
    list-style-type: none;
    margin: 0 2em;
    cursor: pointer;
    a {
        color: ${props => props.anchor && "#fff"};
        text-decoration: ${props => props.anchor && "none"};
        text-transform: capitalize
    }
`;