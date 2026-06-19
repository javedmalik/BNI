import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function TalentSolution(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Payroll Services</title>
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
                            <li className="breadcrumb-item active">Payroll Services</li>
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
                                         <h1 className="section-title">Where Accuracy Meets Efficiency in Payroll</h1>
                                        <p>We take the complexity out of payroll so you can focus on managing your workforce—not paperwork. Our Payroll Services ensure accurate, compliant, and timely compensation for employees, contractors, and remote teams across the U.S. From onboarding and worker classification to tax filing and benefits coordination, we handle every detail with precision and confidentiality. Whether you need full-service payroll or just specific support, we deliver streamlined solutions that scale with your business—ensuring peace of mind and operational efficiency.</p>
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
                                    <div className="mission-img wow fadeInRight"><img src="./images/payroll_services.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h1 className="section-title">Our Core Solutions</h1>
                                        <h5 className="section-title-v1">Payroll Services</h5>                                        
                                        <p><b>Simplify Compliance and Compensation with Trusted Payroll Solutions</b></p>                                
                                        <p>Our Payroll Services are designed to relieve the administrative burden of employee compensation while ensuring compliance with federal, state, and local regulations. Whether you're managing a contingent workforce, independent contractors, or remote employees across the U.S., we provide seamless payroll processing with accuracy, transparency, and speed.</p>
                                        <p><b>Our Payroll Services Cover:</b></p>     
                                        <ul>
                                            <li>· <b>Onboarding & Documentation:</b> Complete handling of employment documentation, eligibility checks, and policy acknowledgment.</li>
                                            <li>· <b>Payroll Administration:</b> Timely and accurate processing of wages, reimbursements, taxes, and deductions.</li>
                                            <li>· <b>Tax Withholding & Filing:</b> Federal, state, and local tax calculations, filings, and compliance.</li>
                                            <li>· <b>Employee Benefits Coordination:</b> Optional management of health insurance, PTO, and 401(k) contributions (as applicable).</li>
                                            <li>· <b>Worker Classification & Compliance:</b> Support for W-2 and 1099 worker classification and audit-proof recordkeeping.</li>
                                            <li>· <b>Reporting & Analytics:</b> Access to real-time payroll data and customized reports for better workforce visibility.</li>                                                
                                        </ul>
                                        <p>Our white-labeled payroll services allow clients to retain control over talent while outsourcing the complexity. Let us take care of the paperwork while you focus on productivity and performance.</p>
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