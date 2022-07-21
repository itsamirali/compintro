import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home position-relative">
      <div className="container home-content d-flex flex-column h-100 justify-content-center m-auto p-3">
        <h1>
          <Typewriter
            options={{
              strings: [
                "web development",
                "mobile development",
                "ui/ux designer",
                "product marketing",
                "digital marketing",
                "customer service",
              ],
              autoStart: true,
              loop: true,
              delay: 5
            }}
          />
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <span className="view-details-home-button w-50 text-center p-3">
          View Details
        </span>
      </div>
    </div>
  );
};

export default Home;
