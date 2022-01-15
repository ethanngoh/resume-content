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
                <RowHeader>Sourcebite</RowHeader>
                <RowSubHeader>CTO</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Chief technological officer of Sourcebite (www.sourcebite.com), a B2B service that connects supply and demand within the food industry in Singapore.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>Jan 2020 to Present</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Stripe</RowHeader>
                <RowSubHeader>Software Engineer - Banking Platform</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Technical Lead for the Banking Platform Cash Reporting team, architecting a cash reporting pipeline to process bank transaction/balance reports (SWIFT/BAI) used for Stripe's cash reconciliation. Something something credit transfers.
                            Something something Financial Rigor River. Something grew team from 2-5
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>July 2019 to Present</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Lyft</RowHeader>
                <RowSubHeader>
                    Senior Software Engineer
                </RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Technical lead for the Open Platform Fleet Management team, architecting and creating tooling for the Level 5 (Autonomous Vehicle Division) and various Open Platform partners. Provisioned and integrated autonomous vehicles to service rides on the Lyft platform, which has served the worlds largest public autonomous pilot in Las Vegas.
                        </PrettyLI>
                        <PrettyLI>
                            Technical lead for the Driver Education team, where we built data driven systems to encourage drivers to provide a quality passenger experience. Architected Lyft’s rating and feedback service that aggregates users’ feedback across the app to uphold the quality of the product.
                        </PrettyLI>
                        <PrettyLI>Designed and implemented the venues experience on the Airports &amp; Venues team, which serves 10% of all Lyft rides. Created tools for customer service agents to customize the pickup experience for sticky areas in their local markets.</PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>Jan 2016 - Jun 2019</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Microsoft</RowHeader>
                <RowSubHeader>Software Engineer II - Azure Media Services</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Architected a distributed media storage solution using Azure Storage that reduced COGS by 30%.
                            Developed backend services for Office 365 Video and defined the Media Services REST APIs.
                        </PrettyLI>
                        <PrettyLI>
                            Improved the deployment speed of Media Services by 7x by rearchitecting the engineering pipeline.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>Sep 2012 - Dec 2015</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowSubHeader>
                    Software Engineer - Lync Server
                </RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Improved Lync Server’s reliability and performance by algorithmically partitioning and redistributing
                            user load evenly across hardware.
                        </PrettyLI>
                        <PrettyLI>
                            Designed and achieved seamless upgrades of the Lync Online by revamping the deployment infra.
                            Redesigned Lync’s monitoring system to oversee the health of the Lync Online Server.
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
