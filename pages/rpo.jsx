import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function TalentSolution(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Recruitment Process Outsourcing (RPO)</title>
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
                            <li className="breadcrumb-item active">RPO</li>
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
                                <a className="nav-link" data-bs-toggle="tab" href="#our-core-services">Our Core Solutions</a>
                                </li>                                                            
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                           
                            <div className="tab-content">
                                <div className="active" id="what-we-do">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">WHAT WE DO</h5>
                                         <h1 className="section-title">Right Talent, Right Time, Real Results</h1>
                                        <p>At BNI, we simplify and strengthen your recruitment process through agile, end-to-end RPO solutions tailored to your business goals. From crafting job requisitions to onboarding the right talent, we manage every step with precision, speed, and compliance. Our domain-specialized recruiters, deep talent networks, and robust analytics ensure that you attract, engage, and hire the best-fit candidates—faster and smarter. Whether it’s full-cycle recruitment or targeted support, we act as an extension of your team to scale your hiring efficiently and cost-effectively.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="our-mission-vision-core-wrapper gray-bg" id="our-core-services">
                <section className="our-mission-wrapper our-vision-wrapper" id="offshore-development-center">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/rpo.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h1 className="section-title">Our Core Solutions</h1>
                                        <h5 className="section-title-v1">Recruitment Process Outsourcing (RPO)</h5>                                        
                                       <p><b>Streamlining Your Talent Acquisition with Scalable RPO Solutions</b></p>                                
                                        <p>Our RPO services are designed to take the complexity out of recruitment so you can focus on what matters most - growing your business. Whether you need full-cycle recruitment or support for a specific part of your hiring process, we provide flexible, scalable solutions customized to your talent goals.</p>
                                        <p><b>Our RPO Capabilities Include:</b></p>   
                                         <ul>
                                            <li>· <b>Job Requisition Management:</b> Helping define roles, skills, and requirements aligned with your business needs.</li>
                                            <li>· <b>Sourcing & Screening:</b> Leveraging our extensive talent network, domain-specific recruiters, and in-house technical panels to identify the best candidates.</li>
                                            <li>· <b>Interview Coordination & Offer Management:</b> Managing logistics, feedback loops, and negotiations to accelerate hiring decisions.</li>
                                            <li>· <b>Onboarding & Compliance:</b> Ensuring seamless integration of new hires while maintaining full compliance with labor laws and internal policies.</li>
                                            <li>· <b>Employer Branding Support:</b> Enhancing your visibility in the market to attract top-tier candidates.</li>
                                            <li>· <b>Analytics & Reporting:</b> Providing detailed metrics to continuously refine hiring strategy and improve performance.</li>                                                
                                        </ul>
                                        <p>Whether you're scaling quickly or facing high-volume hiring demands, our RPO model offers cost-effective, high-impact talent acquisition—powered by industry expertise and real-time insights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>                
            </section>  

            <HelpWrapperComponent />

        </div>        

        </>
    )
}