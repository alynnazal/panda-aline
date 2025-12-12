"use client";

import React from "react";
import Link from "next/link";

const LOGO = "/logo/logo.png";
const logopanda = "/logo/logopanda.svg";

export const HeaderOffcanvas = ({ active, toggleCanvas }) => {
  return (
    <>
      <div className={`offCanvas__info ${active ? "active" : ""}`}>
        <div
          className="offCanvas__close-icon menu-close"
          onClick={toggleCanvas}
        >
          <button>
            <i className="far fa-window-close"></i>
          </button>
        </div>
        <div className="offCanvas__logo mb-30">
          <Link href="/">
            <img src={logopanda} alt="Logo" />
          </Link>
        </div>
        <div className="offCanvas__side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>
              Alexanderplatz, 10178 Berlin, Deutschland 
            </p>
          </div>
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <p>+49 176 63263948</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <p>kontakt@fahrdienst-panda.de</p>
          </div>
        </div>
        
      </div>

      <div
        className={`offCanvas__overly ${active ? "active" : ""}`}
        onClick={toggleCanvas}
      />
    </>
  );
};
