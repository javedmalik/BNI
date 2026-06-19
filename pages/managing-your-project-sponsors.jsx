import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import InsightsDetailsComponent from '../components/InsightsDetailsComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function ManagingYourProjectSponsors(){     
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
                                        <span className="date">10 July, 2024</span>
                                    </div>
                                    <h1 className="wow fadeInUp">Managing Your Project Sponsors</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/managing.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">                                     
                                      <p>You may recall on February 12, 2016 I posted an article titled Why many IT projects fail? In this article, I mentioned one of the reasons for project failures is lack of engagement from project sponsors. In this week's article I am going to dive deeper into why project sponsor engagement is so important.</p>
                                      <p>Project sponsors may not know all day-to-day details on the initiative which is why maintaining a good relationship is extremely important for the success of your project. They provide not only the financial support but also provide political support.</p>
                                      <p>Often project managers see their project sponsors as silent partners, from experience I suggest stay away from this approach, as it creates separation. It is very important for the project managers to define roles for sponsors along with the other stakeholders.</p>
                                      <p>The sponsor is there to advise you on things such as direction of the project, organizational knowledge, and resource commitments from functional teams. Keeping a good line of communication will help in managing expectations and uncertainty that arise from time to time especially in the beginning of the project.</p>
                                      <p><strong>Shoaib Ahmed (2012)</strong>&nbsp;discussed that trust is the basis for this working relationship. Communication needs to be open and transparent between the Sponsor and Project Manager.&nbsp;<strong>Villanova University Alliance</strong>&nbsp;(2016) discussed how ongoing support from project sponsors is vital. The business world is dynamic, and priorities can shift quickly. If and when a project team member is being pulled for different priorities, the project can lose momentum. In such cases, project sponsor can make the case to upper management for prioritizing the project or allocating more resources.</p>
                                      <p>Some tips that can help build a better relationship with your sponsors can be:</p>
                                      <ul className="custom-list">
                                        <li>Always set clear expectations early in the project planning phase to eliminate assumptions from the team and sponsors.</li>
                                        <li>Clearly communicate well-defined Change Management process to the team to help limit the amount of change request due to changing requirements. I have experienced that project managers assume that scope is frozen and requirements are understood.</li>
                                        <li>It is critical to communicate any assumptions made in the beginning of the project in meetings followed up with written communications. We do make many assumptions in projects, but they can be understood differently.</li>
                                        <li>Provide timely status updates to your sponsors. At times, we feel that the sponsors are fully involved in the project and do not need a format status update. This assumption can cause damage to a good relationship.</li>
                                        <li>Share the bad news early. All projects have roadblocks and issues, there is no need to hide these from your sponsor. If a project manager can honestly share the problems as well as suggest solutions for the problem, the sponsors will appreciate.</li>
                                       </ul>
                                       <p>References:</p>
                                       <p>Ahmed S., (2012) Project Management in Practice: Working with Project Sponsors Retrieved from: http://prince2msp.com/2012/03/11/working-with-project-sponsors/</p>
                                       <p>University Alliance (2016) Project Sponsorship: Dealing with difficult sponsors Retrieved from: http://www.villanovau.com/resources/project-management/difficult-project-sponsors/#.VuJnKPkrLIU&nbsp;</p>
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