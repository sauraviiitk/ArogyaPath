import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LandingPage = () => {
  const ref = useRef(null); // Reference to track scroll inside the div
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Smooth fade-in + slide-up effect for Page 1 text
  const opacity1 = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]); 
  const translateY1 = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  // Smooth fade-in + slide-up effect for Page 2 text
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]); 
  const translateY2 = useTransform(scrollYProgress, [0.6, 0.8], [50, 0]);

  return (
    <div ref={ref} className="h-screen w-screen overflow-y-scroll scroll-smooth">
      {/* Page 1 */}
      <div className="h-screen w-full bg-red-500 flex items-center justify-center">
        <motion.h1 
          className="text-white text-5xl font-bold"
          style={{ opacity: opacity1, y: translateY1 }}
        >
                      Welcome to Page 1

      
        </motion.h1>
      </div>

      {/* Page 2 */}
      <div className="h-screen w-full bg-green-500 flex items-center justify-center">
        <motion.h1 
          className="text-white text-5xl font-bold"
          style={{ opacity: opacity1, y: translateY1 }}
        >
          Welcome to Page 2
        </motion.h1>
      </div>
      <div className="h-screen w-full bg-yellow-500 flex items-center justify-center">
        <motion.h1 
          className="text-white text-5xl font-bold"
          style={{ opacity: opacity1, y: translateY1 }}
        >
          Welcome to Page 3
        </motion.h1>
      </div>
      <div className="h-screen w-full bg-pink-500 flex items-center justify-center">
        <motion.h1 
          className="text-white text-5xl font-bold"
          style={{ opacity: opacity1, y: translateY1 }}
        >
          Welcome to Page 4
        </motion.h1>
      </div>
    </div>
  );
};

export default LandingPage;
