import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import InsightsDetailsComponent from '../components/InsightsDetailsComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function EveryManagerMustStudySociology(){     
    return(
        <>
        <Head>
            <title>Business Needs Inc</title>
            <meta name="keywords" content="Business Needs Inc" />
            <meta name="description" content="Business Needs Inc" />
        </Head>        
        
        <div className="main-wrapper">            
            <section className="page-title-wrapper">
                <div className="wow fadeInUp">
                    <h1 className="page-title">News Insights From BNI</h1>
                    <div className="breadcrumb-wrapper">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active">Insights</li>
                        </ol>         
                    </div>
                </div>
            </section>

            <section className="news-insights-wrapper">
                <div className="container">
                    <InsightsComponent /> 
                </div>
            </section>

            <section className="insights-details-wrapper" id="post-details">
                <div className="container">
                    <div className="insights-details-wrap">
                        <div className="row">
                            <div className="col-12 col-md-8 col-lg-9">
                                <div className="insights-details">
                                    <div className="news-category wow fadeInUp">
                                        <span className="category">Blogs</span>
                                        <span className="date">17 January, 2022</span>
                                    </div>
                                    <h1 className="wow fadeInUp">Every Manager Must Study Sociology</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/youcan.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                      <p><strong>Many times we see people get promoted due to their extensive experience in certain area of business. They also seem to be best qualified for these promotions. As soon as they are given the people management responsibilities, they fail.</strong></p>
                                      <p>Often, people are promoted based on their tactical knowledge and performance. When they become a manager, we suddenly see a change in their behavior or sometimes even a decline in their performance. Some colleagues around them don't seem to like this change and call them egotistical.</p>
                                      <p>Generally, this may not be the real reason for their changed behavior. It could be related to difficulties they may be facing with their new role. Let's face it when you get promoted and hold a higher title in your organization, your people skills suddenly become your biggest strength and not all tactical managers know how to manage the people side. When a tactical performer is promoted to this new role, this person is automatically expected to bring talent that fits his/her new role.</p>
                                      <p>The ability of managing people does not necessarily come from performing well at a tactical task. One requires great soft skills including various attributes and competencies that allow an individual to work well with others. Having good people skills include maximizing effective and productive human interaction generating benefits for everyone.</p>
                                      <p>Studying Sociology prepares one in their outlook on human behavior and learns to appreciate the diversity and cultures. Sociology helps us look objectively at society and directs attention on how everyone fits together and adopts changes. Studying Sociology will also develop analytical thinking in both qualitative and quantitative manner. With an understanding of cultures and human behaviors, managers seem to make better decisions and are able to manage their team effectively. They increase productivity from their team and have happier team members.</p>
                                      <p>Following are a few leadership traits shown by individuals with sociology education:</p>
                                      <p>Their understanding of people behavior allows them to support and motivate each team member in their own unique style. They support others and are seen as believers.</p>
                                      <ul className="custom-list">
                                        <li>Ability to connect better with the team to understand their viewpoint and gain trust. The trust they built creates communication transparency.</li>
                                        <li>Good negotiation and persuasive skills come naturally to people with a sociology background.</li>
                                        <li>Having good problem solving skills takes the pressure off them and their bosses.</li>
                                        <li>Their understanding of people behavior allows them to support and motivate each team member in their own unique style. They support others and are seen as believers. </li>
                                      </ul>                                      
                                    </div>                                
                                </div>
                            </div>

                            <InsightsDetailsComponent />

                        </div>
                    </div>
                </div>
            </section>

            <HelpWrapperComponent />
            
            
        </div>
        </>
    )
}