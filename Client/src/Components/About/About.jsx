import React from "react";
import "./About.css";
import aboutImage from "../../Image/compintrobg.jpg";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section d-flex align-items-center justify-content-center">
      <div className="row d-flex align-items-center justify-content-center w-100">
        <div className="col-12 col-lg-6">
          <div className="about-image d-flex align-items-center justify-content-center">
            <img
              src={aboutImage}
              alt="about compintro"
              width="400px"
              height="400px"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
          <div className="about-details d-flex align-items-center justify-content-center flex-column">
            <div className="about-title mb-4">
              <h2 className="about-h2 position-relative">About</h2>
            </div>
            <div className="about-text">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="about-items-container d-flex w-100 align-items-center justify-content-center flex-column">
              <div className="d-flex align-items-center justify-content-center about-item mb-4 p-3">
                <span className="me-4">
                    <FcSlrBackSide fontSize="56px" />
                </span>
                <div className="flex-fill">
                  <h6>Perfect day out</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center about-item mb-4 p-3">
                <span className="me-4">
                    <FcWorkflow fontSize="56px" />
                </span>
                <div className="flex-fill">
                  <h6>Perfect day out</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center about-item mb-4 p-3">
                <span className="me-4">
                    <FcShop fontSize="56px" />
                </span>
                <div className="flex-fill">
                  <h6>Perfect day out</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
