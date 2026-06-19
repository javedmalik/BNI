'use client';
import { useEffect } from 'react';
import Link from 'next/link';

export default function InsightsComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".insights-slider").length) {
        $(".insights-slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true, 
            pauseOnHover:true,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true
                }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
                ] 
         });
        }
    };

    const timer = setTimeout(() => {
      if (typeof $ !== 'undefined') {
        $(document).ready(initSlick);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (   
            <div className="insights-slider">
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/Listening.jpg" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">9 December, 2024</span>
                            </div>
                            <h2>Listening is The Communication</h2>
                            <div className="description">Are You Listening? The question Are You Listening? is mostly not understood and people reply with a big YES or by nodding their head.</div>
                            <div className="read-more"><Link href="/listening-is-the-communication.html#post-details">Read More...</Link></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/managing.jpg" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">10 July, 2024</span>
                            </div>
                            <h2>Managing Your Project Sponsors</h2>
                            <div className="description">In this article, I mentioned one of the reasons for project failures is lack of engagement from project sponsors.</div>
                            <div className="read-more"><Link href="/managing-your-project-sponsors.html#post-details">Read More...</Link></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/leaders.jpg" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">16 January, 2024</span>
                            </div>
                            <h2>Leaders Set The Tone</h2>
                            <div className="description">The most fundamental argument around leadership is whether leadership is inherent to a person or whether it can be taught.</div>
                            <div className="read-more"><Link href="/leaders-set-the-tone.html#post-details">Read More...</Link></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="new-insights-box wow fadeInUp">
                        <div className="insights-img"><img src="images/whydo.jpg" alt="" /></div>
                        <div className="insights-content">
                            <div className="news-category">
                                <span className="category">Blogs</span>
                                <span className="date">11 November, 2023</span>
                            </div>
                            <h2>Why Do Many IT Projects Fail?</h2>
                            <div className="description">Many organizations have experienced projects that failed to deliver on time, on budget, or the scope that was initially intended.</div>
                            <div className="read-more"><Link href="/why-do-many-it-projects-fail.html#post-details">Read More...</Link></div>
                        </div>
                    </div>
                </div>
            </div>                               
  );
}
