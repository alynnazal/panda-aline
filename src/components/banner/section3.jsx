"use client";

import React from "react";

export const Section3 = ({
  heading = "Du möchtest wissen, in welchen Regionen wir unseren zuverlässigen Fahrdienst anbieten?",
  paragraph = "Ob Norden, Süden, Osten oder Westen – wir fahren dich durch ganz Berlin. Unsere Touren führen dich zuverlässig in jeden Stadtteil, von Frohnau bis Lichtenrade, von Spandau bis Köpenick. Egal, ob du eine regelmäßige Schülerbeförderung, einen Arzttermin oder eine individuelle Begleitung brauchst – wir sind für dich da. Hier findest du eine Übersicht mit den Stadtteilen, in denen wir bereits Menschen befördert haben:",
}) => {
  return (
    <div className="brand__area-two">
      <div className="container">
        <div className="brands-services-content">
          <h2>
            <b>{heading}</b>
          </h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
