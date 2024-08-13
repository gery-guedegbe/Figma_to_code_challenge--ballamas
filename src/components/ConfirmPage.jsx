import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ConfirmPage = () => {
  return (
    <div className="px-12 md:px-20 w-full h-screen flex flex-col items-center justify-start gap-2 text-center">
      <FontAwesomeIcon
        icon={faCheck}
        className=" w-6 h-6 p-2 border-2 border-black rounded-full"
      />
      <p className="text-lg text-black font-semibold">
        Thanks for your order !
      </p>
      <span className="text-base text-[#7E7E7E] font-medium">
        The order confirmation has been sent to johndoe@gmail.com
      </span>
    </div>
  );
};

export default ConfirmPage;
