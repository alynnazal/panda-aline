"use client";

import React from "react";

export const SectionContact = ({
  heading = "Du bist dir gerade noch unsicher, ob wir in deinem Gebiet fahren?",
  paragraph1 = "Kein Sorge! Schreib uns einfach eine Nachricht über dieses Kontaktformular. Wir prüfen jede Anfrage individuell und finden gemeinsam eine Lösung.",
}) => {
  return (
    <div className="brand__area-two">
      <div className="container">
        <div className="brands-services-content">
          <h2>
            <b>{heading}</b>
          </h2>
          {paragraph1 && <p>{paragraph1}</p>}
        </div>
      </div>
    </div>
  );
};

