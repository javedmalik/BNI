'use client';
import { useEffect } from 'react';
//This is Extra for Testing.

export default function MainSlider() {
  useEffect(() => {
    const $ = window.$;
    const initSlick = () => {
      if ($(".main-slider").length) {
        $(".main-slider").slick({
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          pauseOnHover: true,
          arrows: false,
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
    <div className="main-slider">
      <div><h3>Slide 1</h3></div>
      <div><h3>Slide 2</h3></div>
      <div><h3>Slide 3</h3></div>
    </div>
  );
}
