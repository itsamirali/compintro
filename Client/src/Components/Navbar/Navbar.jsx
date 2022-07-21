import React from "react";
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar-main d-flex align-items-center justify-content-center text-center">
      <ul className="mx-auto list-unstyled d-none d-lg-flex">
        <li className="nav-item text-white">Home</li>
        <li className="nav-item text-white">About</li>
        <li className="nav-item text-white">Service</li>
        <li className="nav-item text-white">Career</li>
        <li className="nav-item text-white">Video</li>
        <li className="nav-item text-white">Team</li>
        <li className="nav-item text-white">Testimonial</li>
        <li className="nav-item text-white">Feedback</li>
        <li className="nav-item text-white">Contact</li>
        <li className="nav-item text-white">Subscription</li>
      </ul>
    </nav>
  );
};

export default Navbar;
