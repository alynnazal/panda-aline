"use client";

import React from "react";
import Link from "next/link";

const LOGO = "/logo/logopanda.svg";

export const HeaderMobileMenu = () => {
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn">
            <i className="fas fa-times"></i>
          </div>

          <div className="nav-logo">
            <Link href="/">
              <img src={LOGO} alt="Logo" />
            </Link>
          </div>

          <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <div className="tgmobile__menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
          </div>
          
        </nav>
      </div>
      <div className="tgmobile__menu-backdrop"></div>
    </>
  );
};
