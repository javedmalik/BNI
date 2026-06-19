'use client';
import { useEffect } from 'react';

export default function GoldenClientComponent() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".clients-slider").length) {
        $(".clients-slider").slick({
            dots: false,
            infinite: true,
            //centerMode: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true, 
            pauseOnHover:true,
            responsive: [
                {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
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
            <div className="clients-slider">
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-danaher.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-cepheid.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-pall-corporation.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-pwc.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-hcl.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-tech-mahindra.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-perficient.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-rbc.png" alt="" /></div>
                    </div>
                </div>
                <div>
                    <div className="client-slide">
                        <div className="client-logo"><img src="./images/our-client-nous-infosystems.png" alt="" /></div>
                    </div>
                </div>
            </div>                                 
  );
}
