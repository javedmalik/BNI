import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function TalentSolution(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc</title>
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
                            <li className="breadcrumb-item active">IT Consulting Services</li>
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
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                           
                            <div className="tab-content">
                                <div className="active" id="what-we-do">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">WHAT WE DO</h5>
                                        <h1 className="section-title">Strategic IT Consulting: Navigating Complex IT Challenges with Domain Expertise in Mobile, Cloud, and Web Technologies</h1>
                                        <p>We provide tailored IT consulting services that help businesses navigate complex technology challenges and accelerate growth. From strategic planning to implementation, our consultants bring deep domain expertise across software development, cloud infrastructure, data solutions, and enterprise systems—empowering you to make smarter decisions and drive lasting impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>           

            <section className="our-mission-vision-core-wrapper gray-bg" id="our-core-services">
                <section className="our-mission-wrapper our-vision-wrapper" id="web-application-development">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/web_applications.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h1 className="section-title">Our Core Services</h1>
                                        <h5 className="section-title-v1">Web Application Development</h5>                                        
                                        <p>We specialize in designing and developing high-performance web applications that are robust, user-friendly, and scalable to meet diverse business needs. Whether you're looking for internal business intelligence platforms, enterprise portals, or customer-facing digital experiences, we craft solutions that align seamlessly with your company’s vision and technical requirements.</p>
                                        <p>By leveraging a cutting-edge tech stack, we build applications that integrate effortlessly with existing infrastructure while delivering outstanding user experience.</p>
                                        <p>Technologies We Cover:</p>
                                        <ul>
                                            <li>· <b>Frontend:</b> React.js, Angular, Vue.js, Next.js</li>
                                            <li>· <b>Backend:</b> Node.js, Python (Django, Flask), Java (Spring Boot), .NET</li>
                                            <li>· <b>Cloud & DevOps:</b> AWS, Azure, Google Cloud Platform (GCP), Kubernetes, Docker</li>
                                            <li>· <b>Databases:</b> PostgreSQL, MySQL, MongoDB, Snowflake</li>
                                            <li>· <b>APIs & Security:</b> REST, GraphQL, OAuth, JWT</li>
                                            <li>· <b>Enterprise Integrations:</b> Salesforce, SAP, Oracle</li>
                                        </ul>
                                        <p>Whether you need a full-stack solution, cloud-native applications, or custom integrations, we provide the expertise needed to bring your vision to life.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper" id="mobile-applications">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-5">
                                    <div className="mission-img wow fadeInLeft"><img src="./images/mobile_applications.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-7">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">Mobile Applications</h5>                                    
                                        <p>We specialize in creating custom mobile applications for iOS and Android, delivering seamless user experiences with high-performance functionality. Our approach prioritizes security, scalability, and efficiency, ensuring that your mobile app not only meets business objectives but also captivates users with intuitive design and smooth performance.</p>
                                        <p>From native and hybrid app development to cross-platform solutions, our expert team leverages the latest mobile tech stack to build robust applications that align with your specific needs:</p>
                                        <ul>
                                            <li>· <b>iOS Development:</b> Swift, Objective-C </li>
                                            <li>· <b>Android Development:</b> Kotlin, Java </li>
                                            <li>· <b>Cross-Platform Development:</b> Flutter, React Native </li>
                                            <li>· <b>Backend & APIs:</b> Firebase, GraphQL, RESTful APIs </li>
                                            <li>· <b>UI/UX Design:</b> Figma, Adobe XD, Material Design, Human Interface Guidelines </li>
                                            <li>· <b>Cloud & DevOps:</b> AWS, Azure, Google Cloud, CI/CD Pipelines </li>
                                            <li>· <b>Security & Compliance:</b> OAuth, JWT, GDPR Compliance, Secure Authentication </li>
                                        </ul>
                                        <p>Let’s craft a mobile experience that elevates your business and engages users effectively!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper our-vision-wrapper" id="digital-marketing">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/digital_marketing.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">Digital Marketing</h5>                                        
                                        <p>Our expert digital marketing consultants help businesses amplify their online presence and drive targeted traffic. We deliver data-driven strategies designed to enhance visibility, engage audiences, and maximize ROI. We craft customized digital marketing strategies tailored to your business goals that cover everything from SEO optimization to advanced automation, ensuring seamless execution and measurable success.</p>
                                        <p>Technologies & Platforms We Utilize:</p>
                                        <ul>
                                            <li>· <b>Search Engine Optimization (SEO):</b> Google Search Console, Ahrefs, SEMrush, Moz, Yoast SEO</li>
                                            <li>· <b>Pay-Per-Click (PPC) Advertising:</b> Google Ads, Microsoft Advertising, Meta Ads, LinkedIn Ads</li>
                                            <li>· <b>Social Media Strategy & Management:</b> Facebook, Instagram, LinkedIn, Twitter (X), TikTok, Hootsuite, Buffer</li>
                                            <li>· <b>Content Marketing:</b> WordPress, HubSpot, Grammarly, Surfer SEO</li>
                                            <li>· <b>Email Marketing & Automation:</b> Mailchimp, ActiveCampaign, SendGrid, Klaviyo, Pardot</li>
                                            <li>· <b>Marketing Automation & CRM:</b> HubSpot, Salesforce, Zoho, Marketo</li>
                                            <li>· <b>Data & Analytics:</b> Google Analytics, Google Tag Manager, Power BI, Tableau, Looker Studio</li>
                                            <li>· <b>Conversion Rate Optimization (CRO):</b> A/B Testing, Hotjar, Crazy Egg, Optimizely</li>
                                        </ul>
                                        <p>By leveraging cutting-edge tools and innovative approaches, we ensure measurable impact, sustained growth, and competitive advantage in the digital space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper" id="qa-testing">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-5">
                                    <div className="mission-img wow fadeInLeft"><img src="./images/qa_testing.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-7">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">QA Testing</h5>                                    
                                        <p>Quality is at the core of everything we do. Our comprehensive testing strategies ensure that products meet industry standards, performance benchmarks, and security requirements while delivering a seamless user experience. We utilize modern automation, manual testing methodologies, and advanced analytics to detect defects early and maintain the integrity of your software.</p>
                                        <p>Automation Testing & Tools:</p>
                                        <ul>
                                            <li>· <b>Frameworks:</b> Selenium, Cypress, Playwright, Appium</li>
                                            <li>· <b>Test Management:</b> TestRail, Zephyr, QMetry</li>
                                            <li>· <b>CI/CD Integration:</b> Jenkins, GitHub Actions, CircleCI, Azure DevOps</li>
                                            <li>· <b>Performance & Load Testing:</b> JMeter, Gatling, LoadRunner</li>
                                            <li>· <b>API Testing:</b> Postman, RestAssured, SoapUI</li>
                                        </ul>
                                        <p>Manual Testing & Tools:</p>
                                        <ul>
                                            <li>· <b>Bug Tracking & Collaboration:</b> Jira, Bugzilla, Trello</li>
                                            <li>· <b>Exploratory & Ad-Hoc Testing:</b> Session-based Test Management</li>
                                            <li>· <b>Cross-Browser Testing:</b> BrowserStack, LambdaTest</li>
                                            <li>· <b>Mobile Testing:</b> Xcode, Android Studio, Firebase Test Lab</li>
                                        </ul>
                                        <p>Our thorough and strategic QA process ensures high-performance software, defect prevention, and security assurance, giving you confidence in every deployment. Let’s make your applications resilient, reliable, and ready for success!</p>
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