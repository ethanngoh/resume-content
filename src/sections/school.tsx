import { Row, RowBody, RowContent, RowHeader, RowPostFix } from "../components/row";
import { Section, SectionContent, SectionHeader } from "../components/section";

export const School = () => (
    <Section>
        <SectionHeader>School</SectionHeader>
        <SectionContent>
            <Row>
                <RowContent>
                    <RowHeader>Duke University</RowHeader>
                    <RowBody>B.Se. in Electrical and Computer Engineering, Computer Science, and Mathematics</RowBody>
                </RowContent>
                <RowPostFix>2008-2012</RowPostFix>
            </Row>
        </SectionContent>
    </Section>
);
