import {
  Row,
  RowBody,
  RowContent,
  RowHeader,
  RowPostFix,
} from "../components/row";
import { Section, SectionContent, SectionHeader } from "../components/section";

export const School = () => (
  <Section>
    <SectionHeader>School</SectionHeader>
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
