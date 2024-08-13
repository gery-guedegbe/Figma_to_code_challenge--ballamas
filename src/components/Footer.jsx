import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
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

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-12 text-center bg-black text-white mt-6">
      <div className="p-10 w-full flex flex-col items-start justify-between md:flex-row md:items-center gap-10">
        <div className="flex flex-col items-start text-start gap-4">
          <motion.span
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1,
            }}
            translate="no"
            class=" font-chillax font-bold text-white text-lg md:text-xl z-50"
            style={{
              color: "transparent",
              WebkitTextStroke: "0.6px white",
            }}
          >
            BALLAMAS
          </motion.span>
          <motion.p
            initial={{ x: -25, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1,
            }}
            className="max-w-md text-sm font-medium"
          >
            Subscribe to our newsletter for upcoming products and best discount
            for all items
          </motion.p>
          <div className="flex items-center justify-start gap-4">
            <motion.input
              initial={{ x: -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 1,
              }}
              type="text"
              placeholder="Your email"
              className="px-8 py-3 ps-3 border border-white text-white text-sm font-medium placeholder:text-sm placeholder:text-white bg-transparent cursor-text outline-none rounded-full"
            />
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="pressed"
              className="px-4 py-3 bg-white text-black border border-black text-xs font-semibold rounded-full"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
        <motion.div
          initial={{ x: 25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 1,
          }}
          className="flex items-start justify-center gap-10"
        >
          <ul className="flex flex-col items-start justify-center gap-2">
            <li className="font-medium text-sm">Product</li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Jacket</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Jacket">T-Shit</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Jacket</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Shoes</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Sunglasses">Sunglasses</a>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-center gap-2">
            <li className="font-medium text-sm">Categories</li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Man</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Woman</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Kids</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Jacket">Git</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Sunglasses">New arival</a>
            </li>
          </ul>
          <ul className="flex flex-col items-start justify-center gap-2">
            <li className="font-medium text-sm">Our Social Media</li>
            <li className="text-xs font-normal">
              <a href="#Instagram">Instagram</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Facebook">Facebook</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#Youtube">Youtube</a>
            </li>
            <li className="text-xs font-normal">
              <a href="#X">X</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
