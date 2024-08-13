import {
  faCreditCardAlt,
  faLongArrowRight,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import React from "react";

const CheckoutPage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const formFields = [
    { label: "First name", placeholder: "Enter your first name" },
    { label: "Email address", placeholder: "Enter your email address" },
    { label: "Address", placeholder: "Enter your address" },
    { label: "Religion", placeholder: "Select religion" },
    { label: "Last name", placeholder: "Enter your last name" },
    { label: "Phone number", placeholder: "Enter your phone number" },
    { label: "City", placeholder: "City" },
    { label: "Postal code", placeholder: "Enter your postal code" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-12 md:px-20 w-full h-full flex flex-col md:flex-row md:items-start items-center justify-between gap-16 text-center"
    >
      <motion.div
        variants={itemVariants}
        className="w-full flex flex-col items-start justify-start gap-6"
      >
        <h1 className="font-chillax text-lg md:text-xl text-black font-semibold">
          Checkout
        </h1>
        <div className="flex flex-col items-start justify-between gap-2">
          <h4 className="text-sm text-black font-medium">Your Order</h4>
          <p className=" text-left text-sm text-[#7E7E7E]">
            By placing your order, you agree to Ballamas{" "}
            <a
              href="#Privacy"
              className="text-sm text-black font-medium underline "
            >
              Privacy
            </a>{" "}
            and{" "}
            <a
              href="#Policy"
              className="text-sm text-black font-medium underline"
            >
              Policy
            </a>
            .
          </p>
        </div>
        <div className="w-full flex items-center justify-start gap-2">
          <img
            src="/images/person_5.png"
            alt=""
            className="w-20 h-16 object-cover rounded-2xl "
          />
          <div className="w-full flex flex-col items-start justify-start gap-0">
            <span className="text-base text-black font-semibold">
              Men's Dri-FIT Golf Jacket
            </span>
            <div className="w-full flex items-start justify-between">
              {" "}
              <span className="text-xs text-[#7E7E7E] font-medium">
                Color: Ocean - Size: Large
              </span>
              <span className="text-base text-black font-semibold">$180</span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-start gap-2">
          <img
            src="/images/jordan_shoes.png"
            alt=""
            className="w-20 h-16 object-cover rounded-2xl "
          />
          <div className="w-full flex flex-col items-start justify-start gap-0">
            <span className="text-base text-black font-semibold">
              Tatum 2 "Red Cement"
            </span>
            <div className="w-full flex items-start justify-between">
              {" "}
              <span className="text-xs text-[#7E7E7E] font-medium">
                Size: 15
              </span>
              <span className="text-base text-black font-semibold">$125</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h4 className="text-sm text-black font-medium">Discount Code</h4>
          <div className="flex items-center justify-center gap-2">
            <motion.input
              variants={itemVariants}
              type="text"
              placeholder="Add discount code"
              className="px-10 py-3 ps-3 border border-black text-black text-sm font-medium placeholder:text-sm placeholder:text-black bg-transparent cursor-text outline-none rounded-full placeholder:Add discount code"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="py-3 px-6 flex items-center justify-center bg-black text-sm text-white font-semibold rounded-full "
            >
              Aplly
            </motion.button>
          </div>
          <p className="text-sm text-[#7E7E7E]">
            New customer?{" "}
            <a
              href="#Signup"
              className="text-sm text-black font-medium underline"
            >
              Signup
            </a>{" "}
            to get better offer
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <div className="w-full flex items-start justify-between">
            {" "}
            <span className="text-xs text-[#7E7E7E] font-medium">Subtotal</span>
            <span className="text-base text-black font-semibold">$524.00</span>
          </div>
          <div className="w-full flex items-start justify-between">
            <span className="text-xs text-[#7E7E7E] font-medium">Discount</span>
            <span className="text-base text-black font-semibold">$0</span>
          </div>
          <div className="mt-6 w-full flex items-start justify-between pb-3 border-b border-[#7E7E7E]">
            <span className="text-sm text-black font-semibold">
              Order total
            </span>
            <span className="text-base text-black font-semibold">$0</span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-between gap-2">
          <h4 className="text-sm text-black font-medium">Shipping method</h4>

          <div class="p-3 flex items-center justify-between text-left border border-[#E5E5E5] rounded-lg w-full">
            <div class="flex items-center w-full">
              <label
                class="relative flex items-start p-3 rounded-full cursor-pointer"
                for="description1"
              >
                <input
                  type="checkbox"
                  class="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900 transition-all checked:bg-white"
                  id="description1"
                />
                <span class="absolute top-2/4 left-2/4 h-3 w-3 bg-black rounded-full opacity-0 transition-opacity peer-checked:opacity-100 transform -translate-x-2/4 -translate-y-2/4"></span>
              </label>
              <label
                class="font-light text-gray-700 cursor-pointer select-none w-full"
                for="description1"
              >
                <div className="w-full flex items-center justify-between gap-6">
                  <div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      Regular shipping
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      3-14 business days
                    </p>
                  </div>
                  <span className="text-base text-black font-semibold">$0</span>
                </div>
              </label>
            </div>
          </div>
          <div class="p-3 flex items-center justify-between text-left border border-[#E5E5E5] rounded-lg w-full">
            <div class="flex items-center w-full">
              <label
                class="relative flex items-start p-3 rounded-full cursor-pointer"
                for="description2"
              >
                <input
                  type="checkbox"
                  class="peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900 transition-all checked:bg-white"
                  id="description2"
                />
                <span class="absolute top-2/4 left-2/4 h-3 w-3 bg-black rounded-full opacity-0 transition-opacity peer-checked:opacity-100 transform -translate-x-2/4 -translate-y-2/4"></span>
              </label>
              <label
                class="font-light text-gray-700 cursor-pointer select-none w-full"
                for="description2"
              >
                <div className="w-full flex items-center justify-between gap-6">
                  <div>
                    <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                      Regular shipping
                    </p>
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      3-14 business days
                    </p>
                  </div>
                  <span className="text-base text-black font-semibold">$0</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="w-full  flex flex-col items-start justify-between gap-4"
      >
        <div className="flex flex-col items-start justify-center">
          {" "}
          <h4 className="text-sm text-black font-medium">Payment details</h4>
          <p className="text-xs text-[#7E7E7E] font-medium">
            Complete your purchase by providing your payment details.
          </p>
        </div>
        <h4 className="text-sm text-black font-medium">Shipping address</h4>
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="w-full md:w-1/2 flex flex-col items-start justify-between gap-4">
            {formFields.slice(0, 4).map((field, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start justify-center gap-2"
              >
                <label className="text-sm text-black font-medium">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 ps-3 border border-black text-black text-sm font-medium placeholder:text-xs placeholder:text-black bg-transparent cursor-text outline-none focus:ring-2 focus:shadow-lg focus:ring-teal-300 rounded-full"
                />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start justify-between gap-4">
            {formFields.slice(4, 8).map((field, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start justify-center gap-2"
              >
                <label className="text-sm text-black font-medium">
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 ps-3 border border-black text-black text-sm font-medium placeholder:text-xs placeholder:text-black bg-transparent cursor-text outline-none rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <button className="w-full md:w-1/2 p-4 flex flex-col items-start justify-between border border-[#E5E5E5] rounded-lg focus:border-black">
            <span>
              <FontAwesomeIcon icon={faCreditCardAlt} />
            </span>
            <span className="text-sm text-black font-medium">
              Debit / Credit Card
            </span>
          </button>
          <button className="w-full md:w-1/2 p-4 flex flex-col items-start justify-between border border-[#E5E5E5] rounded-lg focus:border-black">
            <span>
              <FontAwesomeIcon icon={faUniversity} />
            </span>
            <span className="text-sm text-black font-medium">
              Virtual account
            </span>
          </button>
        </div>
        <input
          type="text"
          placeholder="Card number"
          className="w-full px-4 py-3 ps-3 border border-black text-black text-sm font-medium placeholder:text-xs placeholder:text-black bg-transparent cursor-text outline-none rounded-full"
        />
        <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <input
            type="text"
            placeholder="Expiration date (MM/YY)"
            className="w-full px-4 py-3 ps-3 border border-black text-black text-sm font-medium placeholder:text-xs placeholder:text-black bg-transparent cursor-text outline-none rounded-full"
          />
          <input
            type="text"
            placeholder="Security code"
            className="w-full px-4 py-3 ps-3 border border-black text-black text-sm font-medium placeholder:text-xs placeholder:text-black bg-transparent cursor-text outline-none rounded-full"
          />
        </div>
        <div class="inline-flex items-center gap-2">
          <label
            class="relative flex items-center rounded-full cursor-pointer"
            htmlFor="link"
          >
            <input
              type="checkbox"
              class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
              id="link"
            />
            <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            class=" font-light text-gray-700 cursor-pointer select-none"
            htmlFor="link"
          >
            <p class="flex font-sans text-sm antialiased font-medium leading-relaxed text-blue-gray-900">
              Use shipping address as billing address
            </p>
          </label>
        </div>
        <motion.button
          whileTap={{ scale: 1.1 }}
          onClick={() => navigate("/confirmPage")}
          className="w-full py-3 flex items-center justify-center gap-2 bg-white text-black border-2 border-black hover:bg-black hover:text-white text-sm font-semibold rounded-full uppercase"
        >
          Pay $524.00 <FontAwesomeIcon icon={faLongArrowRight} />
        </motion.button>{" "}
      </motion.div>
    </motion.div>
  );
};

export default CheckoutPage;
