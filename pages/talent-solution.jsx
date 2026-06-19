import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function TalentSolution(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Talent Solutions</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container">   
            
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Our Services</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item"><a href="/">Our Services</a></li>
                            <li className="breadcrumb-item active">Talent Solutions</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="./images/our services-banner.png" alt="" /></div> 
            </section>                     

            <section className="why-bin-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 order-1 order-lg-2">                        
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#what-we-do">What we do</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#our-core-services">Our Core Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-strategy">Our Strategy</a>
                                </li>                                
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                           
                            <div className="tab-content">
                                <div className="active" id="what-we-do">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">WHAT WE DO</h5>
                                        <h1 className="section-title">Build Faster, Hire Smarter - Real Results</h1>
                                        <p>At Business Needs Inc., we specialize in delivering top-tier talent tailored to your business needs. Whether you're looking for contract staff, full-time employees, or project-based consultants, our flexible staffing solutions ensure you get the right talent at the right time—without the hiring hassle.</p>
                                        <p>With expertise across industries and technologies, our staffing solutions are built for speed, quality, and long-term impact. From early-stage startups to Fortune 500 enterprises, our clients rely on us for dependable, qualified consultants ready to make an impact from day one.</p>
                                        <p>Let us help you build a stronger, more agile team—backed by people who care about results. </p>  
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     

            <section className="why-choose-wrapper our-value-wrapper">
                <div className="container-fluid">
                    <div className="why-choose">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="choose-content">
                                    <h1 className="section-title wow fadeInUp"> Our Value Proposition </h1>
                                    <p className='section-top-content wow fadeInUp'>At Business Needs Inc., we bring more than just talent. We bring a partnership built on trust, speed, and precision. Here's what sets us apart:</p>
                                    <ul className="custom-list">
                                        <li className="wow fadeInUp">                                           
                                            <p>Dedicated Account Manager (Single Point of Contact) for consistent, streamlined communication</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.2s">                                           
                                            <p>In-house technical and business experts ensure every candidate is vetted for quality</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.4s">                                           
                                            <p>Nationwide Reach with Local Expertise to support clients across geographies</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.6s">                                          
                                            <p>Automated & Scalable Recruitment Processes for efficiency and faster delivery</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.6s">                                           
                                            <p>Customized Performance Metrics tailored to your project and team goals</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.6s">                                           
                                            <p>Flexible delivery and pricing models to fit your project and budget</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.6s">                                           
                                            <p>Specialized Sourcing Teams with domain-specific recruiters</p>
                                        </li>
                                        <li className="wow fadeInUp" data-wow-delay="0.6s">                                           
                                            <p>Employee Care Program to support consultant engagement, retention, and performance</p>
                                        </li>
                                    </ul>
                                    <p className='section-top-content wow fadeInUp'>We’re not just filling roles. We’re building teams that move your business forward.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="choose-image wow fadeInUp"><img src="./images/value-prepos.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
                   

            <section className="our-mission-vision-core-wrapper gray-bg" id="our-core-services">                  
                <section className="our-mission-wrapper our-vision-wrapper" id="it-staffing">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/itstaffing.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h1 className="section-title">Our Core Services</h1>
                                        <h5 className="section-title-v1">IT Staffing Services</h5>                                        
                                        <p>We offer flexible, scalable IT staffing solutions tailored to your specific business requirements. Whether you're looking to fill a single role or build an entire team. Our staffing model is designed to reduce time-to-hire, ensure technical precision, and support long-term success.</p>
                                        <p>Roles We support but not limited to:</p>
                                        <ul>
                                            <li>· <b>Software & Web Development:</b> Frontend (React, Angular, Vue.js), Backend (Java, Python, .NET, Node.js), Full-Stack Engineers</li>
                                            <li>· <b>Cloud & DevOps:</b> AWS, Azure, & GCP Engineers, DevOps & SRE Specialists, Cloud Architects</li>
                                            <li>· <b>Data & Analytics:</b> Data Engineers/Scientists, BI Developers, Snowflake/Power BI/Tableau Experts</li>
                                            <li>· <b>Quality Assurance & Testing:</b> Manual & Automation Testers, QA Engineers, Performance & Security Testers</li>
                                            <li>· <b>Mobile Development:</b> Android & iOS Developers, Flutter & React Native Engineers</li>
                                            <li>· <b>Enterprise Systems & Integrations:</b> Salesforce Consultants, SAP/Oracle/Workday Professionals, System Integrators</li>
                                            <li>· <b>IT Infrastructure & Support:</b> Network/System Administrators, Helpdesk, IT Security Analysts</li>
                                            <li>· <b>Project & Program Management:</b> Agile Project Managers, Scrum Masters, Business Analysts</li>
                                        </ul>
                                        <p>With our proactive recruiting engine and a curated bench of 200+ consultants, we can deliver talent aligned with your tech stack, timelines, and culture on demand.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper" id="creative-marketing">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-5">
                                    <div className="mission-img wow fadeInLeft"><img src="./images/creative_and_marketing_staffing.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-7">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">Creative & Marketing Staffing Services</h5>                                    
                                        <p>We help brands tell compelling stories and connect with their audiences by providing top-tier creative and marketing talent. Whether you need short-term creative support or long-term marketing leadership, we deliver professionals who bring ideas to life and drive results.</p>
                                        <p>We cover roles including:</p>
                                            <ul>
                                                <li>· Graphic Designers & Art Directors</li>
                                                <li>· UX/UI Designers</li>
                                                <li>· Content Writers & Copywriters </li>
                                                <li>· Marketing Managers & Coordinators</li>
                                                <li>· Digital Marketing Specialists (SEO, SEM, Email, PPC)</li>
                                                <li>· Brand Strategists</li>
                                                <li>· Social Media Managers</li>
                                                <li>· Creative Project Managers</li>
                                                <li>· Web & Visual Designers</li>
                                            </ul>
                                        <p>From product launches to brand revamps, we help you build teams that create, engage, and convert.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper our-vision-wrapper" id="healthcare-staffing">
                        <div className="container">
                            <div className="our-mission">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                        <div className="mission-img wow fadeInRight"><img src="./images/healthcare_staffing.png" alt="" /></div>
                                    </div>
                                    <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                        <div className="mission-content wow fadeInUp">
                                            <h5 className="section-title-v1">Healthcare Staffing Services</h5>                                        
                                            <p>We understand the critical need for skilled healthcare professionals who can deliver quality care while supporting complex healthcare operations. Our healthcare staffing solutions are tailored to meet the dynamic demands of hospitals, clinics, and healthcare providers across the U.S.</p>
                                            <p>We place certified, compassionate, and experienced talent in roles such as:</p>
                                            <ul>
                                                <li>· Registered Nurses (RNs)</li>
                                                <li>· Licensed Practical Nurses (LPNs)</li>
                                                <li>· Medical Assistants</li>
                                                <li>· Radiologic and Imaging Technicians</li>
                                                <li>· Health Information Technicians</li>
                                                <li>· Medical Billing and Coding Specialists</li>
                                                <li>· Healthcare IT Analysts</li>
                                                <li>· Clinical Project Managers</li>
                                                <li>· Case Managers and Utilization Review Nurses</li>
                                            </ul>
                                            <p>Whether you need per-dem, contract, contract-to-hire, or permanent placements, we deliver with the right professionals. Let us help you maintain continuity of care and operational excellence with top-tier healthcare talent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                

                <section className="our-mission-wrapper" id="engineering-staffing">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-5">
                                    <div className="mission-img wow fadeInLeft"><img src="./images/engineering-staffing.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-7">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">Engineering Staffing Services</h5>                                        
                                        <p>We deliver high-performing engineering talent that drives innovation and operational excellence. Our team understands the nuances of engineering disciplines and sources professionals who bring both technical expertise and hands-on experience.</p>
                                        <p>We support a wide range of roles across industries, including:</p>
                                        <ul>
                                            <li>· Mechanical Engineers</li>
                                            <li>· Electrical Engineers</li>
                                            <li>· Civil & Structural Engineers </li>
                                            <li>· Manufacturing & Industrial Engineers </li>
                                            <li>· Process & Quality Engineers </li>
                                            <li>· Design Engineers (CAD, SolidWorks, AutoCAD)</li>
                                            <li>· Engineering Project Managers</li>
                                            <li>· Systems & Controls Engineers</li>
                                            <li>· Environmental Engineers </li>
                                        </ul>
                                        <p>Whether you're scaling a new product line or modernizing infrastructure, we connect you with the engineers who will get the job done on time and on budget.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 

                            

                <section className="our-mission-wrapper our-vision-wrapper" id="professional-staffing">
                        <div className="container">
                            <div className="our-mission">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                        <div className="mission-img wow fadeInRight"><img src="./images/pofessional_staffing.png" alt="" /></div>
                                    </div>
                                    <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                        <div className="mission-content wow fadeInUp">
                                            <h5 className="section-title-v1">Professional Staffing Services</h5>                                        
                                            <p>We extend our staffing expertise beyond IT to offer high-quality professional staffing solutions across business functions. Our recruitment specialists match you with professionals who bring the right blend of skills, experience, and cultural fit, ensuring your business runs smoothly and efficiently.</p>
                                            <p>We cover a wide range of roles including:</p>
                                            <ul>
                                                <li>· Administrative Assistants & Executive Assistants</li>
                                                <li>· HR Specialists & Recruiters</li>
                                                <li>· Finance & Accounting Professionals</li>
                                                <li>· Project & Program Managers </li>
                                                <li>· Customer Service Representatives</li>
                                                <li>· Procurement & Supply Chain Specialists</li>    
                                                <li>· Operations Managers</li> 
                                                <li>· Compliance & Risk Analysts</li>                                           
                                            </ul>
                                            <p>Whether you need support for back-office operations, project oversight, or customer-facing roles, we provide reliable talent to keep your organization moving forward.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
            </section>                     

            <section className="talent-staffing-wrapper" id="our-strategy">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Our Staffing Model</h1>
                    <div className="talent-staffing">
                        <div className="talent-box wow fadeInUp">
                            <div className="talent-head">
                                <div className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <h4>Contract & Contract-to-Hire Staffing</h4>
                            </div>
                            <div className="talent-content">Need skilled professionals on short notice for temporary or trial periods? Our contract and contract-to-hire staffing solutions let you scale your team quickly and adapt to changing project needs—without long-term commitments.</div>
                        </div>
                        <div className="talent-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="talent-head">
                                <div className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <h4>Full-Time (Direct Hire) Recruitment</h4>
                            </div>
                            <div className="talent-content">When it’s time to make permanent additions to your team, we help you find the right cultural and technical fit. Our proven recruitment process identifies top talent who are ready to grow with your organization.</div>
                        </div>
                        <div className="talent-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="talent-head">
                                <div className="icon"><i className="fa fa-user-o" aria-hidden="true"></i></div>
                                <h4>Project-Based Staffing</h4>
                            </div>
                            <div className="talent-content">For time-bound initiatives, we offer project-based staffing that aligns talent with your goals. Whether it’s launching a new app or migrating to the cloud, we provide experienced specialists to execute your vision.</div>
                        </div>
                    </div>
                </div>
            </section>            

            <HelpWrapperComponent />

        </div>

        </>
    )
}