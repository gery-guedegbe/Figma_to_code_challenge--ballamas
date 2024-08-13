import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1 + i * 0.3,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="px-12 md:px-20 full flex flex-col items-center justify-between gap-16 text-center">
      <motion.div
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 1,
        }}
        className="headerBackground p-20 w-full flex flex-col items-center justify-start gap-6 rounded-3xl"
      >
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="flex items-center justify-center gap-2"
        >
          <div className="w-20 h-[0.5px] bg-white"></div>
          <div className="text-xs md:text-sm font-semibold text-white text-opacity-85">
            We bring new fashion to the world
          </div>
          <div className="w-20 h-[0.5px] bg-white"></div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="text-white text-2xl md:text-4xl font-bold font-chillax"
        >
          DISCOVER THE LATEST FASHION TRENDS HERE
        </motion.div>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="max-w-2xl text-sm md:text-base text-white font-medium"
        >
          Discover a world of fashion with our meticulously curated outfits.
          Shop now to update your wardrobe with chic and stylish outfits.
        </motion.div>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="flex items-center justify-center gap-1"
        >
          <button className="px-4 md:px-5 py-3 md:py-4 flex items-center justify-center bg-white text-black text-base font-bold rounded-full">
            Start shopping
          </button>
          <a
            href="#ff"
            className="px-3 md:px-4 py-3 md:py-4 flex items-center justify-center  rounded-full bg-white"
          >
            <svg
              className="w-6 h-auto"
              width="22"
              height="22"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.3335 5.8335H14.6668V14.1668"
                stroke="#1D1D1D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.3335 14.1668L14.6668 5.8335"
                stroke="#1D1D1D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        className="max-w-6xl text-black text-xl md:text-2xl font-bold font-chillax"
      >
        Discover the latest trends in summer fashion. Shop now and refresh your
        wardrobe with our stylish summer shirts.
      </motion.div>
    </div>
  );
};

export default HeroSection;
