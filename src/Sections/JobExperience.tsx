import {
  Row,
  RowBody,
  RowContent,
  RowHeader,
  RowPostFix,
  RowSubHeader,
} from "../Components/Row";
import { Section, SectionContent, SectionHeader } from "../Components/Section";

export const JobExperience = () => (
  <Section>
    <SectionHeader>Work</SectionHeader>
    <SectionContent>
      <Row>
        <RowContent>
          <RowHeader>Lyft</RowHeader>
          <RowSubHeader>Frontend Engineer - Open Platform Team</RowSubHeader>
          <RowBody>
            <ul>
              <li>
                Lead frontend developer for Lyft’s Open Platform initiative,
                which allows autonomous vehicles to provide rides on Lyft’s
                ridesharing network. To date, we’ve provided over 30,000
                autonomous rides with our partner Aptiv in Las Vegas. This is
                the world’s largest public Autonomous pilot.
              </li>
              <li>
                Responsible for building frontend tools to facilitate
                operational needs of fleet (I.E real time insight into fleet
                health and performance). These tools enhance research speed,
                safety and compliance.
              </li>
              <li>
                As the lead frontend developer, I am responsible for designing
                high level architecture, roadmap- ping, developing features,
                growing the team (hiring and onboarding), and working closely
                with cross functional partners to deliver a complete solution.
              </li>
              <li>Additional details covered by NDA.</li>
            </ul>
          </RowBody>
        </RowContent>
        <RowPostFix>June 2016 to June 2019</RowPostFix>
      </Row>
    </SectionContent>
  </Section>
);
