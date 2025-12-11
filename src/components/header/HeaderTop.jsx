"use client";

import React from "react";

export const HeaderTop = () => {
  return (
    <div className="tg-header__top">
      <div className="container custom-container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <ul className="tg-header__top-info left-side list-wrap">
              <li>
                <i className="flaticon-placeholder"></i> +49 176 63263948
              </li>
              <li>
                <i className="flaticon-mail"></i>
                <a href="kontakt@fahrdienst-panda.de">
                  kontakt@fahrdienst-panda.de
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-6 col-lg-4">
            <ul className="tg-header__top-right list-wrap">
              <li>
                <i className="flaticon-three-o-clock-clock"></i>Wir sind 24/7
                für Sie da
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
