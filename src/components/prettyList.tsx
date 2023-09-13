import styled from "@emotion/styled";

export const PrettyUL = styled.ul`
    margin: 0;
    padding: 0 0.8em;
    list-style-type: none;
    position: relative;
`;

export const PrettyLI = styled.li`
    padding-bottom: 0.25em;
    &::before {
        content: "-";
        position: absolute;
        left: -0;
        font-size: 1.1em;
    }
`;
