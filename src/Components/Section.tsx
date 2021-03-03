import styled from "styled-components";
import { HEADER_COLOR, HEADER_SIZE } from "./Constants";

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.5em;
`;

export const SectionHeader = styled.div`
  width: 100px;
  font-size: ${HEADER_SIZE};
  color: ${HEADER_COLOR};
`;

export const SectionContent = styled.div`
  flex-grow: 1;
`;
