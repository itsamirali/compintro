import React from "react";
import "./Service.css"
import { ServiceCard } from "./ServiceCard";

const Service = () => {
  return (
    <div className="container service-container">
      <div className="title-container w-100 d-flex align-items-center justify-content-center">
        <h2 className="title-container-h2">Service</h2>
      </div>
      <div className="w-100 d-flex flex-wrap align-items-center justify-content-center mt-5">
        <ServiceCard number="1" numbg="rgb(0, 136, 254)" numberColor="#fff" />
        <ServiceCard number="2" numbg="rgb(0, 196, 159)" numberColor="#fff" />
        <ServiceCard number="3" numbg="rgb(255, 187, 40)" numberColor="#fff" />
        <ServiceCard number="4" numbg="rgb(255, 128, 66)" numberColor="#fff" />
        <ServiceCard number="5" numbg="rgb(0, 28, 206)" numberColor="#fff" />
        <ServiceCard number="6" numbg="rgb(0, 196, 159)" numberColor="#fff" />
        <ServiceCard number="7" numbg="rgb(255, 187, 36)" numberColor="#fff" />
        <ServiceCard number="8" numbg="rgb(255, 16, 66)" numberColor="#fff" />
      </div>
    </div>
  );
};

export default Service;
