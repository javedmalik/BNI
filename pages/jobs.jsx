import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import Script from 'next/script';

const JobTestimonialsSlider = dynamic(() => import('@/components/JobTestimonialsSlider'), { ssr: false });

export default function Jobs(){     
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
                    <h1>Join Our Team</h1>   
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Join Our Team</li>
                        </ol>         
                    </div>
                </div>
                <div className="banner-img"><img src="images/join-our-team-banner.png" alt="" /></div> 
            </section>

            <section className="career-bni-wrapper">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7">
                            <div className="career-bni wow fadeInUp">
                                <h5 className="section-title-v1">CAREER AT BNI</h5>
                                <h1 className="section-title">Join Our Team</h1>
                                <p>BNI is a team-oriented organization that values autonomy, ownership, and professional growth. We’re always looking for passionate individuals to join our team and make a difference.</p>
                                <p>Navigate below to see our current open positions!</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="career-img wow bounceInRight"><img src="images/career-at-bni.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="take-peek-wrapper gray-bg">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Take a peek at what goes on at BNI!</h1>
                    <div className="take-peek">
                        <div className="column">
                            <div className="full">
                                <div className="img wow fadeInUp"><img src="images/gallery1.png" alt="" /></div>
                            </div>
                            <div className="half">
                                <div className="column">
                                    <div className="img wow fadeInUp"><img src="images/gallery2.png" alt="" /></div>
                                </div>
                                <div className="column">
                                    <div className="img wow fadeInUp"><img src="images/gallery3.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="half">
                                <div className="column">
                                    <div className="img wow fadeInUp"><img src="images/gallery4.png" alt="" /></div>
                                    <div className="img wow fadeInUp"><img src="images/gallery7.png" alt="" /></div>
                                    <div className="img wow fadeInUp"><img src="images/gallery6.png" alt="" /></div>
                                </div>
                                <div className="column">
                                    <div className="img wow fadeInUp"><img src="images/gallery5.png" alt="" /></div>
                                    <div className="img wow fadeInUp"><img src="images/gallery8.png" alt="" /></div>
                                    <div className="img wow fadeInUp"><img src="images/gallery9.png" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>          
           
            <section className="open-positions-wrapper" id="find-jobs">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Find Your Next Job</h1>                
                    <Script
                        src="https://jobsapi.ceipal.com/APISource/widget.js"
                        strategy="afterInteractive"
                        data-ceipal-api-key="NE15TG9lNUUrNUFHUzZYVHpBdTZVQT09"
                        data-ceipal-career-portal-id="Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09"
                    />                  
                    <div id="example-widget-container" />
                </div>
            </section>

            <section className="benefits-waiting-wrapper">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">What benefits are waiting for you?</h1>
                    <div className="section-top-content wow fadeInUp">BNI offers a variety of hand-picked benefits that you can take advantage of!</div>
                    <div className="benefits-waiting">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="benefits-img wow bounceInLeft"><img src="images/benefits-img.png" alt="" /></div>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp">
                                            <div className="icon"><i className="bi bi-clock"></i></div>
                                            <div className="content-wrap">
                                                <h5>Flexible Working Hours</h5>
                                                <div className="content">Claim your autonomy. Set your own schedule.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.1s">
                                            <div className="icon"><i className="bi bi-crosshair"></i></div>
                                            <div className="content-wrap">
                                                <h5>Employee Referral Bonus</h5>
                                                <div className="content">Earn big by helping us grow - refer top talent and get rewarded!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="icon"><i className="bi bi-rocket-takeoff"></i></div>
                                            <div className="content-wrap">
                                                <h5>Upskill Avenues</h5>
                                                <div className="content">Thrive with mentorship, training, and comprehensive courses.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.3s">
                                            <div className="icon"><i className="bi bi-feather2"></i></div>
                                            <div className="content-wrap">
                                                <h5>Vacations & Holidays</h5>
                                                <div className="content">Refresh with paid vacation and get all your local holidays off.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="icon"><i className="bi bi-people"></i></div>
                                            <div className="content-wrap">
                                                <h5>Team Up with the Best</h5>
                                                <div className="content">Join forces with the top 1% of professionals in your field.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.5s">
                                            <div className="icon"><i className="fa fa-line-chart" aria-hidden="true"></i></div>
                                            <div className="content-wrap">
                                                <h5>Growth Possibilities</h5>
                                                <div className="content">Unlock your true potential - endless growth opportunities await you here!</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="icon"><i className="bi bi-gift"></i></div>
                                            <div className="content-wrap">
                                                <h5>Life Moments Covered</h5>
                                                <div className="content">Get days off to cover moving, marriage, maternity/paternity leave, sick days, and other life events.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className="benefits-box wow fadeInUp" data-wow-delay="0.7s">
                                            <div className="icon"><i className="bi bi-pc-display"></i></div>
                                            <div className="content-wrap">
                                                <h5>Top-Notch Tools</h5>
                                                <div className="content">We’ll equip you with the latest tools (hardware and software) to power your potential.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="success-story-wrapper gray-bg">
                <div className="container">
                    <h1 className="section-title wow fadeInUp">Team Member Success Story</h1>
                    <div className="section-top-content wow fadeInUp">Testimonials shared by our Team Member</div>

                    <JobTestimonialsSlider />

                </div>
            </section>

            <HelpWrapperComponent />            
            
        </div>
        </>
    )
}