'use client';
import { useEffect } from 'react';

export default function CaseStudySliderComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".case-study-slider").length) {
        $(".case-study-slider").slick({
            dots: false,
            infinite: true,
            //centerMode: true,
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
        <div className="case-study-slider">
            <div>
                <div className="case-study-slide">
                    <div className="slide-no">01 / 03</div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="case-study-content">
                                <h5 className="section-title-v1">CASE STUDY</h5>
                                <h1 className="section-title"><span className="text-blue">Your trusted partner in IT staffing solutions.</span> </h1>
                                <div className="case-content">Unlock top tech talent for contract, contract-to-hire, and full-time roles across the U.S. Whether you're building a team or filling a critical role, we deliver the right people—fast.<br/>
                                   Our Talent, Your Advantage-<br/>From early-stage startups to Fortune 500 enterprises, our clients rely on us for dependable, qualified consultants ready to make an impact from day one.
                                </div>                                
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="case-study-img"><img src="./images/case-study.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="case-study-slide">
                    <div className="slide-no">02 / 03</div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="case-study-content">
                                <h5 className="section-title-v1">CASE STUDY</h5>
                                <h1 className="section-title"><span className="text-blue">Expert IT Consulting Services</span></h1>
                                <div className="case-content">We provide tailored IT consulting services that help businesses navigate complex technology challenges and accelerate growth. From strategic planning to implementation, our consultants bring deep domain expertise across software development, cloud infrastructure, data solutions, and enterprise systems—empowering you to make smarter decisions and drive lasting impact.<br/>
                                   Technologies We Cover-<br/>
                                   Java • Python • .NET • React • Angular • Node.js • AWS • Azure • GCP • Kubernetes • Snowflake • Salesforce • and more
                                </div>                              
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="case-study-img"><img src="./images/case-study.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="case-study-slide">
                    <div className="slide-no">03 / 03</div>
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="case-study-content">
                                <h5 className="section-title-v1">CASE STUDY</h5>
                                <h1 className="section-title"><span className="text-blue">Offshore Development Services</span></h1>
                                <div className="case-content">Extend your team globally with our reliable and cost-effective offshore development solutions. We provide access to highly skilled professionals across a wide range of technologies, enabling you to scale faster, reduce costs by up to 60–80%, and maintain high quality and productivity. Our offshore teams work in your time zone, follow agile practices, and integrate seamlessly with your internal teams to deliver results without compromise.</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="case-study-img"><img src="./images/case-study.png" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>          
  );
}


