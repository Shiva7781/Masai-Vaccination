import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="Nav">
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/vaccination">Vaccinated</Link>
      </div>
    </>
  );
};

export default Navbar;
