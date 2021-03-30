import { Row, RowBody, RowContent, RowHeader, RowPostFix } from "../style/row";
import { Section, SectionContent, SectionHeader } from "../style/section";

export const Awards = () => (
    <Section>
        <SectionHeader>Awards</SectionHeader>
        <SectionContent>
            <Row>
                <RowContent>
                    <RowHeader>Boy Scouts of America</RowHeader>
                    <RowBody>Eagle Scout</RowBody>
                </RowContent>
                <RowPostFix>Earned 2006</RowPostFix>
            </Row>
        </SectionContent>
    </Section>
);
