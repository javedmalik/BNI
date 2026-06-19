import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

const CelebratingComponent = dynamic(() => import('@/components/CelebratingComponent'), {  ssr: false});
const OurTeamComponent = dynamic(() => import('@/components/OurTeamComponent'), {  ssr: false});

export default function AboutUs(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: About BNI</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container">   

            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>About BNI</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">About us</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="images/about-banner.png" alt="" /></div> 
            </section>

            <section className="why-bin-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3 order-1 order-lg-2">                           
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#why-us">About us</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#our-core-value">Our Core Values</a>
                                </li>                                
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-history">Our History</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-responsibility">Our Responsibility</a>
                                </li> 
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#our-leadership">Our Leadership</a>
                                </li>                                                              
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                         
                            <div className="tab-content">
                                <div className="active" id="why-us">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">About BNI</h5>
                                        <h1 className="section-title">A Team You Can Rely On</h1>
                                        <p>At Business Needs Inc., we provide IT & workforce solutions, and we are a trusted partner in driving growth and innovation. Since 2004, we have empowered businesses across industries with cutting-edge, customized technology solutions that address today’s unique challenges, from rapid advancements in AI to the pressing demands of the digital age.</p>
                                        <p>Our services encompass IT consulting, staff augmentation, and offshore development centers, backed by deep expertise in information technology, professional staffing, healthcare staffing, contingent workforce solutions, direct hire, and cutting-edge web and mobile app development. Whether you're seeking top-tier tech talent or comprehensive end-to-end IT solutions, our expert team seamlessly connects you with professionals who grasp your most complex challenges. By integrating cutting-edge technology and refined processes, we ensure high-quality delivery that drives efficiency and innovation.</p>
                                        <p>Let’s collaborate to elevate your business with tailored, expert solutions that make an impact. Contact Business Needs Inc. today for a free consultation.</p>
                                        <div className="blue-btn"><Link href="/contact-us.html">Let’s Connect</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-mission-vision-core-wrapper gray-bg">

                <section className="our-mission-wrapper our-vision-wrapper" id="our-core-value">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/our_core_vaues.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">      
                                        <h5 className="section-title-v1">OUR CORE VALUES</h5>
                                        <h1 className="section-title">We foster client-centered partnerships, deliver innovative solutions, and uphold excellence, agility, diversity, and inclusion</h1>
                                        <p>We are rooted in kindness, trust, and respect — prioritizing long-term partnerships where your goals become our mission.</p>
                                        <p>Driven by a commitment to innovation, we stay ahead of the curve. From embracing cutting-edge technologies like AI to proactively researching emerging trends, we deliver forward-thinking results.</p>
                                        <p>Whether it’s staffing, consulting, or web development, we are committed to delivering exceptional quality—on time, on target, and with precision.</p>
                                        <p>In today’s fast-paced, ever-evolving tech landscape, we continuously learn, adapt, and deliver. Business Needs Inc. evolves with your needs, ensuring you always stay ahead.</p>
                                        <p>We believe in the power of diverse perspectives. By fostering an inclusive culture within our team and the talent we deliver, we bring richer ideas and stronger outcomes to the table.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-5">
                                    <div className="mission-img wow fadeInLeft"><img src="./images/Our-mission-01.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-7">
                                    <div className="mission-content wow fadeInUp">                                        
                                        <h5 className="section-title-v1">OUR VISION</h5>
                                        <h1 className="section-title">Igniting Inspiration, Creating Opportunities, Driving Innovation, Inspiring Growth and Building Trust</h1>
                                        <p>At Business Needs, we're committed to igniting inspiration, driving innovation and creating economic opportunities for everyone. We fulfill all your business needs not through a single service or product, but by becoming your trusted partner—your right hand and shoulder to lean on for every complex challenge. From comprehensive staffing solutions to end-to-end app development, we cover it all from inception to delivery.</p>
                                        <p>Our vision is to empower your success by blending creativity, expertise, and unwavering support, paving the path toward a future of limitless possibilities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper our-vision-wrapper">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/our-vision-01.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">  
                                        <h5 className="section-title-v1">OUR MISSION</h5>
                                        <h1 className="section-title">Empowering Businesses, Increasing Efficiency, Delivering Excellence, and Fostering Long-Term Success</h1>
                                        <p>At Business Needs, we are committed to delivering innovative and scalable IT and staffing solutions that propel business growth and success. By fostering trusted partnerships, we empower our clients in each venture, providing them with high-quality delivery, dependable support, and measurable impact.</p>
                                        <p>Our mission is to equip businesses with the right talent and cutting-edge technology to drive efficiency, innovation, and long-term success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="celebrating-wrapper">
                <div className="container">
                    <CelebratingComponent />
                </div>
            </section>    

            {
                /*
                <section className="timeline-wrapper" id="our-history">
                        <div className="container">
                            <h5 className="section-title-v1">TIMELINE</h5>
                            <h1 className="section-title">Our History</h1>
                            <section className="cd-horizontal-timeline">
                                <div className="timeline">
                                    <div className="events-wrapper">
                                        <div className="events">
                                            <ol>
                                                <li><a href="#0" data-date="07/06/2024" className="selected">20<span>24</span></a></li>
                                                <li><a href="#0" data-date="07/06/2023">20<span>23</span></a></li>
                                                <li><a href="#0" data-date="20/04/2022">20<span>22</span></a></li>	
                                                <li><a href="#0" data-date="20/04/2021">20<span>21</span></a></li>							
                                            </ol>

                                            <span className="filling-line" aria-hidden="true"></span>
                                        </div>
                                    </div> 
                                        
                                    <ul className="cd-timeline-navigation">
                                        <li><a href="#0" className="prev inactive"><i className="fa fa-angle-up" aria-hidden="true"></i></a></li>
                                        <li><a href="#0" className="next"><i className="fa fa-angle-down" aria-hidden="true"></i></a></li>
                                    </ul> 
                                </div> 

                                <div className="events-content">
                                    <ol>
                                        <li className="selected" data-date="07/06/2024">
                                            <h6>January, 2024</h6>
                                            <div className="timeline-img"><img src="images/timeline-img.png" alt="" /></div>
                                            <h3>ONPOINT SOLUTION ai</h3>
                                            <p>Smart Mobility</p>
                                            <p>Fleet Telemetry, efficiancy and safety</p>
                                        </li>

                                        <li data-date="07/06/2023">
                                            <h6>January, 2023</h6>
                                            <div className="timeline-img"><img src="images/timeline-img.png" alt="" /></div>
                                            <h3>HARSHU INC.</h3>
                                            <p>Biodegradable Tableware</p>
                                            <p>Environment friendly products</p>
                                        </li>

                                        <li data-date="20/04/2022">
                                            <h6>January, 2022</h6>
                                            <div className="timeline-img"><img src="images/timeline-img.png" alt="" /></div>
                                            <h3>RIYU INC.</h3>
                                            <p>Athletic Clothing</p>
                                            <p>Women and Men casual wear</p>
                                        </li>

                                        <li data-date="20/04/2021">
                                            <h6>January, 2021</h6>
                                            <div className="timeline-img"><img src="images/timeline-img.png" alt="" /></div>
                                            <h3>RIYU INC.</h3>
                                            <p>Athletic Clothing</p>
                                            <p>Women and Men casual wear</p>
                                        </li>
                                        
                                    </ol>
                                </div> 
                            </section>
                        </div>
                    </section>   
                */
            }        

            <section className="timeline-wrapper" id="our-history">
                <div className="container">                    
                    <h1 className="section-title text-center">Our History</h1>
                     <div className="timeline-main-img"><img src="images/company-milestones.jpg" alt="" /></div>
                </div>
            </section> 

                     

            <section className="our-responsibility-wrapper gray-bg" id="our-responsibility">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="our-responsibility-content wow fadeInUp">
                                <h5 className="section-title-v1">Our Responsibility</h5>
                                <h1 className="section-title">Our Commitment to Sustainability and Social Responsibility</h1>
                                <div className="content">
                                    <p>BNI has always been committed to doing what’s right – for our colleagues, our client partners, and our communities. We pride ourselves on our dedication to creating a positive impact on our planet, our communities, and our employees.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="our-responsibility-img wow fadeInUp"><img src="./images/our-responsibility-img.png" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="minority-business-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="certified-minority wow fadeInUp">
                                <div className="minority-img"><img src="./images/mbe-image.png" alt="" /></div>
                                <div className="minority-content">
                                    <h2>Proudly MBE-Certified</h2>
                                    <p>As a certified Minority Business Enterprise (MBE), we’re proud to contribute to supplier diversity initiatives across the U.S. Our certification reflects our commitment to inclusion and helps our clients meet diversity goals while gaining access to exceptional IT talent.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="certified-minority wow fadeInUp" data-wow-delay="0.1s">
                                <div className="minority-img"><img src="./images/alka.png" alt="" /></div>
                                <div className="minority-content">
                                    <h2>ALKA: Aware. Learn. Know. Apply.</h2>
                                    <p>At ALKA, our Vision is “to see the world as it is, and the audacity to envision the world for what it could be.”</p>
                                    <p>Our mission is “to bring awareness to through education for brighter future and bring cultural values to lighten people’s outlook.”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="our-team-wrapper" id="our-leadership">
                <div className="container">
                    <h5 className="section-title-v1 wow fadeInUp">Our Leadership Team</h5>                                 
                    <OurTeamComponent />
                </div>
            </section>  

            <HelpWrapperComponent />
           
        </div>

        </>
    )
}