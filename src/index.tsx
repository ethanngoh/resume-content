import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { COLORS } from "./constants/colors";
import { Awards } from "./sections/awards";
import { Header } from "./sections/header";
import { JobExperience } from "./sections/jobExperience";
import { Overview } from "./sections/overview";
import { School } from "./sections/school";
import { Skills } from "./sections/skills";
import styled from "styled-components";
import { Footnote } from "./sections/footnote";

const PDF = styled.div`
    height: 1056px;
    width: 816px;
    overflow: hidden;
    font-family: "Raleway", sans-serif;
    font-size: 0.8em;
    box-sizing: border-box;
    padding: 1em 2em;
    border: solid 20px ${COLORS.ROYAL_BLUE};
`;

function App() {
    useEffect(() => {
        document.body.style.backgroundColor = COLORS.OFF_WHITE;
        document.body.style.padding = "0px";
        document.body.style.margin = "0px";
    });
    return (
        <PDF>
            <Header />
            <Overview />
            <JobExperience />
            <Skills />
            <School />
            <Footnote />
        </PDF>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
