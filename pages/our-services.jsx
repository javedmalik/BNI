
"use client"
import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

const CaseStudySliderComponent = dynamic(() => import('@/components/CaseStudySliderComponent'), {  ssr: false});

export default function OurServices(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Our Services</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container"> 
             
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Our Services</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Our Services</li>
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
                                        <h1 className="section-title">Empowering Global Businesses: Tailored IT & Talent Solutions for Dynamic Growth</h1>
                                        <p>At Business Needs Inc., we specialize in cutting-edge Information Technology Services and Strategic Talent Solutions, empowering companies worldwide. We recognize that every client is unique—there is no one-size-fits-all approach in the dynamic world of technology.</p>
                                        <p>With a commitment to innovation, precision, and excellence, we help companies to accelerate business growth and success. From IT consulting and app development to global staffing and workforce solutions, our services are tailored to meet your specific needs. Our seasoned experts bring the right tools, talent, and strategies to deliver tangible, measurable results, helping you thrive in an ever-evolving business landscape. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-core-services gray-bg" id="our-core-services">
                <div className="container">
                    <h5 className="section-title-v1 wow fadeInUp">OUR CORE SERVICES</h5>
                    <h1 className="section-title wow fadeInUp">Talent Solution</h1>
                    <div className="service-end-banner">
                        <div className="content wow fadeInUp" data-wow-delay="0.2s">Build Faster, Hire Smarter - Real Results</div>
                        <div className="img wow fadeInUp"><img src="./images/talent-solution-banner.png" alt="" /></div>
                    </div>
                    <div className="unified-vision-wrapper">
                        <h1 className="wow fadeInUp">A Unified Vision That Caters To Diverse
                        <br/>Industry Demands</h1>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>IT Staffing</h4>
                                        <p>We provide skilled IT professionals specializing across a wide range of technologies like software development, data analytics, cybersecurity, cloud computing, and more. Whether you need contract, contract-to-hire, or full-time talent, we match you with talented experts ready to help you meet your goals.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/talent-solution.html#it-staffing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Creative and Marketing Staffing</h4>
                                        <p>From graphic designers and copywriters to UX/UI specialists, we help your brand find the professionals who bring your image to life. Our talent pool includes strategic thinkers and hands-on creators involved in branding, crafting content, campaigns, and digital engagement.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/talent-solution.html#creative-marketing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Healthcare Staffing</h4>
                                        <p>We deliver highly qualified healthcare professionals to hospitals, clinics, and other healthcare networks. Our services include staffing for nurses, medical assistants, and other administrative roles. We ensure speed, care, and quality when delivering talent.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/talent-solution.html#healthcare-staffing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>RPO</h4>
                                        <p>Let us manage some or all of your recruitment process. With our RPO services, you gain a reliable partner to handle sourcing, attracting, and onboarding talent. We take tasks off your plate, reducing costs and hiring professional talent on time.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/rpo.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Professional Staffing</h4>
                                        <p>We connect businesses with professionals across industries like finance, administration, HR, customer service, and other functions. We deliver candidates who align with your culture and goals whether you need them long-term or interim support.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/talent-solution.html#professional-staffing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Payroll Services</h4>
                                        <p>Our payroll services simplify your compensation and contract management in compliance with your needs. We take on your administrative burdens like handling payroll, tax filing, and coordinating benefits so that you can focus on running your business.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/payroll-services.html"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Engineering Staffing</h4>
                                        <p>Our engineers bring industry-specific experience and technical expertise to bring your innovations to life. We meet your needs where they are by finding the talent with the right skills and background knowledge to help you close projects.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/talent-solution.html#engineering-staffing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-core-services our-consulting-services">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">IT Consulting Services</h1>
                    <div className="service-end-banner">
                        <div className="content wow fadeInUp" data-wow-delay="0.2s">Strategic IT Consulting: Navigating Complex IT Challenges with Domain Expertise in Mobile, Cloud, and Web Technologies</div>
                        <div className="img wow fadeInUp"><img src="images/it-consulting-services-banner.png" alt="" /></div>
                    </div>
                    <div className="unified-vision-wrapper">
                        <h1 className="wow fadeInUp">Services that transform your business with 
                        <br/>advanced technologies</h1>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Web Application Development</h4>
                                        <p>We design and develop custom web applications that are thorough, user-friendly, and scalable. From internal business insights to customer-facing platforms, we design and build responsive webpages that are tailored to your company’s specific needs.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/it-consulting-services.html#web-application-development"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Digital Marketing</h4>
                                        <p>Our digital marketing consultants help you grow your online presence, drive traffic to your webpage, and convert leads. We offer SEO, social media strategy, email marketing, and automated processes for ease of use. We tailor all our solutions to increase visibility and maximize ROI.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/it-consulting-services.html#digital-marketing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Mobile Applications</h4>
                                        <p>We create custom mobile apps for iOS and Android that provide seamless user experiences and efficient functionality. We build secure and scalable apps that support your business objectives and engage users. We cater to your needs and emphasize quality and user-friendly applications for you and your customers.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/it-consulting-services.html#mobile-applications"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>QA Testing</h4>
                                        <p>Quality is our specialty. Our systematic process ensures your products and services meet specific requirements and standards. Our thorough process prevents defects from reaching users to protect the quality and integrity of your products.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/it-consulting-services.html#qa-testing"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>     

            <section className="our-core-services gray-bg our-offshore-services" >
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Offshore Development Services</h1>
                    <div className="service-end-banner">
                        <div className="content wow fadeInUp" data-wow-delay="0.2s">Expand Your Team, Optimize Costs, and Maximize Productivity with Offshore Resourcing</div>
                        <div className="img wow fadeInUp"><img src="images/offshore-development-services-banner.png" alt="" /></div>
                    </div>
                    <div className="unified-vision-wrapper">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Offshore Development Center</h4>
                                        <p>Expand your team globally with our reliable and cost-effective offshore development solutions. We connect you with top-tier talent and highly skilled professionals across a wide range of technologies, enabling you to scale faster and reduce costs by up to 60–80%, all while maintaining high quality and productivity. Offshoring can seem complicated, but we make it simple by providing teams that work in your time zone, follow agile practices, and integrate seamlessly with your internal team to deliver fast, high-quality results without compromise.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/offshore-development-services.html#offshore-development-center"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="unified-vision wow fadeInUp">
                                    <div className="content">
                                        <h4>Dedicated Team</h4>
                                        <p>Our dedicated team is comprised of experienced professionals who work together exclusively on your project. This model offers greater collaboration, stability, and alignment with your company's goals. You manage the project, and we take administrative tasks off your plate so that you can focus on your bigger vision.</p>
                                    </div>
                                    <div className="icon">
                                        <Link href="/offshore-development-services.html#dedicated-team"><i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  

            <section className="our-strategy-wrapper" id="our-strategy">
                <div className="container">
                    <h5 className="section-title-v1">OUR STRATEGY</h5>
                    <h1 className="section-title wow fadeInUp">Strategy and Execution. Delivered Simultaneously.</h1>
                    <div className="our-strategy-top">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <h2 className="content left-content wow fadeInUp">Expansive Consulting Blended...</h2>
                            </div>
                            <div className="col-12 col-lg-6">
                                <h2 className="content right-content wow fadeInUp">With Agile Delivery</h2>
                            </div>
                        </div>
                    </div>
                    <div className="our-strategy-wrap">
                        <div className="strategy-img wow fadeInUp"><img src="./images/our-strategy-icons.png" alt="" /></div>
                        <div className="strategy-content wow fadeInUp">
                            <div className="content">
                                <h4>Opportunity Identification</h4>
                            </div>
                            <div className="content">
                                <h4>Solution Definition</h4>
                            </div>
                            <div className="content">
                                <h4>Prototype Testing</h4>
                            </div>
                            <div className="content">
                                <h4>MVP</h4>
                            </div>
                            <div className="content">
                                <h4>BETA Release</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
            {
                /*
                <section className="case-study-wrapper gray-bg" id="case-study">
                            <div className="container">
                                <CaseStudySliderComponent />                     
                            </div>
                        </section>

                */
            }
            
            <HelpWrapperComponent />

        </div>

        </>
    )
}