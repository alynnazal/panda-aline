"use client";

import React from "react";

export const LocationColumns = ({ 
  data = null,
  title = null,
  className = ""
}) => {
  // Default data structure matching the image
  const defaultData = {
    columns: [
      {
        heading: "Nord",
        items: [
          "Blankenburg",
          "Blankenfelde",
          "Buch",
          "Falkenberg",
          "Französisch Buchholz",
          "Frohnau",
          "Gesundbrunnen",
          "Heiligensee",
          "Hermsdorf",
          "Karow",
          "Lübars",
          "Märkisches Viertel",
          "Niederschönhausen",
          "Pankow",
          "Reinickendorf",
          "Rosenthal",
          "Wedding",
          "Wilhelmsruh",
          "Wittenau"
        ]
      },
      {
        heading: "Süd",
        items: [
          "Adlershof",
          "Baumschulenweg",
          "Bohnsdorf",
          "Britz",
          "Buckow",
          "Gropiusstadt",
          "Grünau",
          "Johannisthal",
          "Kreuzberg",
          "Lichtenrade",
          "Mariendorf",
          "Marienfelde",
          "Neukölln",
          "Niederschöneweide",
          "Rudow",
          "Schöneberg",
          "Tempelhof",
          "Treptow"
        ]
      },
      {
        heading: "West",
        items: [
          "Charlottenburg",
          "Dahlem",
          "Falkenhagener Feld",
          "Gatow",
          "Grunewald",
          "Halensee",
          "Hansaviertel",
          "Haselhorst",
          "Kladow",
          "Lankwitz",
          "Lichterfelde",
          "Moabit",
          "Nikolassee",
          "Schmargendorf",
          "Siemensstadt",
          "Spandau",
          "Staaken",
          "Steglitz",
          "Tiergarten",
          "Wannsee",
          "Westend",
          "Wilmersdorf",
          "Zehlendorf"
        ]
      },
      {
        heading: "Ost",
        items: [
          "Alt-Hohenschönhausen",
          "Biesdorf",
          "Falkenhagen",
          "Friedrichsfelde",
          "Friedrichshain",
          "Hellersdorf",
          "Kaulsdorf",
          "Karlshorst",
          "Köpenick",
          "Lichtenberg",
          "Mahlsdorf",
          "Malchow",
          "Marzahn",
          "Müggelheim",
          "Oberschöneweide",
          "Plänterwald",
          "Rahnsdorf",
          "Rummelsburg",
          "Schmöckwitz",
          "Weißensee"
        ]
      }
    ]
  };

  const locationData = data || defaultData;

  return (
    <div className={`location-columns ${className}`}>
      <div className="container">
        {title && (
          <div className="location-columns__title">
            <h2>{title}</h2>
          </div>
        )}
        <div className="row">
          {locationData.columns.map((column, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <div className="location-columns__item">
                <h3 className="location-columns__heading">{column.heading}</h3>
                <ul className="list-wrap location-columns__list">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="location-columns__list-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

