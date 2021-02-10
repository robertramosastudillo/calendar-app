import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">Andres</span>
      <button className="btn btn-outline-danger">
        <li className="fas fa-sign-out-alt"></li>
        <span> Salir</span>
      </button>
    </div>
  );
};
