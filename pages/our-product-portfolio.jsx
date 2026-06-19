import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import HelpWrapperComponent from '../components/HelpWrapperComponent';

export default function OurProductPortfolio(){   
    
    return(
        <>
        <Head>
            <title>Business Needs Inc: Our Product Portfolio</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-container">   
            
            <section className="inner-banner-wrapper who-we-are-banner">
                <div className="inner-banner-content wow fadeInUp">
                    <h1>Our Product Portfolio</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>                           
                            <li className="breadcrumb-item active">Our Product Portfolio</li>
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
                                <a className="nav-link active" data-bs-toggle="tab" href="#onpoint-solution">Onpoint Solution</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#onpoint-scheduling">Onpoint Scheduling</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#onpoint-health-care">Restaurant Application</a>
                                </li>                                
                            </ul>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 order-2 order-lg-1">                           
                            <div className="tab-content">
                                <div className="active" id="what-we-do">
                                    <div className="why-bin-content">
                                        <h5 className="section-title-v1">Our Product Portfolio</h5>
                                        <h1 className="section-title">Full-Stack Innovation at Work</h1>
                                        <p>Our software is built to solve real-world challenges with precision, speed, and scalability. Whether you're streamlining operations, engaging customers, or launching new services, we design and develop tailored software that fits your exact needs. From intuitive user interfaces to secure backend systems, our solutions are crafted to grow with your business. Let’s build what’s next—together.</p>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         
                   

            <section className="our-mission-vision-core-wrapper gray-bg" id="onpoint-solution">                  
                <section className="our-mission-wrapper our-vision-wrapper" id="it-staffing">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                    <div className="mission-img wow fadeInRight"><img src="./images/our-product-01.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                    <div className="mission-content wow fadeInUp">
                                        <h1 className="section-title">Our Products</h1>
                                        <h5 className="section-title-v1">Onpoint Solution:</h5>                                        
                                        <p>OnPointSolution.ai aims to provide businesses with reliable insights and enhanced intelligence using smart mobility, enabling them to innovate, optimize operations and make crucial decisions using an AI-driven platform.</p>
                                        <p>OnPoint Solution's processes, products and organizational structure are geared towards ensuring that every delivery to the clients passes through our stringent quality measures. This policy has fostered a work culture that believes in stretching innovative thinking to its limits and exhibiting an uncompromising attitude towards quality and client satisfaction.</p>
                                        <p>Based on years of software products and professional services consulting work in the carrier class wireless space, it became clear to us that a market need exists for more comprehensive fleet data insights that enable accelerated development of reliable applications to support the myriad of unaddressed Smart Mobility fleet use cases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper" id="onpoint-scheduling">
                    <div className="container">
                        <div className="our-mission">
                            <div className="row align-items-center">
                                <div className="col-12 col-md-4 col-lg-5">
                                    <div className="mission-img wow fadeInLeft"><img src="./images/our-product-02.png" alt="" /></div>
                                </div>
                                <div className="col-12 col-md-8 col-lg-7">
                                    <div className="mission-content wow fadeInUp">
                                        <h5 className="section-title-v1">Onpoint Scheduling:</h5>                                    
                                        <p>A digital tool designed to help users organize and manage their time effectively. The app allows individuals or teams to plan appointments, meetings, tasks, and events with ease.</p>
                                        <p>Whether for personal use, professional meetings, or service-based businesses, OnPoint scheduling streamlines time management. A specialized tool designed for users to efficiently manage and organize
                                        schedules. Its main purpose is to simplify the process of planning and timetable creation.</p>
                                        <p>Key features include:</p>
                                        <ul>
                                            <li>· Event creation and access with detailed descriptions</li>
                                            <li>· Search and filtering by various criteria such as time, location, room, invitees</li>
                                            <li>· Schedule builder that helps users visualize and avoid time conflicts</li>
                                            <li>· Personalized calendars showing appointments</li>
                                            <li>· Mobile access for on-the-go updates and notifications</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-mission-wrapper our-vision-wrapper" id="onpoint-health-care">
                        <div className="container">
                            <div className="our-mission">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-4 col-xl-5 order-1 order-lg-2 order-xl-2">
                                        <div className="mission-img wow fadeInRight"><img src="./images/restaurant-app.png" alt="" /></div>
                                    </div>
                                    <div className="col-12 col-lg-8 col-xl-7 order-2 order-lg-1 order-xl-1">
                                        <div className="mission-content wow fadeInUp">
                                            <h5 className="section-title-v1">Restaurant Application (Coming Soon):</h5>                                        
                                            <p>A mobile application designed to enhance the dining experience by offering users convenient access to a restaurant’s services and features. The application allows customers to:</p>
                                        <ul>
                                            <li>· Browse the menu with detailed descriptions and images</li>
                                            <li>· Place orders for pickup or delivery</li>
                                            <li>· Make reservations or join a waitlist</li>
                                            <li>· Track delivery status in real-time</li>
                                            <li>· Earn rewards through loyalty programs or exclusive offers</li>
                                            <li>· Pay digitally, including tips and contactless options</li>
                                            <li>· Receive notifications about deals, events, or new menu items</li>
                                        </ul>
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