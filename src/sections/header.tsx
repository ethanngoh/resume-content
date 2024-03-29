import styled from "@emotion/styled";
import { COLORS } from "../constants/colors";

import { ImLink, ImPhone } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { Mono } from "../components/mono";

const TableHeader = styled.div`
    width: 17px;
    position: relative;
    font-size: 1em;
`;

const TableCell = styled.div`
    flex-grow: 1;
`;

const TableRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = () => (
    <div style={{ display: "flex" }}>
        <div
            style={{
                flexGrow: 1,
                fontSize: "3.5em",
                color: COLORS.ROYAL_BLUE,
                fontWeight: 700
            }}
        >
            Ethan Goh
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <TableRow>
                <TableHeader>
                    <IoIosMail />
                </TableHeader>
                <TableCell>ethan@ethangoh.com</TableCell>
            </TableRow>
            <TableRow>
                <TableHeader>
                    <ImLink />
                </TableHeader>
                <TableCell>ethangoh.com</TableCell>
            </TableRow>
            <TableRow>
                <TableHeader>
                    <ImPhone />
                </TableHeader>
                <TableCell>
                    <Mono>425-445-2299</Mono>
                </TableCell>
            </TableRow>
        </div>
    </div>
);
