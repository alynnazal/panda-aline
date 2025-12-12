"use client";

import React from "react";

export const SectionRequest = ({
  heading = "Jetzt Anfrage stellen und Fahrt sichern",
  paragraph1 = "Du brauchst eine einmalige oder regelmäßige Fahrt zur Schule, einen zuverlässigen Begleitservice zum Arzt oder suchst einen barrierefreien Fahrdienst für Senior:innen oder Menschen mit Behinderung?",
  paragraph2 = "Dann sind wir gern für dich da – persönlich, pünktlich und mit Herz. Unser Team bringt dich sicher voran.",
  paragraph3 = "Stelle jetzt deine Anfrage – und wir melden uns schnellstmöglich bei dir.",
}) => {
  return (
    <div className="brand__area-two">
      <div className="container">
        <div className="brands-services-content">
          <h2>
            <b>{heading}</b>
          </h2>
          {paragraph1 && <p>{paragraph1}</p>}
          {paragraph2 && <p>{paragraph2}</p>}
          {paragraph3 && <p>{paragraph3}</p>}
        </div>
      </div>
    </div>
  );
};

