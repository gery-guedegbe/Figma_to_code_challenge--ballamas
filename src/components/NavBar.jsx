import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [toggled, setToggled] = useState(false);

  const navigate = useNavigate();

  const reloadPage = () => {
    window.location.reload();
  };

  const navMotion = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 30,
      },
    },
    hidden: {
      y: "-150vw",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="w-full flex flex-col items-center justify-between ">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        transition={{ delay: 0.7 }}
        className="w-full py-2 flex items-center justify-center text-center bg-black text-xs md:text-xs text-white font-medium"
      >
        Sign up and get 20% off for all new arrivals collections
      </motion.div>

      {/* Deskop Nav Bar*/}

      <div className="hidden w-full xl:flex px-20 py-6 ">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full hidden xl:flex items-center justify-between border-b border-b-[#E5E5E5] pb-4"
        >
          <motion.ul
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -25 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between gap-6 font-normal text-sm md:text-base leading-loose"
          >
            <li>
              <a href="#Men">Men</a>
            </li>
            <li>
              <a href="#Women">Women</a>
            </li>
            <li>
              <a href="#Kids" className="">
                Kids
              </a>
            </li>
            <li>
              <a href="#Colletion">Collection</a>
            </li>
          </motion.ul>
          <motion.span
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1,
            }}
            onClick={reloadPage}
            translate="no"
            class=" font-chillax font-bold text-white text-xl md:text-3xl cursor-pointer"
            style={{
              textShadow:
                "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
            }}
          >
            BALLAMAS
          </motion.span>
          <motion.ul
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between gap-4 font-normal text-sm md:text-base leading-loose"
          >
            <li>
              <a href="#Shop">Shop</a>
            </li>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a
                href="#Account"
                className="flex items-center justify-center space-x-1 text-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75"
                    stroke="#1D1D1D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
                    stroke="#1D1D1D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Account
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/cart")}
                className="flex items-center justify-center space-x-0 text-center cursor-pointer"
              >
                Cart <span>(0)</span>
              </a>
            </li>
            <li>
              <a href="#Search">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3545_1875)">
                    <path
                      d="M14.583 14.583L18.333 18.333"
                      stroke="#1D1D1D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.667 9.16699C16.667 5.02486 13.3092 1.66699 9.16699 1.66699C5.02486 1.66699 1.66699 5.02486 1.66699 9.16699C1.66699 13.3092 5.02486 16.667 9.16699 16.667C13.3092 16.667 16.667 13.3092 16.667 9.16699Z"
                      stroke="#1D1D1D"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3545_1875">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </motion.ul>
        </motion.div>
      </div>

      {/* Mobile Nav Bar*/}

      <div className="w-full flex xl:hidden px-10 py-8">
        <div className="w-full xl:hidden flex items-center justify-between border-b border-b-[#E5E5E5] pb-4">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -25 }}
            transition={{ delay: 0.35 }}
            onClick={() => setToggled((prevToggle) => !prevToggle)}
            className={`w-10 h-10 z-50  flex flex-col items-center justify-center gap-2 bg-custom-neutral-50 rounded-xl xl:hidden`}
          >
            <motion.span
              animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 4 : 0 }}
              className="w-full h-0.5 bg-black rounded-full"
            ></motion.span>
            <motion.span
              animate={{
                rotateZ: toggled ? -45 : 0,
                y: toggled ? -6 : 0,
              }}
              className="w-full h-0.5 bg-black rounded-full"
            ></motion.span>
          </motion.div>
          <motion.span
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 1,
            }}
            translate="no"
            class="py-4 font-chillax font-bold text-white text-2xl z-50 cursor-pointer"
            style={{
              textShadow:
                "1px 1px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000",
            }}
            onClick={reloadPage}
          >
            BALLAMAS
          </motion.span>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 25 }}
            transition={{ delay: 0.35 }}
            className="flex items-center justify-center gap-2 z-50"
          >
            <a href="#Search">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3545_1875)">
                  <path
                    d="M14.583 14.583L18.333 18.333"
                    stroke="#1D1D1D"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.667 9.16699C16.667 5.02486 13.3092 1.66699 9.16699 1.66699C5.02486 1.66699 1.66699 5.02486 1.66699 9.16699C1.66699 13.3092 5.02486 16.667 9.16699 16.667C13.3092 16.667 16.667 13.3092 16.667 9.16699Z"
                    stroke="#1D1D1D"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3545_1875">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <button onClick={() => navigate("/cart")}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.58366 6.66699H16.8303C17.351 6.66699 17.6113 6.66699 17.8019 6.75103C18.645 7.12274 18.2681 8.05928 18.1262 8.73233C18.1007 8.85324 18.0178 8.95616 17.9017 9.01133C17.4197 9.23999 17.0822 9.67374 16.9936 10.1782L16.4997 12.9902C16.2825 14.2274 16.2082 15.9956 15.124 16.8672C14.3285 17.5003 13.1823 17.5003 10.8899 17.5003H9.11074C6.81834 17.5003 5.67216 17.5003 4.87666 16.8672C3.79243 15.9955 3.71814 14.2274 3.50088 12.9902L3.00705 10.1782C2.91847 9.67374 2.58094 9.23999 2.099 9.01133C1.98279 8.95616 1.89993 8.85324 1.87444 8.73233C1.73261 8.05928 1.35566 7.12274 2.19876 6.75103C2.38936 6.66699 2.64968 6.66699 3.1703 6.66699H6.25033"
                  stroke="#1D1D1D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M11.6663 10H8.33301"
                  stroke="#1D1D1D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.41699 9.16667L8.33366 2.5M12.5003 2.5L14.5837 6.66667"
                  stroke="#1D1D1D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Nav Items animating in  */}

      <AnimatePresence>
        {toggled && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navMotion}
            translate="no"
            className="xl:hidden fixed px-10 py-40 md:px-52 md:py-60 left-0 top-0 z-40 h-full w-full flex flex-col items-center justify-center bg-white overflow-auto"
          >
            <ul className="flex flex-col items-center justify-between gap-10 font-semibold text-custom-neutral-700 text-2xl">
              <li>
                <a href="#Men">Men</a>
              </li>
              <li>
                <a href="#Women">Women</a>
              </li>
              <li>
                <a href="#Kids" className="">
                  Kids
                </a>
              </li>
              <li>
                <a href="#Colletion">Colletion</a>
              </li>
              <li>
                <a href="#Shop">Shop</a>
              </li>
              <li>
                <a href="#About">Account</a>
              </li>
              <li>
                <a
                  href="#Account"
                  className="flex items-center justify-center space-x-1 text-center"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 15.75V14.25C14.25 13.4544 13.9339 12.6913 13.3713 12.1287C12.8087 11.5661 12.0456 11.25 11.25 11.25H6.75C5.95435 11.25 5.19129 11.5661 4.62868 12.1287C4.06607 12.6913 3.75 13.4544 3.75 14.25V15.75"
                      stroke="#1D1D1D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z"
                      stroke="#1D1D1D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Account
                </a>
              </li>
              <li className="mt-10">
                <a href="#FAQ">FAQ</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
