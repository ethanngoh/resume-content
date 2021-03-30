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

export const JobExperience = () => (
    <Section>
        <SectionHeader>Work</SectionHeader>
        <SectionContent>
            <Row>
                <RowContent>
                    <RowHeader>Lyft</RowHeader>
                    <RowSubHeader>
                        Frontend Engineer - Open Platform Team
                    </RowSubHeader>
                    <RowBody>
                        <PrettyUL>
                            <PrettyLI>
                                Lead frontend developer for Lyft’s Open Platform
                                initiative, which allows autonomous vehicles to
                                provide rides on Lyft’s ridesharing network. To
                                date, we’ve provided over 30,000 autonomous
                                rides with our partner Aptiv in Las Vegas. This
                                is the world’s largest pubPrettyLIc Autonomous
                                pilot.
                            </PrettyLI>
                            <PrettyLI>
                                Responsible for building frontend tools to
                                faciPrettyLItate operational needs of fleet (I.E
                                real time insight into fleet health and
                                performance). These tools enhance research
                                speed, safety and compPrettyLIance.
                            </PrettyLI>
                            <PrettyLI>
                                As the lead frontend developer, I am responsible
                                for designing high level architecture, roadmap-
                                ping, developing features, growing the team
                                (hiring and onboarding), and working closely
                                with cross functional partners to dePrettyLIver
                                a complete solution.
                            </PrettyLI>
                            <PrettyLI>
                                Additional details covered by NDA.
                            </PrettyLI>
                        </PrettyUL>
                    </RowBody>
                </RowContent>
                <RowPostFix>June 2016 to June 2019</RowPostFix>
            </Row>
            <Row>
                <RowContent>
                    <RowSubHeader>
                        Frontend Engineer - Internal Productivity
                    </RowSubHeader>
                    <RowBody>
                        <PrettyUL>
                            <PrettyLI>
                                As a member of this team, I led our frontend
                                development and was the primary interface with
                                partner teams for both requirements managment
                                and ongoing support needs.
                            </PrettyLI>
                            <PrettyLI>
                                Projects I contributed to as a member of the
                                team include our internal corporate directory,
                                OKR aggregation tools, auto-generating
                                documentation site and compensation dashboard.
                            </PrettyLI>
                        </PrettyUL>
                    </RowBody>
                </RowContent>
                <RowPostFix></RowPostFix>
            </Row>
            <Row>
                <RowContent>
                    <RowSubHeader>
                        Frontend Engineer - ObservabiPrettyLIty
                    </RowSubHeader>
                    <RowBody>
                        <PrettyUL>
                            <PrettyLI>
                                While on this team, I owned our Grafana
                                instance, developing a custom Grafana plugin for
                                work- ing with Wavefront. Developed an internal
                                portal for surfacing infrastructure events from
                                various services to support PrettyLIve site
                                issues (Envoy metrics, Jenkins deploys,
                                PagerDuty alarms).
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
                    <RowSubHeader>Other Notes</RowSubHeader>
                    <RowBody>
                        <PrettyUL>
                            <PrettyLI>
                                Part of on-call rotations for all teams I was a
                                member of, including non-frontend systems.
                            </PrettyLI>
                            <PrettyLI>
                                Assisting in the Seattle internship pilot. This
                                includes attending all interview debriefs for
                                interns to help caPrettyLIbrate the new
                                interview category, on campus recruiting and
                                mentoring an intern.
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
                                Created a mPrettyULti-platform appPrettyLIcation
                                using web technologies (TypeScript, KnockoutJS,
                                HTML, LESS, Cordova) and native platform
                                extensions (Cordova plugins).
                            </PrettyLI>
                            <PrettyLI>
                                Developed infrastructure to support our cross
                                platform development needs, ensuring that the
                                entire team coPrettyULd develop for iOS in a
                                Windows heavy environment. This included
                                converting and supporting a move from MSBuild to
                                GPrettyULp.
                            </PrettyLI>
                            <PrettyLI>
                                Managed two contingent developers,
                                schedPrettyUPrettyLIng work, reviewing
                                dePrettyLIverables and growing their technical
                                abiPrettyLIties, helping them to contribute even
                                more within the team.
                            </PrettyLI>
                        </PrettyUL>
                    </RowBody>
                </RowContent>
                <RowPostFix>June 2013 to April 2016</RowPostFix>
            </Row>
            <Row>
                <RowContent>
                    <RowSubHeader>
                        SDET/SDE - Enterprise CPrettyLIent Management Team
                        (Configuration Manager and Intune)
                    </RowSubHeader>
                    <RowBody>
                        <PrettyUL>
                            <PrettyLI>
                                Worked on ensuring quaPrettyLIty releases of
                                Intune. This included testing for the migration
                                from an internal legacy data center system with
                                extensive SQL usage to Azure.
                            </PrettyLI>
                            <PrettyLI>
                                Developed automation for testing
                                appPrettyLIcation installation scenarios. Most
                                notable, created a tool that allowed for the
                                creation of arbitrary appPrettyLIcation
                                packages, increasing testing efficiency.
                            </PrettyLI>
                            <PrettyLI>
                                Worked with OS group to support our products
                                with initial Windows 10 launch.
                            </PrettyLI>
                        </PrettyUL>
                    </RowBody>
                </RowContent>
                <RowPostFix></RowPostFix>
            </Row>
        </SectionContent>
    </Section>
);
