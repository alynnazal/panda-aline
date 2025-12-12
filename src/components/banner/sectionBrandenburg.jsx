"use client";

import React from "react";

export const SectionBrandenburg = ({
  heading = "Wir fahren auch im Speckgürtel von Berlin in Brandenburg",
  paragraph1 = "Auch außerhalb Berlins kannst du dich auf uns verlassen. Im gesamten Berliner Speckgürtel und vielen Städten in Brandenburg sind wir täglich unterwegs. Ob Potsdam, Falkensee, Bernau oder Königs Wusterhausen – wir sorgen für verlässliche Mobilität im Umland.",
  paragraph2 = "Hier siehst du einige der Orte in Brandenburg, die ebenfalls zu unserem Einzugsgebiet zählen:",
}) => {
  return (
    <div className="brand__area-two">
      <div className="container">
        <div className="brands-services-content">
          <h2>
            <b>{heading}</b>
          </h2>
          <p>{paragraph1}</p>
          {paragraph2 && <p>{paragraph2}</p>}
        </div>
      </div>
    </div>
  );
};

