import styled from "styled-components";
import { COLORS } from "../constants/colors";
const TableHeader = styled.div`
    font-weight: bold;
    width: 80px;
`;

const TableCell = styled.div`
    flex-grow: 1;
`;
const TableRow = styled.div`
    display: flex;
`;

export const Header = () => (
    <div style={{ display: "flex" }}>
        <div
            style={{ flexGrow: 1, fontSize: "3.5em", color: COLORS.ROYAL_BLUE }}
        >
            Chris Bentivenga
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
            <TableRow>
                <TableHeader>Email:</TableHeader>
                <TableCell>chris@chrisbenti.com</TableCell>
            </TableRow>
            <TableRow>
                <TableHeader>Website:</TableHeader>
                <TableCell>chrisbenti.com</TableCell>
            </TableRow>
            <TableRow>
                <TableHeader>Phone:</TableHeader>
                <TableCell>908-692-3112</TableCell>
            </TableRow>
        </div>
    </div>
);
