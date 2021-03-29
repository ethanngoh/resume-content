import {
  Row,
  RowBody,
  RowContent,
  RowHeader,
  RowPostFix,
} from "../Components/Row";
import { Section, SectionContent, SectionHeader } from "../Components/Section";

export const School = () => (
  <Section>
    <SectionHeader>Skills</SectionHeader>
    <SectionContent>
      <Row>
        <RowContent>
          <RowHeader>Rochester Institute of Technology</RowHeader>
          <RowBody>
            B.S. in Software Engineering, Minors in Computer Science and
            Psychology
          </RowBody>
        </RowContent>
        <RowPostFix>2009-2013</RowPostFix>
      </Row>
    </SectionContent>
  </Section>
);
