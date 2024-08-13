import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import Cards from "../components/Cards.jsx";

import CollectionSection from "../components/CollectionSection.jsx";

const Main = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-12 bg-white">
      <HeroSection />
      <Cards />
      <CollectionSection />
    </div>
  );
};

export default Main;
