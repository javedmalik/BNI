'use client';
import Link from 'next/link';

export default function InsightsDetailsComponent() {
  return (   
            <div className="col-12 col-md-4 col-lg-3">
                <div className="insights-right-side">
                    <div className="categories-section wow fadeInUp">
                        <h4>Categories</h4>
                        <Link className="link" href="/insights">Blogs</Link>                                                                        
                    </div>
                    <div className="popular-topics-section wow fadeInUp">
                        <h4>Popular Topics:</h4>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">9 December, 2024</span>
                            </div>
                            <h5>Listening is The Communication</h5>
                            <div className="read-more"><Link href="/listening-is-the-communication.html#post-details">Read More</Link></div>
                        </div>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">10 July, 2024</span>
                            </div>
                            <h5>Managing Your Project Sponsors</h5>
                            <div className="read-more"><Link href="/managing-your-project-sponsors.html#post-details">Read More</Link></div>
                        </div>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">16 January, 2024</span>
                            </div>
                            <h5>Leaders Set The Tone</h5>
                            <div className="read-more"><Link href="/leaders-set-the-tone.html#post-details">Read More</Link></div>
                        </div>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">11 November, 2023</span>
                            </div>
                            <h5>Why Do Many IT Projects Fail?</h5>
                            <div className="read-more"><Link href="/why-do-many-it-projects-fail.html#post-details">Read More</Link></div>
                        </div>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">5 August, 2023</span>
                            </div>
                            <h5>Make Your Project Execution Phase As Boring As Possible</h5>
                            <div className="read-more"><Link href="/make-your-project-execution.html#post-details">Read More</Link></div>
                        </div>                                          
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">25 March, 2023</span>
                            </div>
                            <h5>Effective Process Or Efficiency Killer</h5>
                            <div className="read-more"><Link href="/effective-process-efficiency-killer.html#post-details">Read More</Link></div>
                        </div>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">11 December, 2022</span>
                            </div>
                            <h5>You Can Never Over Communicate</h5>
                            <div className="read-more"><Link href="/you-can-never-over-communicate.html#post-details">Read More</Link></div>
                        </div>
                        <div className="popular-topic">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">17 January, 2022</span>
                            </div>
                            <h5>Every Manager Must Study Sociology</h5>
                            <div className="read-more"><Link href="/every-manager-must-study-sociology.html#post-details">Read More</Link></div>
                        </div>
                    </div>
                </div>
            </div>                          
  );
}
