import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import articles from "../data";

const Cards = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="px-12 md:px-20 w-full flex flex-col items-center justify-between gap-16 text-center">
      {/* Boutons de filtrage */}
      <motion.div
        className="flex items-center justify-center gap-4"
        initial="hidden"
        animate="visible"
      >
        {["All 132", "Accessories 13", "Featured 67", "Unisex 52"].map(
          (text, i) => (
            <motion.button
              key={i}
              custom={i} // Passe l'index comme prop personnalisée
              onClick={() => setSelectedCategory(text.split(" ")[0])}
              className={`px-4 md:px-6 py-3 md:py-4 ${
                selectedCategory === text.split(" ")[0]
                  ? "bg-black text-white"
                  : "bg-white text-black border-2 border-black"
              } text-sm font-bold rounded-full`}
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="pressed"
            >
              {text}
            </motion.button>
          )
        )}
      </motion.div>

      {/* Grille d'article */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map((article, index) => (
          <motion.div
            key={index}
            className="w-full flex flex-col items-center justify-center gap-4 bg-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="max-w-2xl h-auto relative group">
              <img
                src={article.image_url}
                alt={article.name}
                className="w-full h-auto object-cover rounded-3xl"
              />

              {/* Hover modal */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 rounded-xl"
              >
                <div className="w-full h-full p-4 flex flex-col items-start justify-between ">
                  <button className="px-4 md:px-6 py-3 md:py-4 bg-white text-black text-sm font-semibold rounded-full uppercase">
                    GET OFF 20%
                  </button>
                  <div className="w-full flex items-center justify-between gap-2">
                    <button
                      onClick={() => navigate("/cart")}
                      className="py-4 w-1/2 flex items-center justify-center bg-white text-black text-sm font-semibold rounded-full uppercase"
                    >
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83301 1.6665L3.33301 4.99984V16.6665C3.33301 17.1085 3.5086 17.5325 3.82116 17.845C4.13372 18.1576 4.55765 18.3332 4.99967 18.3332H16.6663C17.1084 18.3332 17.5323 18.1576 17.8449 17.845C18.1574 17.5325 18.333 17.1085 18.333 16.6665V4.99984L15.833 1.6665H5.83301Z"
                          stroke="#1D1D1D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33301 5H18.333"
                          stroke="#1D1D1D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.1662 8.3335C14.1662 9.21755 13.815 10.0654 13.1899 10.6905C12.5647 11.3156 11.7169 11.6668 10.8328 11.6668C9.94879 11.6668 9.10094 11.3156 8.47582 10.6905C7.8507 10.0654 7.49951 9.21755 7.49951 8.3335"
                          stroke="#1D1D1D"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>{" "}
                    <button
                      onClick={() => navigate("/details")}
                      translate="no"
                      className="py-4 w-1/2 flex items-center justify-center bg-transparent border-2 border-white text-white text-sm font-semibold rounded-full uppercase"
                    >
                      BUY NOW
                    </button>
                  </div>{" "}
                </div>
              </motion.div>
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
      </div>
      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="pressed"
        className="px-4 md:px-6 py-3 md:py-4 bg-white text-black border-2 border-black hover:bg-black hover:text-white text-sm font-semibold rounded-full uppercase"
      >
        VIEW MORE
      </motion.button>
    </div>
  );
};

export default Cards;
