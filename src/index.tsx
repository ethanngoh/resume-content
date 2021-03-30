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

const PDF = styled.div`
  height: 1064px;
  width: 816px;
  overflow: hidden;
  padding: 1.25em;
  font-family: "Raleway", sans-serif;
  font-size: 0.87em;
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
      <Awards />
    </PDF>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
