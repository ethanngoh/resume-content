import { Row, RowBody, RowContent, RowHeader, RowPostFix, RowSubHeader } from "../components/row";
import { PrettyUL, PrettyLI } from "../components/prettyList";
import { Section, SectionContent, SectionHeader } from "../components/section";

const JobExperienceDetails = () => (
    <>
        <Row>
            <RowContent>
                <RowHeader>Chad Inc.</RowHeader>
                <RowSubHeader>Cofounder / CTO</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Spearheaded technical leadership and the development of Chad Inc., an AI-powered Shopify
                            widget that transforms order management for customers and optimized merchant operations.
                        </PrettyLI>
                        <PrettyLI>
                            Demonstrated exceptional leadership by achieving a 5-digit monthly recurring revenue and
                            successfully scaling Chad to support 12 high-impact merchants.
                        </PrettyLI>
                        <PrettyLI>
                            Led the entire technical lifecycle, from concept to launch, while overseeing a dynamic team
                            of 5 engineers. Actively designed, coordinated and contributed to the code base, evolving it
                            from functional prototype into a robust, scalable production application.
                        </PrettyLI>
                        <PrettyLI>
                            Assumed the pivotal role of sole people manager for the technical team, including
                            establishing a comprehensive performance management process, upleveling the engineering
                            team. Additionally, was responsible for all engineering hiring, from managing external
                            recruiting agencies, designing an interview process custom to Chad’s needs, and bringing in
                            the individuals to the team.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>June 2022 to Aug 2023</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Stripe</RowHeader>
                <RowSubHeader>Staff Software Engineer - Cash Reporting</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Led a team of 6 engineers responsible for processing business-critical bank reporting
                            (SWIFT/BAI), pivotal to Stripe's accounting reconciliation and bank transfer products.
                            Managed seamless communication and collaboration across stakeholders, including internal
                            teams (Accounting, Treasury, Banking Operations) and external banking partners.
                        </PrettyLI>
                        <PrettyLI>
                            Orchestrated the architectural overhaul and migration of report processing, shifting from a
                            legacy, single-threaded pipeline to a distributed event driven system. This transformation
                            substantially enhanced service reliability and reduced processing time by hours. As a
                            result, Stripe efficiently met escalating regulatory demands and expanded support for new
                            product categories and geographies.
                        </PrettyLI>
                        <PrettyLI>
                            Spearheaded a cross-team initiative to develop a platform empowering global engineering
                            teams to implement locale-specific bank transfer rails (ACH/SEPA) for the core Stripe
                            Payments product.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>July 2019 to May 2022</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Lyft</RowHeader>
                <RowSubHeader>Senior Software Engineer</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            As the technical lead for the Open Platform Fleet Management team, I architected and created
                            tooling to support the development of autonomous vehicles for both Level 5 and various Open
                            Platform partners. This tooling provisioned and integrated autonomous vehicles into the Lyft
                            platform, enabling rides for the world's largest public autonomous pilot in Las Vegas.
                        </PrettyLI>
                        <PrettyLI>
                            Led the development of data-driven systems for the Driver Education team, aiming to enhance
                            driver performance and passenger satisfaction. This included the design and implementation
                            of Lyft's rating and feedback service to ensure consistently high-quality service.
                        </PrettyLI>
                        <PrettyLI>
                            Designed and implemented the venues experience for the Airports & Venues team, which served
                            10% of all Lyft rides. Additionally, I delivered tools that empowered customer support teams
                            to customize pickup experiences in challenging local market areas.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>Jan 2016 - Jun 2019</RowPostFix>
        </Row>
        <Row>
            <RowContent>
                <RowHeader>Microsoft</RowHeader>
                <RowSubHeader>Software Engineer</RowSubHeader>
                <RowBody>
                    <PrettyUL>
                        <PrettyLI>
                            Designed Azure Storage solution, cutting Azure Media Services COGS by 30%. Developed backend
                            and REST APIs for Office 365 Video.
                        </PrettyLI>
                        <PrettyLI>
                            Revamped Lync Online deployment for seamless upgrades. Redesigned monitoring for Lync Online
                            Server. Enhanced Lync Server reliability and performance through load redistribution.
                        </PrettyLI>
                    </PrettyUL>
                </RowBody>
            </RowContent>
            <RowPostFix>Sep 2012 - Dec 2015</RowPostFix>
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
