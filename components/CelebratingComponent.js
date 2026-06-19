'use client';
import { useEffect } from 'react';

export default function CelebratingComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".our-brands-slider").length) {
        $(".our-brands-slider").slick({
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
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="celebrating-img-wrapper">
                        <div className="anniversary-img wow fadeInUp"><img src="./images/anniversary.png" alt="" /></div>
                        <div className="celebrating-img wow fadeInUp"><img src="./images/celebrating-img.jpeg" alt="" /></div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="celebrating-content wow fadeInUp">
                        <h1 className="section-title">20+ Years of Excellence</h1>
                        <p>For over 20 years, Business Needs Inc. has been a trusted partner in delivering tailored IT solutions and expert staffing services. Our legacy is built upon client trust, innovation, and excellence in every partnership. From our first consulting project, to creating new ventures in other industries, Business Needs is committed to growth and innovation. We are proud to expand our impact as a parent company to a growing group of brands.</p>
                    </div>
                    <div className="celebrating-brands">
                        <h3 className="wow fadeInUp">Check Out Our Brands</h3>
                        <div className="our-brands-slider">
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.1s"><a href="https://riyuglobal.com/" target="_blank"><img src="./images/our-brand-01.png" alt="" /></a></div>
                            </div>
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.2s"><a href="https://www.rrindustriesus.com/" target="_blank"><img src="./images/our-brand-02.png" alt="" /></a></div>
                            </div>
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.3s"><a href="https://www.harshuglobal.com/" target="_blank"><img src="./images/our-brand-03.png" alt="" /></a></div>
                            </div>   
                            <div>
                                <div className="brand wow fadeInUp" data-wow-delay="0.2s"><a href="https://www.onpointwares.com/" target="_blank"><img src="./images/our-brand-04.png" alt="" /></a></div>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>                            
  );
}


