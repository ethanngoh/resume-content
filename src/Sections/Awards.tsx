import {
  Row,
  RowBody,
  RowContent,
  RowHeader,
  RowPostFix,
} from "../Components/Row";
import { Section, SectionContent, SectionHeader } from "../Components/Section";

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
