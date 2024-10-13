import ExperienceCard from '@/components/elements/ExperienceCard'
import ProfileCard from '@/components/elements/ProfileCard'
import React from 'react'

const HomePage = () => {
    return (
        <section className="home-area">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4">
                        <ProfileCard />
                    </div>
                    <div className="col-xl-4">
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <ExperienceCard />
                            </div>
                            <div className="col-lg-12">
                                <div className="card expertise-card">
                                    <div className="card-body">
                                        <h3 className="card-title">My Expert Area</h3>
                                        <div className="expertise-main mt-24">
                                            <div className="row g-3">
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="expertise-item">
                                                        <div className="image text-center">
                                                            <img src="assets/img/icons/figma.svg" alt="figma" />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="title">Figma</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="expertise-item">
                                                        <div className="image text-center">
                                                            <img src="assets/img/icons/notion.svg" alt="notion" />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="title">Notion</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="expertise-item">
                                                        <div className="image text-center">
                                                            <img src="assets/img/icons/mico.svg" alt="micro" />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="title">Miro</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="expertise-item">
                                                        <div className="image text-center">
                                                            <img src="assets/img/icons/framer.svg" alt="framer" />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="title">Framer</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="expertise-item">
                                                        <div className="image text-center">
                                                            <img
                                                                src="assets/img/icons/webflow.svg"
                                                                alt="webflow"
                                                            />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="title">Webflow</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 col-md-4 col-sm-6 col-6">
                                                    <div className="expertise-item">
                                                        <div className="image text-center">
                                                            <img src="assets/img/icons/zeplin.svg" alt="zeplin" />
                                                        </div>
                                                        <div className="text">
                                                            <h4 className="title">Zeplin</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card card-projects">
                            <div className="card-body">
                                <h3 className="card-title">
                                    Recent Projects{" "}
                                    <a className="link-btn" href="portfolio.html">
                                        All Projects
                                        <svg
                                            className="icon"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.16699 10H15.8337"
                                                stroke="#4770FF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.833 15L15.833 10"
                                                stroke="#4770FF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.833 5L15.833 10"
                                                stroke="#4770FF"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                </h3>
                                <div className="projects-main mt-24">
                                    <div className="row g-4 parent-container">
                                        <div className="col-lg-12">
                                            <div className="project-item">
                                                <div className="image">
                                                    <img
                                                        src="assets/img/projects/project-1.png"
                                                        alt="project-1"
                                                        className="img-fluid w-100"
                                                    />
                                                    <a
                                                        href="assets/img/projects/project-1.png"
                                                        className="gallery-popup full-image-preview parent-container"
                                                    >
                                                        <svg
                                                            className="icon"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        >
                                                            <path d="M10 4.167v11.666M4.167 10h11.666" />
                                                        </svg>
                                                    </a>
                                                    <div className="info">
                                                        <span className="category">Product Design</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="project-item">
                                                <div className="image">
                                                    <img
                                                        src="assets/img/projects/project-2.png"
                                                        alt="project-2"
                                                        className="img-fluid w-100"
                                                    />
                                                    <a
                                                        href="assets/img/projects/project-2.png"
                                                        className="gallery-popup full-image-preview parent-container"
                                                    >
                                                        <svg
                                                            className="icon"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                        >
                                                            <path d="M10 4.167v11.666M4.167 10h11.666" />
                                                        </svg>
                                                    </a>
                                                    <div className="info">
                                                        <span className="category">Product Design</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services-area mt-24">
                    <div className="row g-4">
                        <div className="col-xl-8">
                            <div className="card services-card">
                                <div className="card-body">
                                    <h3 className="card-title">
                                        Services I Offered
                                        <a className="link-btn" href="services.html">
                                            {" "}
                                            See All Services
                                            <svg
                                                className="icon"
                                                width={20}
                                                height={20}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M4.16699 10H15.8337"
                                                    stroke="#4770FF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.833 15L15.833 10"
                                                    stroke="#4770FF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M10.833 5L15.833 10"
                                                    stroke="#4770FF"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </h3>
                                    <div className="services-main mt-24">
                                        <div className="row g-4">
                                            <div className="col-md-3 col-sm-6 col-6">
                                                <div className="services-item text-center">
                                                    <div className="image">
                                                        <img src="assets/img/icons/ui-ux.svg" alt="ui-ux" />
                                                    </div>
                                                    <div className="text">
                                                        <h3 className="title">UI UX Design</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-6">
                                                <div className="services-item text-center">
                                                    <div className="image">
                                                        <img src="assets/img/icons/app.svg" alt="app" />
                                                    </div>
                                                    <div className="text">
                                                        <h3 className="title">Mobile App</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-6">
                                                <div className="services-item text-center">
                                                    <div className="image">
                                                        <img
                                                            src="assets/img/icons/prd-design.svg"
                                                            alt="prd-design"
                                                        />
                                                    </div>
                                                    <div className="text">
                                                        <h3 className="title">Product Design</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-sm-6 col-6">
                                                <div className="services-item text-center">
                                                    <div className="image">
                                                        <img
                                                            src="assets/img/icons/branding.svg"
                                                            alt="branding"
                                                        />
                                                    </div>
                                                    <div className="text">
                                                        <h3 className="title">Branding</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card lets-talk-together-card">
                                <div className="card-body">
                                    <div className="scrolling-info">
                                        <div className="slider-item">
                                            <p>
                                                Available For Hire 🚀 Crafting Digital Experiences 🎨
                                                Available For Hire 🚀 Crafting Digital Experiences 🎨
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className="card-title">
                                        Let's👋
                                        <span className="d-block">Work Together</span>
                                    </h3>
                                    <a className="link-btn" href="contact.html">
                                        {" "}
                                        Let's Talk
                                        <svg
                                            className="icon"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.5 11.6665V6.6665H12.5"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M17.5 6.6665L10 14.1665L2.5 6.6665"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomePage