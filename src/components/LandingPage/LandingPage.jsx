import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const translateY1 = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);
  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    cssEase: "linear",
  };

  return (
    <div ref={ref} className="w-full relative h-auto overflow-hidden bg-black">
      <div className="w-full h-[60vh]">
        <Slider {...settings}>
          <div className="h-[60vh] flex items-center justify-center bg-gray-800">
            <motion.img
              src="/images/1.jpg" 
              alt="Slide 1"
              className="w-full h-full object-cover"
              style={{ opacity:opacity1, y: translateY1 }}
            />
          </div>

          {/* Slide 2 */}
          <div className="h-[60vh] flex items-center justify-center bg-green-500">
            <motion.img
              src="/images/2.jpg" 
              alt="Slide 1"
              className="w-full h-full object-cover"
              style={{ opacity: opacity1, y: translateY1 }}
            >
            </motion.img>
          </div>
          <div className="h-[60vh] flex items-center justify-center bg-yellow-500">
            <motion.img
              src="/images/3.jpg" 
              alt="Slide 1"
              className="w-full h-full object-cover"
              style={{ opacity: opacity1, y: translateY1 }}
            >
            </motion.img>
          </div>
        </Slider>
      </div>
      <div className="h-[40vh] w-full bg-gray-200 flex items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-800">More Content Below</h2>
      </div>
    </div>
  );
};

export default LandingPage;
