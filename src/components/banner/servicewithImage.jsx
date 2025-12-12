"use client";

import React from "react";

export const ServicewithImage = () => {
  return (
    <div className="brand__area-two">
      <div className="container">
        <div className="brands-services-content">
          <h2>
            <b>
              Du möchtest wissen, in welchen Regionen wir unseren zuverlässigen
              Fahrdienst anbieten?{" "}
            </b>
          </h2>

          <img
            src="/images/berlin.png"
            alt="Service with Image"
            className="service-image"
          />
        </div>
      </div>
    </div>
  );
};
