import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import articles from "../data";

const Details = () => {
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: { scale: 1.1 },
    pressed: { scale: 0.9 },
  };

  const containerVariants = {
    hidden: { x: 300, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="px-12 md:px-20 w-full flex flex-col items-center justify-between gap-16 text-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        <motion.img
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
          src="../assets/images/detail-image.png"
          alt="details_image"
          className="max-w-full md:max-w-md h-auto object-contain rounded-3xl"
        />
        <motion.div
          className="flex flex-col items-start justify-between gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-xl md:text-2xl text-black font-semibold font-chillax"
            variants={itemVariants}
          >
            Badacore Tshirt
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-black font-semibold"
            variants={itemVariants}
          >
            CAD $80
          </motion.p>
          <motion.span
            className="text-base md:text-lg text-black font-medium"
            variants={itemVariants}
          >
            Color: Green
          </motion.span>
          <motion.div
            className="flex items-start justify-center gap-4"
            variants={itemVariants}
          >
            <div className="w-8 md:w-10 h-8 md:h-10 bg-[#2D5C43] rounded-full"></div>
            <div className="w-8 md:w-10 h-8 md:h-10 bg-[#393158] rounded-full"></div>
            <div className="w-8 md:w-10 h-8 md:h-10 bg-[#2A5259] rounded-full"></div>
            <div className="w-8 md:w-10 h-8 md:h-10 bg-[#706947] rounded-full"></div>
          </motion.div>
          <motion.span
            className="text-base md:text-lg text-black font-medium"
            variants={itemVariants}
          >
            Size:
          </motion.span>
          <motion.div
            className="flex items-center justify-center gap-4"
            variants={itemVariants}
          >
            {["XS", "S", "M", "L", "XL"].map((text, i) => (
              <motion.button
                key={i}
                custom={i}
                onClick={() => setIsClicked(text)}
                className={`px-4 py-2 uppercase ${
                  isClicked === text
                    ? "bg-black text-white"
                    : "bg-white text-black border-2 border-black"
                } text-sm font-bold rounded-full`}
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>
          <motion.div
            className="flex items-center justify-start gap-2 mt-2"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              translate="no"
              className="px-6 py-3 flex items-center justify-center bg-black text-white text-sm font-semibold rounded-full uppercase"
            >
              BUY NOW
            </motion.button>
            <motion.button
              onClick={() => navigate("/cart")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              translate="no"
              className="px-6 py-3 flex items-center justify-center border border-black bg-white text-black text-sm font-semibold rounded-full uppercase"
            >
              ADD TO CART
            </motion.button>
          </motion.div>
          <motion.div
            className="flex flex-col items-start justify-start gap-2"
            variants={itemVariants}
          >
            <span className="text-lg text-black font-medium font-chillax">
              Description
            </span>
            <p className="max-w-3xl text-sm text-black text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full flex flex-col items-center justify-center text-left gap-8">
        <motion.h1
          className="w-full text-2xl md:text-3xl text-black text-left font-semibold font-chillax"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          You may also like
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="w-full flex flex-col items-center justify-center gap-4 bg-white"
              variants={itemVariants}
            >
              <div className="max-w-2xl h-auto relative group">
                <img
                  src={article.image_url}
                  alt={article.name}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  {article.name}
                </p>
                <span
                  translate="no"
                  className="text-base text-gray-500 font-bold leading-tight"
                >
                  ${article.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Details;
