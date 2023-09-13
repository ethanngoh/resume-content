import styled from "@emotion/styled";
import { COLORS } from "../constants/colors";
import { HEADER_SIZE } from "../constants/sizes";

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 0.5em;
`;

export const SectionHeader = styled.div`
    width: 100px;
    font-size: ${HEADER_SIZE};
    color: ${COLORS.BACKUP_BLUE};
    font-weight: 600;
`;

export const SectionContent = styled.div`
    width: 100%;
    align-item: bottom;
`;
