import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { HEADER_SIZE } from "../constants/sizes";

export const Row = styled.div`
    display: flex;

    flex-direction: row;
`;

export const RowContent = styled.div`
    width: 100%;
`;

export const RowHeader = styled.div`
    font-size: ${HEADER_SIZE};
    color: ${COLORS.BACKUP_BLUE};
`;

export const RowSubHeader = styled.div`
    color: ${COLORS.BACKUP_BLUE};
`;

export const RowBody = styled.div``;

export const RowPostFix = styled.div`
    width: 120px;
`;
