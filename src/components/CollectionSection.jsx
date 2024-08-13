import React from "react";
import { motion } from "framer-motion";

const CollectionSection = () => {
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
    <div className="px-12 md:px-20 w-full flex flex-col items-center justify-between gap-12 text-center">
      <div className="flex flex-col items-center justify-center gap-1">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-black text-2xl md:text-4xl font-bold font-chillax uppercase"
        >
          OUR COLLECTION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className=" text-base md:text-lg text-[#7E7E7E] font-normal"
        >
          Our latest collection, where classic and contemporary styles converge
          in perfect harmony.
        </motion.p>
      </div>
      <div className="w-full grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-center justify-center place-content-center ">
        <motion.img
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          src="../public/images/person_1.png"
          alt="person-1"
          className="w-full h-auto object-cover col-span-1 rounded-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="footerBackground w-full h-auto col-span-1 xl:col-span-2 flex flex-col items-center justify-center gap-2 rounded-3xl"
        >
          <motion.h3
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            className=" font-chillax font-bold text-transparent text-4xl uppercase z-50"
            style={{
              color: "transparent",
              WebkitTextStroke: "0.6px white",
            }}
          >
            CLASSIC MEN
          </motion.h3>
          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textAnimation}
            className="max-w-lg text-white text-base md:text-lg font-semibold  "
          >
            We’re changing the way things get made
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default CollectionSection;
