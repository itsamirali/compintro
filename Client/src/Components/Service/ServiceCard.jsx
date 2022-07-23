import React from "react";
import "./ServiceCard.css";
import { FcCheckmark } from "react-icons/fc";

export const ServiceCard = ({ number, numberColor, numbg }) => {
  return (
    <div className="cardContainer pt-5 m-4">
      <span
        style={{ color: numberColor, backgroundColor: numbg, }}
        className="numberContaienr d-flex align-items-center justify-content-center"
      >
        {number}
      </span>
      <div className="d-flex align-items-center justify-content-center mb-2">
        <span className="checkContainer d-flex align-items-center justify-content-center me-2">
            <FcCheckmark  />
        </span>
        <p className="m-0">Online Software Service</p>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-2">
        <span className="checkContainer d-flex align-items-center justify-content-center me-2">
            <FcCheckmark  />
        </span>
        <p className="m-0">Online Software Service</p>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-2">
        <span className="checkContainer d-flex align-items-center justify-content-center me-2">
            <FcCheckmark  />
        </span>
        <p className="m-0">Online Software Service</p>
      </div>
      <div className="horizLine mx-5 d-flex align-items-center justify-content-center mb-2  "></div>
      <div className="d-flex align-items-center justify-content-center mb-2">
        <span className="checkContainer d-flex align-items-center justify-content-center me-2">
            <FcCheckmark  />
        </span>
        <p className="m-0">Online Software Service</p>
      </div>
    </div>
  );
};
