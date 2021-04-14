import {
    Row,
    RowBody,
    RowContent,
    RowHeader,
    RowPostFix,
    RowSubHeader
} from "../components/row";
import { PrettyUL, PrettyLI } from "../components/prettyList";
import { Section, SectionContent, SectionHeader } from "../components/section";

const JobExperienceDetails = () => (
    <>
        <Row>
            <RowContent>
                <RowHeader>Stripe</RowHeader>
                <RowSubHeader>Software Engineer - Cash Reporting</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            As a member of the Cash Reporting team, I am
                            responsible for a processing critical data from bank
                            transaction/balance reports (SWIFT/BAI), and making
                            that data available for internal partners.
                        </PrettyLI>
                        <PrettyLI>
                            As a senior member of the team, I am currently
                            leading an effort to safely migrate report
                            processing from a legacy processing pipeline to a
                            distributed, SOA pipeline.
                        </PrettyLI>
                        <PrettyLI>
                            As a result, we have begun to safely migrate several
                            reports, increasing SLA compliance, reducing
                            processing time by hours, enabling Stripe to meet
                            it's increasing regulatory burden.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>July 2019 to Present</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader></RowHeader>
                <RowSubHeader>
                    Software Engineer - Support Products
                </RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Tech lead for the data migrations workstream. This
                            effort supported users as they migrated highly
                            sensitive information on and off of Stripe's
                            platform in a complaint manner.
                        </PrettyLI>
                        <PrettyLI>
                            Lead developer and main contributor on a project
                            supporting the migration of BACS direct debits to
                            Stripe, supporting the acquisition of large EU based
                            customers.
                        </PrettyLI>
                        <PrettyLI>
                            Architect and lead developer of a new distributed,
                            SOA based migration approach; replacing a slow and
                            operationally intensive script based approach.
                            Currently used in support of BACS migrations.
                        </PrettyLI>
                        <PrettyLI>
                            Contributor to the support.stripe.com redesign.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix></RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Lyft</RowHeader>
                <RowSubHeader>
                    Full Stack Engineer - Open Platform Team
                </RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Lead frontend developer for Lyft’s Open Platform
                            initiative, which allowed vehicles to participate in
                            the world's largest public autonomous pilot (Las
                            Vegas).
                        </PrettyLI>
                        <PrettyLI>
                            Responsible for designing, architecting and building
                            frontend tools to facilitate operational needs of
                            fleet (I.E real time insight into fleet health and
                            performance), enhancing R/D speed safely.
                        </PrettyLI>
                        <PrettyLI>Additional details covered by NDA.</PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>June 2016 to June 2019</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowSubHeader>
                    Full Stack Engineer - Internal Productivity
                </RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Frontend teach lead for the team. Was the primary
                            interface with partner teams for both requirements
                            management and ongoing support needs for several
                            projects.
                        </PrettyLI>
                        <PrettyLI>
                            Projects owned included an internal corporate
                            directory, auto-generated documentation site and
                            compensation dashboard.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix></RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowSubHeader>Frontend Engineer - Observability</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Maintained Lyft's internal Grafana instance,
                            developed a custom Grafana plugin to improve
                            integration with our stats vendor, Wavefront.
                        </PrettyLI>
                        <PrettyLI>
                            Developed an internal portal for surfacing
                            infrastructure events from various services to
                            support live site issues (Envoy metrics, Jenkins
                            deploys, PagerDuty alarms).
                        </PrettyLI>
                        <PrettyLI>
                            Supported other teams in creating alarms and
                            dashboards for their services.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix></RowPostFix>
        </Row>

        <Row>
            <RowContent>
                <RowHeader>Microsoft</RowHeader>
                <RowSubHeader>Software Engineer II - Gig Jam</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Created a multi-platform application using web
                            technologies (TypeScript, KnockoutJS, HTML, LESS,
                            Cordova) and native platform extensions (Cordova
                            plugins).
                        </PrettyLI>
                        <PrettyLI>
                            Developed infrastructure to support our cross
                            platform development needs, ensuring that the entire
                            team could develop for iOS in a Windows heavy
                            environment.
                        </PrettyLI>
                        <PrettyLI>Managed two contingent developers.</PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>June 2013 to April 2016</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowSubHeader>
                    SDET/SDE - Enterprise Client Management Team (Configuration
                    Manager and Intune)
                </RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Worked on ensuring quality releases of Intune,
                            especially on-prem to cloud migration scenarios.
                        </PrettyLI>
                        <PrettyLI>
                            Created a tool for developing N-many custom test
                            applications.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix></RowPostFix>
        </Row>
    </>
);

export const JobExperience = () => (
    <Section>
        <SectionHeader>Work*</SectionHeader>
        <SectionContent>
            <JobExperienceDetails />
        </SectionContent>
    </Section>
);
