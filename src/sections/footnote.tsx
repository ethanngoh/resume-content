import styled from "styled-components";

const FootnoteStyling = styled.div`
    position: absolute;
    top: 1020px;
    left: 0;
    font-size: 0.9em;
    width: 100%;
    text-align: center;
    font-style: italic;
    width: 816px;
`;

export const Footnote = () => (
    <FootnoteStyling>
        * Work history abbreviated for space. For full work history, see
        linkedin.com/in/chrisbenti
    </FootnoteStyling>
);
