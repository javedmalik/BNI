import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import InsightsDetailsComponent from '../components/InsightsDetailsComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function WhyDoManyITProjectsFail(){     
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
                                        <span className="date">11 November, 2023</span>
                                    </div>
                                    <h1 className="wow fadeInUp">Why Do Many IT Projects Fail?</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/whydo.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                       <p>Many organizations have experienced projects that failed to deliver on time, on budget, or the scope that was initially intended. Statistics show that more than 40% of IT projects fail to meet one of the three dimensions above. One of the key factors organization leaders have to recognize that every strategic initiatives they start must be managed as projects or programs. Mark A. Langley, President of&nbsp;<a href="https://www.pmi.org/~/media/PDF/Business-Solutions/PMI-Pulse%20Report-2013Mar4.ashx" target="_blank" rel="noreferrer noopener">Project Management Institute</a>&nbsp;(2012) mentioned that all strategic change in an organization occurs through projects and programs. Organizations have two types of work: operational work where they respectively have to perform a certain activity with a systematized process, the other type of work is where the work has a definite start and end that can be classified as projects.</p>
                                       <p>These projects must follow a lifecycle and have constraints that many organizations fail to acknowledge resulting in project failures. Below are five main reasons why projects fail and how these areas can be controlled.</p>
                                       <ul className="custom-list">
                                         <li><strong>Executive Support or Clear Sponsorship:</strong>Often projects are initiated and after project work starts executives or sponsors are not engaged. They leave Project Managers alone and do not get involved until there are surprises.<strong>How to Mitigate:</strong>&nbsp;One of the most important factors in project management is planning. Keeping the executive sponsors involved/informed must be a part of the project planning phase. This is project manager's responsibility, to ensure executive sponsors are informed throughout the project. I have experienced when executives are too busy and do not want to be involved. In these situations, I recommend project managers to make sponsor's acknowledgement and approval of project deliverables as critical milestone.</li>
                                         <li><strong>Lack of Communication:</strong> I will start with a quote from George Bernard Shaw, The single biggest problem in communication is the illusion that it has taken place. There have been many occasions I hear project managers complaining, but I communicated that this happens when we assume that our communications/emails were read and no response means people have no questions.<strong>How to Mitigate:</strong>&nbsp;You must plan for communication. Many project managers fail to plan for communication thinking communication is a given task. If we do not plan, we are certain to miss some communications. Make sure you have action items and remind people to complete these action items. A project manager must spend most of his time communicating. A good project manager spends 90% of his/her time communicating.</li>
                                         <li><strong>Imprecise Business Objective:</strong>It may seem difficult to believe that organizations will have projects without proper business objective. However, in the real world there are many organizations that have a portfolio much bigger than they can manage or fulfill. They take on these initiatives without proper analysis of workload causing an unhappy work environment. Cynthia K. West, Ph.D., Vice President of&nbsp;<a href="http://www.projectinsight.net/white-papers/four-common-reasons-why-projects-fail" target="_blank" rel="noreferrer noopener">Project Insight</a>&nbsp;mentioned, Executives play a key role in this issue. Some organizations have not adequately defined their goals and strategies. If top management is not clear on project priorities, then it follows that the entire organization is also unclear about which projects are the most important. <strong>How to Mitigate:</strong>During your project charter and requirement gathering, it is essential that project managers control the project scope. Many project managers do not push back to executives in order to avoid conflicts or in fear of losing their job. It is important for project managers to build good scope definitions, project plans, and efforts required to deliver the expected business objectives. This will help them educate executives on what and when their expectations can be delivered.</li>
                                         <li><strong>Skilled resource availability:</strong>&nbsp;Generally, management moves internal resources from one project to the other without aligning their qualifications for the project needs. Also, at times lower qualified resources are selected to save cost. Another issue transpires when resources workload is not taken into consideration and more and more projects are added to their portfolio. This results into poor performance and dissatisfaction with the job.<strong>How to Mitigate:</strong>Primarily, it is important to have a resource plan completed within a project management plan. This document must include resource effort required, resource qualifications, and backfill required for internal resources that are pulled into projects. Project managers should also be able to mentor less experienced resources. Joseph Gulla (2012) emphasized, Actively recruit skilled personnel through internal and external routes like jobs systems. A good outcome will not result without sufficiently <a href="http://www.ibmsystemsmag.com/power/Systems-Management/Workload-Management/project_pitfalls/?page=3" target="_blank" rel="noreferrer noopener">skilled people</a></li>
                                         <li><strong>End User Involvement:</strong>I have seen many projects where functional managers are making decisions on operational functionalities of the new or upgraded system. Many times this results in system failure as end users are not able to adopt the system changes. <strong>How to Mitigate:</strong>&nbsp;End users are very important stakeholders as they will be using the system day in and day out. Â¬â€&nbsp;Where functional managers are looking to build all their requirements, the system must be user friendly. If the end users do not adopt the system, no matter how good your system is, it will not be successful. It is important to identify these stakeholders upfront in the planning phase and that they are involved in major milestone reviews or conference room pilots</li>
                                        </ul> 
                                        <p><strong>Conclusion:</strong></p>
                                        <p>The key reasons some organizations have poor project success are that they are forced to manage their projects with tight deadlines and cutting budgets to achieve their intended results. It is essential that we invest in strong, effective project management within an organization in order to increase project performance. You must have noticed that for each of the mitigations I emphasized on planning. As Alan Lake in said, Failing to plan is planning to fail. Project Managers must spend a good amount of their time in project planning and make sure they follow their Project Management Plan.</p>
                                        <p>References:</p>
                                        <p>Gulla J., (2012) Seven Reasons IT Projects Fail, Avoiding these pitfalls will help ensure success Retrieved from: http://www.ibmsystemsmag.com/power/Systems-Management/Workload-Management/project_pitfalls/?page=3</p>
                                        <p>Langley M. A., (2013) PMI's Pulse of the Profession: The High Cost of Low Performance. Retrieved from: https://www.pmi.org/~/media/PDF/Business-Solutions/PMI-Pulse%20Report-2013Mar4.ashx</p>
                                        <p>West C. K., (unknown) Four Common Reasons Why Projects Fail Retrieved from: http://www.projectinsight.net/white-papers/four-common-reasons-why-projects-fail&nbsp;</p>
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