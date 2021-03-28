import styled from "styled-components";
import { HEADER_COLOR, HEADER_SIZE } from "./Constants";

export const Row = styled.div`
  display: flex;

  flex-direction: row;
`;

export const RowContent = styled.div`
  flex-grow: 1;
`;

export const RowHeader = styled.div`
  font-size: ${HEADER_SIZE};
  color: ${HEADER_COLOR};
`;

export const RowSubHeader = styled.div`
  color: ${HEADER_COLOR};
`;

export const RowBody = styled.div``;

export const RowPostFix = styled.div`
  width: 100px;
`;
