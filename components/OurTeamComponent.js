'use client';
import { useEffect } from 'react';

export default function OurTeamComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".our-team-slider").length) {
        $(".our-team-slider").slick({
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true, 
            pauseOnHover:true,
            arrows:false,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
                },
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true
                }
                },
                {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
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
            <div className="our-team-slider">
                <div>
                    <div className="team-box wow fadeInUp">
                        <div className="team-img"><img src="./images/Vinayak.png" alt="Vinayak Mittal" /></div>
                        <div className="team-content">
                            <h1>Vinayak Mittal</h1>
                            <h5>Vice President Operations</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="team-box wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-img"><img src="./images/Mudith.png" alt="Mudit Maheshwari" /></div>
                        <div className="team-content">
                            <h1>Mudit Maheshwari</h1>
                            <h5>Director of Business Development</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="team-box wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-img"><img src="./images/DG_Headshot.png" alt="David Garcia" /></div>
                        <div className="team-content">
                            <h1>David Garcia</h1>
                            <h5>Director of IT</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="team-box wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-img"><img src="./images/Rohan.png" alt="Rohan Mittal" /></div>
                        <div className="team-content">
                            <h1>Rohan Mittal</h1>
                            <h5>Director of Business Development</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="team-box wow fadeInUp">
                        <div className="team-img"><img src="./images/Pankaj.png" alt="Pankaj Mital" /></div>
                        <div className="team-content">
                            <h1>Pankaj Mital</h1>
                            <h5>CEO</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="team-box wow fadeInUp">
                        <div className="team-img"><img src="./images/Siddhi.png" alt="Siddhi Gupta" /></div>
                        <div className="team-content">
                            <h1>Siddhi Gupta</h1>
                            <h5>Director-HR</h5>
                        </div>
                    </div>
                </div>
            </div>                         
  );
}


