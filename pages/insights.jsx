import React from 'react';
import Head from 'next/head';
import { useState, useEffect} from "react";
import Link from 'next/link';
import dynamic from "next/dynamic";
import HelpWrapperComponent from '../components/HelpWrapperComponent';
import InsightsDetailsComponent from '../components/InsightsDetailsComponent';

const InsightsComponent = dynamic(() => import('@/components/InsightsComponent'), {  ssr: false});

export default function Insights(){     
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
                                        <span className="date">9 December, 2024</span>
                                    </div>
                                    <h1 className="wow fadeInUp">Listening is The Communication</h1>
                                    <div className="insights-img wow fadeInUp"><img src="images/Listening.jpg" alt="" /></div>
                                    <div className="insights-content wow fadeInUp">
                                       <h3>Are You Listening?</h3>
                                       <p>The question Are You Listening? is mostly not understood and people reply with a big YES or by nodding their head. They often confuse Listening and Hearing. Are hearing and listening the same thing? Listening is very different from hearing. To listen effectively we need to use more than just ears. We all hear different sounds like rain, wind, keyboard when someone is typing, and music. Listening on the other hand requires us to really pay attention. Dr. Rachel Naomi Remen mentioned, The most basic and powerful way to connect to another person is to listen, just listen.</p>
                                       <p>I notice sometimes people walk into meetings with assumptions about the topic and with the mindset to respond to the assumed message  can be known as <strong>Listen to Respond. </strong>What we truly need to do is to <strong>Listen to Understand. </strong>Stephen R. Covey mentioned in his book The 7 Habits of Highly Effective People: Most people do not listen with the intent to understand; they listen with the intent to reply. When people listen to respond, this can lead to a major communication gap. What happens in this situation that our mind is already busy thinking, how am I going to respond to what is being said. When we make assumptions of what the other person is about to say, our listening stops, we only hear the words and respond based on our assumptions. This causes misunderstandings and often results in arguments.</p>
                                       <p>I like the phrase, First Understand, then be Understood. We must listen carefully, so we can understand the message. We must pay full attention to the message, listen to what is being said, and even listen to what is not being said. There are many non-verbal communications that take place during a conversation. When we focus only on what we hear, we miss listening to a big part of the communication. We must also listen to the tone, the body language (if face to face), and the emotions. There is always a lot that is not being said in words yet is being communicated. As Peter Drucker said, The most important thing in communication is to hear what is not being said.</p>
                                       <p>Once you hear the message, it is highly recommended to process/analyze the message before responding. This does not mean you have to take a long time to analyze. We do not want to over analyze and get into an analysis paralysis situation. When we are in a conversation with someone, if we listen carefully, pay close attention to the messenger, and think (maybe for a couple of seconds), we will clearly understand what this person is trying to tell us. Thus, we will be able to respond appropriately.</p>
                                       <p>Listening is active, Hearing is passive. Listening has Actions. I am sure most of you have experienced this phenomenon in the past. You have spoken to another person, and they agreed with a commitment. Yet, they fail to follow through on their commitment and sometimes they cannot even remember the discussion. It is possible that they forgot. Another possibility is that they heard you but did not listen. They may have heard you and acknowledged the message, they did not listen to what actions they needed to take. As I mentioned above, listening is not only the words being said, we also need to also listen to what is not being said. As an example: at times, during discussions I say to a team member “ discuss on this topic next week. Both parties assume that the other will call for a meeting and miss the timelines. If I was the one receiving this message from my leadership, I follow the conversation with this question: do you want me to schedule some time for tomorrow, any time preferences or should I just find a time on your calendar? Active listening will get you to identify actions and allow us to move faster.</p>
                                       <p>There are many articles on the internet which you may find helpful which will teach you how to focus on listening and what techniques you can apply. My focus in writing this article is to communicate the importance of listening and why it is the most critical skill in communication. Imagine for a moment that you are trying to convey a message to your team, or your leadership but they continue to interrupt and speak over you. Behavior like this can create an unfriendly and unproductive work environment.</p>
                                       <p>This message is for everyone, especially for those leaders who manage teams. They require great patience to listen and ensure that they understand what team members are saying through both verbal and nonverbal communication. <strong>A good leader must be a good listener to become a great leader</strong></p>
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