'use client'

import React from 'react'

import tikatika from '@/assets/logo/tikatika-logo.png'
import playground from "@/assets/logo/playground.png"
import hopper from '@/assets/logo/hopper.png'
import clsx from 'clsx'

const WorkExperienceTimeline = () => {
    const workExperienceData = [
        {
            title: "Web developer",
            company_name: "HOPPER VN",
            avat_company: hopper,
            time: "09/2023 - 11/2024",
            contents: [
                "",
                ""
            ]
        },
        {
            title: "Web developer",
            company_name: "PLAYGROUND",
            avat_company: playground,
            time: "12/2021 - 09/2023",
            contents: [
                "",
                ""
            ]
        },
        {
            title: "Web developer",
            company_name: "TIKATIKA",
            avat_company: tikatika,
            time: "8/2021 - 10/2021",
            contents: [
                "",
                ""
            ]
        },
    ]
    return (
        <>

            <ul className="timeline">
                {
                    workExperienceData.map((i, index) => (
                        <li key={index} className={clsx({
                            "timeline-inverted": index & 1,
                            "": !(index & 1)
                        })}>
                            <div className={clsx("timeline-badge")}>
                                <a>
                                    <i className="fa fa-circle" id="" />
                                </a>
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4>{i.title}</h4>
                                </div>
                                <div className="timeline-body">
                                    <ul style={{ padding: "0 40px" }}>
                                        <li>
                                            Maintain assets on network of brand sites utilizing XML, JQuery,
                                            XSLT &amp; JavaScript.
                                        </li>
                                        <li>
                                            Prioritize and address web requests to ensure requests are
                                            effectively resolved in a timely manner.
                                        </li>
                                        <li>
                                            Collaborate with department staff to ensure user-focused design
                                            and launch of interactive web initiatives.
                                        </li>
                                        <li>
                                            Develop, enhance, maintain and support web applications in
                                            Interwoven TeamSite CMS to evaluate the effectiveness, usability,
                                            and accessibility of Web sites and make recommendations for
                                            enhancements to Web sites overall effectiveness.
                                        </li>
                                    </ul>
                                </div>
                                <div className="timeline-footer">
                                    <p className="text-right">{i.time}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }

                {/* <li className="timeline-inverted">
                    <div className="timeline-badge">
                        <a>
                            <i className="fa fa-circle invert" id="" />
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Freelance Web Developer - Bekov Creative Studio</h4>
                        </div>
                        <div className="timeline-body">
                            <p>Clients (Results Marketing, Red News, Weight Loss Houston)</p>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">MARCH 2012 - SEPTEMBER 2014</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="timeline-badge">
                        <a>
                            <i className="fa fa-circle" id="" />
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Web Developer - Vestas</h4>
                        </div>
                        <div className="timeline-body">
                            <p>
                                Designed, developed and successfully implemented eLearning web sites
                                for new employees within the global team of Vestas Intranet, a
                                research company with 20,000 employees.
                            </p>
                            <ul style={{ padding: "0 40px" }}>
                                <li>
                                    Worked with SharePoint Platform to create Team site user-friendly
                                    applications creating an infrastructure for ease in corporate
                                    project communications across departments.
                                </li>
                                <li>
                                    Maintained and continually enhanced intranet web sites without
                                    management supervision. Refreshed the looks and recreated some of
                                    the training web sites, since old technology was used and outdated
                                    data was implemented.
                                </li>
                                <li>Wrote and published weekly newsletters action updates.</li>
                            </ul>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">JANUARY 2010 - FEBRUARY 2012</p>
                        </div>
                    </div>
                </li>
                <li className="timeline-inverted">
                    <div className="timeline-badge">
                        <a>
                            <i className="fa fa-circle invert" id="" />
                        </a>
                    </div>
                    <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>Front-End Web Developer - UI/UX Designer - IADC</h4>
                        </div>
                        <div className="timeline-body">
                            <p>
                                Responsible for development and support of corporate web sites
                                (IADC, DEA, Careers @ IADC, Drilling Contractor) all running on
                                Joomla CMS.
                            </p>
                            <ul style={{ padding: "0 40px" }}>
                                <li>
                                    Creating quarterly circulation reports based on data mining and
                                    analysis
                                </li>
                                <li>Responsible for subscription for Drilling Contractor</li>
                                <li>
                                    Creating newsletters for Drilling Contractor internationally.
                                </li>
                                <li>Creating Drill Bits newsletters for mobile viewers.</li>
                                <li>
                                    Integration of Subscription form into a web site via MYSQL + PHP
                                    within Joomla.
                                </li>
                            </ul>
                        </div>
                        <div className="timeline-footer">
                            <p className="text-right">JUNE 2006 - DECEMBER 2009</p>
                        </div>
                    </div>
                </li> */}
                <li className="clearfix no-float" />
            </ul>
        </>

    )
}

export default WorkExperienceTimeline