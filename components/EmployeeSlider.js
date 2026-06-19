'use client';
import { useEffect } from 'react';

export default function EmployeeSlider() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".empolyee-slider").length) {
        $(".empolyee-slider").slick({
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
            <div className="empolyee-slider">
                <div>
                    <div className="empolyee-slide">
                        {
                            /*
                            <div className="slide-no">01 / 03</div>
                            */
                        }
                        
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="empolyee-content">
                                    <h5 className="section-title-v1">Meet the Team</h5>
                                    <h1 className="section-title">We take pride in celebrating our team—powered by talent, passion, and unwavering dedication.</h1>
                                    <div className="empolyee-content">Meet our HR Director, Siddhi Gupta. Siddhi is passionate about community involvement and people leadership. She takes a personalized approach with her team and her work, ensuring authenticity and social responsibility with every project. In her free time, she keeps busy with lots of travel and reading and likes to relax by watching a good movie. As an indispensable member of Team BNI, she brings her positivity and empathy to every corner of the organization.</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="empolyee-right">
                                    <div className="empolyee-img"><img src="./images/Siddhi.png" alt="" /></div>
                                    <div className="employee-designation">
                                        <h2>Siddhi Gupta</h2>
                                        <h3>HR Director</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                /*
                <div>
                    <div className="empolyee-slide">
                        <div className="slide-no">02 / 03</div>
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="empolyee-content">
                                    <h5 className="section-title-v1">Meet the Team</h5>
                                    <h1 className="section-title">Here are a few thoughts shared by our <span className="text-blue">Employee</span></h1>
                                    <div className="empolyee-content">Meet our PR Director, Siddhi Gupta. Siddhi is passionate about community involvement and people leadership. She takes a personalized approach with her team and her work, ensuring authenticity and social responsibility with every project. In her free time, she keeps busy with lots of travel and reading and likes to relax by watching a good movie. As an indispensable member of Team BNI, she brings her positivity and empathy to every corner of the organization.</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="empolyee-right">
                                    <div className="empolyee-img"><img src="./images/team-02.png" alt="" /></div>
                                    <div className="employee-designation">
                                        <h2>Siddhi Gupta</h2>
                                        <h3>PR Director</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="empolyee-slide">
                        <div className="slide-no">03 / 03</div>
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="empolyee-content">
                                    <h5 className="section-title-v1">Meet the Team</h5>
                                    <h1 className="section-title">Here are a few thoughts shared by our <span className="text-blue">Employee</span></h1>
                                    <div className="empolyee-content">Meet our PR Director, Siddhi Gupta. Siddhi is passionate about community involvement and people leadership. She takes a personalized approach with her team and her work, ensuring authenticity and social responsibility with every project. In her free time, she keeps busy with lots of travel and reading and likes to relax by watching a good movie. As an indispensable member of Team BNI, she brings her positivity and empathy to every corner of the organization.</div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5">
                                <div className="empolyee-right">
                                    <div className="empolyee-img"><img src="./images/team-02.png" alt="" /></div>
                                    <div className="employee-designation">
                                        <h2>Siddhi Gupta</h2>
                                        <h3>PR Director</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                */
                }                
            </div>                   
  );
}


