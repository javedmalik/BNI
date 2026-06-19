import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import InsightsDetailsComponent from '../components/InsightsDetailsComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function MakeYourProjectExecutionPhaseAsBoringAsPossible(){     
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
                                        <span className="date">5 August, 2023</span>
                                    </div>
                                    <h1 className="wow fadeInUp">Make Your Project Execution Phase As Boring As Possible</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/makeyour.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                       <p><strong>How many projects have you worked on that come with a pre-defined budget and timeline or even the technology proposed by the project sponsors? If I may answer, almost all, correct? I am sure most of you would agree with me on this.</strong></p>
                                       <p>By no means, am I advocating an unlimited budget and open timeline, of course, funds have limitations and expected timeline should be established. What I am trying to say is that a Project Manager must be engaged with the sponsor on planning prior to actually coming up with budgets and timelines. This works well for the organizations where they have a proper Project Management Office defined. Several times, when sponsors come with pre-defined budget and timeline, the project managers feel obligated to work within these limits and forget about being creative and how important the planning phase is. As Henry Ford once mentioned, Before everything else, getting ready is the secret of success.</p>
                                       <p>Execution phase takes the longest, as this is the phase where we build the required deliverables. In order for a project to be ready for execution we must spend ample time during the planning phase. If we spend more time in planning, perform detailed planning steps and document each step to be followed during execution, your execution phase will become simple and boring. Hence the title Make your execution phase as boring as possible Abraham Lincoln emphasized planning by stating, If I had eight hours to chop down a tree, I would spend six sharpening my ax.</p>
                                       <p>Now planning does not just mean planning the steps of what we will do to achieve each deliverable, but it also encompasses planning for external and internal risks. Having the project budget and timelines does not mean projects will be successful, as a matter of fact, the key reason for many big projects failure is not always budget or timeline. They often fail due to lack of involvement from stakeholders or unknown/unplanned risks. Donald Rumsfeld stated, There are known knowns. These are things we know that we know. There are known unknowns. That is to say, there are things that we know we don't know. But there are also unknown unknowns. There are things we don't know we don't know.</p>
                                        <p>Some key rules for planning phase:</p>
                                        <ul className="custom-list">
                                            <li>Planning phase never ends, ensuring that you continuously update your plan throughout the duration of the project will increase the success rate.</li>
                                            <li>Spend sufficient time upfront identifying risks. Identifying the potential factors that can impact your projects includes strategic business priorities, other projects from different functional areas, and many others.</li>
                                            <li>Identify and communicate issues early in the process. Problems do not go away themselves; you need to attack them early before they become uncontrollable.</li>
                                            <li>Project managers cannot know everything; keep good alignment with your stakeholders. They can help identify missing stakeholders and risks that you may have overlooked.</li>
                                            <li>Have a very good communication plan prepared, share it with stakeholders for their alignment, and follow it religiously.</li>
                                            <li>Some key advantages of good planning:</li>
                                            <li>Provides direction and decision-making as the objectives are defined in simple words.</li>
                                            <li>Reduces risks and uncertainties by identifying potential failure points upfront during planning sessions.</li>
                                            <li>Reduces overlapping activities. There are times when two team members can be working on same or similar activities due to lack of planning.</li>
                                            <li>Allows better control on project activities and deliverables. If there is no plan most likely there will be no standard controls.&nbsp;</li>
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