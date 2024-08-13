import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import cartProduct from "../cart_product";

const Cart = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState(
    cartProduct.map((product) => ({ ...product, quantity: 1 }))
  );

  const handleAdd = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  const handleDelete = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const calculateTotal = () =>
    cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="px-12 md:px-20 w-full h-full flex flex-col md:flex-row md:items-start items-center justify-between gap-16 text-center">
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="w-full flex flex-col items-start justify-between gap-6"
      >
        <div className="w-full inline-flex items-center justify-between">
          <h1 className="font-chillax text-lg md:text-xl text-black font-semibold">
            Cart({cart.length})
          </h1>
          <button
            onClick={handleClearCart}
            className="px-4 py-2 flex items-center justify-center gap-2 bg-[#E5E5E580] text-sm text-[#7E7E7E] font-medium shadow-md rounded-full"
          >
            <FontAwesomeIcon icon={faTrashAlt} /> Clear Cart
          </button>
        </div>
        <div className="w-full flex items-center justify-between border-b-2 border-[#E5E5E580] pb-4">
          <h4 className="text-sm text-[#7E7E7E] font-medium">Product</h4>
          <div className="inline-flex items-center justify-center gap-40">
            <h4 className="text-sm text-[#7E7E7E] font-medium">Quantity</h4>
            <h4 className="text-sm text-[#7E7E7E] font-medium">Price</h4>
          </div>
        </div>
        {cart.map((product, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full flex items-center justify-between border-b-2 border-[#E5E5E580] pb-4"
          >
            <div className="flex items-center justify-start gap-2">
              <img
                src={product.image}
                alt=""
                className="w-16 h-16 p-1 object-cover rounded-2xl "
              />
              <div className="flex flex-col items-start justify-start gap-0">
                <span className="text-base text-black font-semibold">
                  T-shirt
                </span>
                <span className="text-xs text-[#7E7E7E] font-medium">
                  {product.size}
                </span>
                <span className="text-base text-black font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
            <div className="max-w-sm w-full inline-flex items-center justify-between">
              <div className="w-full inline-flex items-center justify-center gap-3">
                <button
                  onClick={() => handleRemove(index)}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  <img src="/assets/images/moins.svg" alt="" />
                </button>
                <span className="text-base text-black font-semibold">
                  {product.quantity}
                </span>
                <button
                  onClick={() => handleAdd(index)}
                  className="w-4 h-4 flex items-center justify-center"
                >
                  <img src="/assets/images/plus.svg" alt="" />
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="w-6 h-6 p-4 flex items-center justify-center text-sm text-black bg-[#E5E5E580] rounded-full"
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
              <span className="text-sm text-black font-semibold ">
                ${product.price * product.quantity}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
        className="w-1/3 p-4 flex flex-col items-start justify-between gap-3 border border-[#E5E5E5] shadow-sm rounded-lg"
      >
        <h2 className="font-semibold text-black text-base md:text-lg">
          Order summary
        </h2>
        <div className="w-full flex flex-col items-start justify-between gap-2 pb-4 border-b border-b-[#7E7E7E]">
          <div className="w-full inline-flex items-center justify-between gap-2">
            <span className="text-sm text-[#7E7E7E] font-medium">Subtotal</span>
            <span className="text-sm text-[#7E7E7E] font-medium">
              ${calculateTotal()}
            </span>
          </div>
          <div className="w-full inline-flex items-center justify-between gap-2">
            <span className="text-sm text-[#7E7E7E] font-medium">Discount</span>
            <span className="text-sm text-[#7E7E7E] font-medium">$0</span>
          </div>
        </div>
        <div className="w-full inline-flex items-center justify-between gap-2">
          <span className="text-base text-black font-medium">Order total</span>
          <span className="text-sm text-black font-medium">
            ${calculateTotal()}
          </span>
        </div>
        <button
          onClick={() => navigate("/checkout")}
          className="w-full px-6 py-3 flex items-center justify-center bg-black text-white text-xs font-medium rounded-full"
        >
          Checkout now
        </button>
      </motion.div>
    </div>
  );
};

export default Cart;
