"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect} from "react";
import HelpWrapperComponent from '../components/HelpWrapperComponent';

import dynamic from "next/dynamic";

const SliderComponent = dynamic(() => import('@/components/SliderComponent'), { ssr: false });
const EmployeeSlider = dynamic(() => import('@/components/EmployeeSlider'), {  ssr: false});

const GoldenClientComponent = dynamic(() => import('@/components/GoldenClientComponent'), {  ssr: false});
const GoogleRatingComponent = dynamic(() => import('@/components/GoogleRatingComponent'), {  ssr: false});


export default function Home(){
  const router = useRouter();   
  return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>       
        
        <div className="main-container"> 
                     
          <section className="banner-wrapper">
            <div className="banner">
                <SliderComponent />
            </div>
          </section>     

            <section className="reimagine-business-wrapper gray-bg">
              <div className="container">
                  <div className="reimagine-business" id="counter">
                      <h1 className="wow fadeInUp section-title">We Can Help You <span className="text-blue">Reimagine</span> Your Business</h1>
                      <div className="section-top-content wow fadeInUp">
                          <p>Our strategic approach ensures businesses have the right technology and talent to scale, innovate, and achieve their goals with efficiency and impact.</p>
                      </div>
                      <div id="counter">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                <div className="business-box">
                                    <h3><span className="count percent" data-count="20+">20+ years of experience in IT consulting and talent solutions</span></h3>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 custom-border">
                                <div className="business-box">
                                    <h3><span className="count percent" data-count="clients">Clients from startups to Fortune 500 companies</span></h3>
                                    <div className="content"></div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 custom-border">
                                <div className="business-box">
                                    <h3><span className="count percent" data-count="35+">35+ Industries mastered</span></h3>
                                    <div className="content"></div>
                                </div>
                            </div>                             
                                                 
                          </div>
                      </div>
                  </div>
              </div>
          </section> 

          <section className="about-business-wrapper gray-bg">
            <div className="container-fluid">
                <div className="about-business">
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <div className="about-content wow fadeInUp">
                                <h5 className="section-title-v1">Who We Are</h5>   
                                <h1 className="section-title">Reliable Technology Support & <span className="text-blue">Solutions</span></h1>                                                         
                                <div className="content">
                                    <p>At Business Needs Inc., we specialize in IT consulting and talent solutions, serving as a trusted partner in driving growth and innovation. Since 2004, we’ve empowered businesses across diverse industries with cutting-edge, customized technology solutions that tackle today’s unique challenges—from the rapid evolution of AI to the ever-expanding demands of the digital age. With a commitment to excellence, we help organizations stay ahead in an increasingly tech-driven world.</p>
                                </div>                                
                                <div className="blue-btn"><Link href="/about-us.html">Learn More</Link></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 align-self-end">
                            <div className="about-image wow fadeInUp"><img src="./images/about-us-img.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="top-category-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <h1 className="wow fadeInUp section-title">Transforming Businesses</h1>
                        <div className="section-top-content wow fadeInUp">
                            <p>We deliver agile IT consulting and talent solutions, offering expertise in staff augmentation, application development, and project-based execution.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="blue-btn top-category-right wow fadeInUp"><Link href="/contact-us.html">Let’s Talk</Link></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="top-category wow fadeInUp">
                            <div className="content">
                                <h2>Talent Solutions</h2>
                                <div className="read-more"><Link href="/talent-solution.html"><span className="text">Read More</span> <i className="bi bi-arrow-right"></i></Link></div>
                            </div>
                            <div className="img"><img src="./images/talent-solution.png" alt="Talent Solutions" /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="top-category wow fadeInUp" data-wow-delay="0.2s">
                            <div className="content">
                                <h2>IT Consulting Services</h2>
                                <div className="read-more"><Link href="/it-consulting-services.html"><span className="text">Read More</span> <i className="bi bi-arrow-right"></i></Link></div>
                            </div>
                            <div className="img"><img src="./images/talent-it-consulting-services.png" alt="IT Consulting Services" /></div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="top-category wow fadeInUp" data-wow-delay="0.4s">
                            <div className="content">
                                <h2>Offshore Development Center</h2>
                                <div className="read-more"><Link href="/offshore-development-services.html"><span className="text">Read More</span> <i className="bi bi-arrow-right"></i></Link></div>
                            </div>
                            <div className="img"><img src="./images/offshore-development-services.png" alt="Offshore Development Center" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-product-wrapper gray-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="section-top-content wow fadeInUp ">
                            <h1 className="section-title">Our Product Portfolio</h1>
                            <p>Our range of innovative applications ensures optimal user experience, efficiency, and seamless functionality across diverse business needs.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="blue-btn recent-news-right wow fadeInUp"><Link href="/contact-us.html">Inquire Now</Link></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="our-product-box wow fadeInUp">
                            <div className="product-img"><img src="./images/our-product-01.png" alt="" /></div>
                            <div className="product-content">
                                <h2>Onpoint Solution</h2>
                                <div className="description">OnPoint's Smart Mobility Platform enables users to optimize fleet safety and efficiency through a rich array of real time data and tools that enables objective and data driven decisions.</div>
                                <div className="black-outline-btn"><Link href="/our-product-portfolio.html#onpoint-solution">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-product-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="product-img"><img src="./images/our-product-02.png" alt="" /></div>
                            <div className="product-content">
                                <h2>Onpoint Scheduling</h2>
                                <div className="description">A digital tool designed to help users organize and manage their time effectively. The app allow individuals or teams to plan appointments, meetings, tasks, and events with ease.</div>
                                <div className="black-outline-btn"><Link href="/our-product-portfolio.html#onpoint-scheduling">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-product-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="product-img"><img src="./images/restaurant-app.png" alt="" /></div>
                            <div className="product-content">
                                <h2>Restaurant App​</h2>
                                <div className="description">A mobile application designed to enhance the dining experience by offering users convenient access to a restaurant’s services and features.</div>
                                <div className="black-outline-btn"><Link href="/our-product-portfolio.html#onpoint-health-care">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <section className="why-choose-wrapper gray-bg">
            <div className="container-fluid">
                <div className="why-choose">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="choose-content">
                                <h1 className="section-title wow fadeInUp">Why Choose <span className="text-blue">BNI?</span></h1>
                                <ul className="custom-list">
                                    <li className="wow fadeInUp">
                                        <h2>Elite Tech Talent</h2>
                                        <p>500+ pre-vetted professionals across software development, data engineering, cloud, DevOps, and more.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.2s">
                                        <h2>End-to-End IT Excellence</h2>
                                        <p>Expertise in IT project consulting, mobile and web development, and quality assurance—leveraging next-gen technologies.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.4s">
                                        <h2>Fast Timelines</h2>
                                        <p>Ensuring rapid transition from requirement to onboarding, aligned with client needs.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <h2>Versatility</h2>
                                        <p>Adaptive engagement models designed to seamlessly align with your evolving business needs, ensuring flexibility and efficiency.</p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="0.6s">
                                        <h2>Optimal Support</h2>
                                        <p>A globally distributed support team, ensuring smooth assistance across time zones and regions to meet your business needs.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 align-self-end">
                            <div className="choose-image wow fadeInUp"><img src="./images/why-bni.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="recent-news-wrapper">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12 col-lg-8">
                        <h5 className="section-title-v1 wow fadeInUp">INSIGHTS</h5>
                        <h1 className="wow fadeInUp section-title">News, Events & Industry trends</h1>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="blue-btn recent-news-right wow fadeInUp"><Link href="/insights.html">View all Insights</Link></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="our-platforms-box wow fadeInUp">
                            <div className="blog-img"><img src="./images/Listening.jpg" alt="Listening Is The Communication" /></div>
                            <div className="blog-content">                               
                                <h2>Listening Is The Communication</h2>
                                <div className="description">Are You Listening? The question Are You Listening? is mostly not understood and people reply with a big YES or by nodding their head.</div>
                                <div className="black-outline-btn"><Link href="/listening-is-the-communication.html#post-details">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-platforms-box wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-img"><img src="./images/managing.jpg" alt="Managing Your Project Sponsors" /></div>
                            <div className="blog-content">                                
                                <h2>Managing Your Project Sponsors</h2>
                                <div className="description">In this week's article I am going to dive deeper into why project sponsor engagement is so important.</div>
                                <div className="black-outline-btn"><Link href="/managing-your-project-sponsors.html#post-details">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="our-platforms-box wow fadeInUp" data-wow-delay="0.4s">
                            <div className="blog-img"><img src="./images/leaders.jpg" alt="Leaders Set The Tone" /></div>
                            <div className="blog-content">                               
                                <h2>Leaders Set The Tone</h2>
                                <div className="description">The most fundamental argument around leadership is whether leadership is inherent to a person or whether it can be taught.</div>
                                <div className="black-outline-btn"><Link href="/leaders-set-the-tone.html#post-details">Read More</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="empolyee-wrapper">
          <div className="container">
              <EmployeeSlider />
          </div>
        </section>            
        
        <section className="our-golden-clients-wrapper">

            <section className="our-clients-wrapper">
                <div className="container">
                  <h1 className="section-title">Our Key Clients</h1>
                    <GoldenClientComponent />
                </div>
            </section>  

             <section className="google-rating-wrapper">
                <div className="container">
                    <GoogleRatingComponent />    
                </div>
              </section>

        </section>    

        <HelpWrapperComponent />   

      </div>

      </>
    )
}