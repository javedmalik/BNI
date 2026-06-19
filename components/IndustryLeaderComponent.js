'use client';
import { useEffect } from 'react';

export default function IndustryLeaderComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".leaders-slider").length) {
        $(".leaders-slider").slick({
            dots: false,
            infinite: true,
            centerMode: true,
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
            <div className="leaders-slider">
                <div>
                    <div className="leader-slide">
                        <div className="leader-head">
                            <div className="leader-img"><img src="./images/testimonials-img-01.png" alt="" /></div>
                            <h4>Mamta Gupta</h4>
                            <h5>Bikanervala Diamond Bar</h5>
                        </div>
                        <div className="leader-content">“BNI was an incredible help when it came to setting up my restaurant. They handled the setup of the POS system, security systems, and provided continuous IT support.  They ensured our restaurant opening was a seamless, smooth process.”</div>
                    </div>
                </div>
                <div>
                    <div className="leader-slide">
                        <div className="leader-head">
                            <div className="leader-img"><img src="./images/testimonials-img-01.png" alt="" /></div>
                            <h4>Mamta Gupta</h4>
                            <h5>Bikanervala Diamond Bar</h5>
                        </div>
                        <div className="leader-content">“BNI was an incredible help when it came to setting up my restaurant. They handled the setup of the POS system, security systems, and provided continuous IT support.  They ensured our restaurant opening was a seamless, smooth process.”</div>
                    </div>
                </div>
                <div>
                    <div className="leader-slide">
                        <div className="leader-head">
                            <div className="leader-img"><img src="./images/testimonials-img-01.png" alt="" /></div>
                            <h4>Mamta Gupta</h4>
                            <h5>Bikanervala Diamond Bar</h5>
                        </div>
                        <div className="leader-content">“BNI was an incredible help when it came to setting up my restaurant. They handled the setup of the POS system, security systems, and provided continuous IT support.  They ensured our restaurant opening was a seamless, smooth process.”</div>
                    </div>
                </div>
            </div>                                            
  );
}

