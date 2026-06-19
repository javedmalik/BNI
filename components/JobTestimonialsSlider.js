'use client';
import { useEffect } from 'react';

export default function JobTestimonialsSlider() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".success-story-slider").length) {
        $(".success-story-slider").slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true, 
            pauseOnHover:true,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
            <div className="success-story-slider wow fadeInUp">
                <div>
                    <div className="success-story-slide">
                        <div className="slide-no">01 / 03 Testimonials</div>
                        <div className="success-story">
                            <div className="story-img-wrap">
                                <div className="cort-icon"><img src="./images/cort-icon.png" alt="" /></div>
                                <div className="story-img"><img src="./images/AchintyaGupta-1.jpg" alt="" width={300} height={450}/></div>
                            </div>
                            <div className="success-story-content">
                                <div className="story-content">What I love most about BNI is the “Family First” mindset—there’s genuine care for people here. I started as an account manager and now lead key projects, including product development and the PMO function. The freedom to take ownership and grow at my own pace has been incredible. At BNI, you’re not just doing a job, you’re trusted, empowered, and truly valued.</div>
                                <div className="story-author">
                                    <h4>Achintya Gupta</h4>
                                    <div className="designation">Project Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="success-story-slide">
                        <div className="slide-no">02 / 03 Testimonials</div>
                        <div className="success-story">
                            <div className="story-img-wrap">
                                <div className="cort-icon"><img src="./images/cort-icon.png" alt="" /></div>
                                <div className="story-img"><img src="./images/SrishTripathi.jpg" alt="" width={300} height={450}/></div>
                            </div>
                            <div className="success-story-content">
                                <div className="story-content">Being part of Business Needs Inc. is truly inspiring. The professionalism, teamwork, and team-focused approach make it more than just a workplace—it’s a community dedicated to meaningful impact. At BNI, we go beyond professional relationship; we create a bond that help businesses thrive. I'm grateful to work alongside such talented individuals, learning and growing every day. Proud to be part of this journey!</div>
                                <div className="story-author">
                                    <h4>Srish Tripathi</h4>
                                    <div className="designation">Sr.Business Development Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="success-story-slide">
                        <div className="slide-no">03 / 03 Testimonials</div>
                        <div className="success-story">
                            <div className="story-img-wrap">
                                <div className="cort-icon"><img src="./images/cort-icon.png" alt="" /></div>
                                <div className="story-img"><img src="./images/HimanshuSingh.jpg" alt="" width={300} height={450} /></div>
                            </div>
                            <div className="success-story-content">
                                <div className="story-content">Working at Business Needs Inc. has been an incredible journey. Supportive culture and teamwork make it a place where everyone thrives. I've grown both personally and professionally, taking on challenges that have boosted my skills and confidence. Leadership here truly values innovation and learning, making every day fulfilling. BNI isn’t just a workplace—it’s a community that empowers you to succeed.</div>
                                <div className="story-author">
                                    <h4>Himanshu Singh</h4>
                                    <div className="designation">Recruitment Manager</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                                   
  );
}