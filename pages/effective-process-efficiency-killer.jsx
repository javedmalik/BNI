import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import InsightsDetailsComponent from '../components/InsightsDetailsComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function EffectiveProcessOrEfficiencyKiller(){     
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
                                        <span className="date">25 March, 2023</span>
                                    </div>
                                    <h1 className="wow fadeInUp">Effective Process Or Efficiency Killer</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/effective-process.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                    <p><strong>Do you have many layers of approvals required prior to making decisions? Does the team have to ask for permission from managers before executing? Do they take too long in filling in a simple report? If the answer to any of these questions is YES, than what you call effective process is actually efficiency killer.</strong></p>
                                    <p>Processes are supposed to help organizations improve efficiencies and scale up the productivity. However, when too many processes are introduced they can get out of control and start becoming ineffective. In many organizations there are many well-defined documented processes, yet they fail to deliver projects and even simple tasks. Obviously process inefficiencies are not built intentionally, but may occur when there are too many processes. I am not trying to advocate against having processes because they drive the organizational culture and behavior.</p>
                                    <p>Generally, in large organizations, processes are guidelines for how to operate and/or introduced to address a situation or a finding. Intentions are good, unfortunately we witness that more and more rigidness gets build to these processes. Another deficiency happens when these processes are written in silos. Each department is looking to focus on their own areas and creating new processes without considering how these processes can impact other departments and/or the organizations as a whole.</p>
                                    <p>Joe Mundell (2015) discussed an example of healthcare: There are so many regulations, policies, and procedures that are in place and several steps are built for monitoring that the objectives of being efficient does not seem like an available option. With technology advancements many of these manual processes can be automated.</p>
                                    <p>Some of these process controls/inefficiencies can be improved by simply adopting general leadership strategies:</p>
                                    <ul className="custom-list">
                                        <li>Management tends to empower with limitations: Lower level managers are given more responsibilities, but they are expected to gain permissions / approvals resulting in more delays. Leaders must trust their team and empower them for decision-making.</li>
                                        <li>Leaders rely on process instead of people when trying to solve problems. The primary focus should be people to improve trust, but with too many processes people part is ignored.</li>
                                        <li>Management egos can become a bottleneck in decision-making. When team members try to challenge the status quo, on occasions this is not allowed, resulting in lack of confidence. Leadership should encourage all team members to participate and to voice their opinions.</li>
                                    </ul>
                                    <p>References:</p>
                                    <p>Mundell J., (2015) Manual monitoring processes kill efficiency in Healthcare! Retrieved from: https://www.linkedin.com/pulse/manual-monitoring-processes-kill-efficiency-joe-mundell </p>
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