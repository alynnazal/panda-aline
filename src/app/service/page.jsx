import { AboutOne } from "@/components/about/AboutOne";
import { BannerOne } from "@/components/banner/BannerOne";
import { Section3 } from "@/components/banner/section3";
import { SectionRequest } from "@/components/banner/sectionRequest";
import { SectionContact } from "@/components/banner/sectionContact";
import { SectionBrandenburg } from "@/components/banner/sectionBrandenburg";
import { ServiceBanner } from "@/components/banner/serviceBanner";
import { ServicewithImage } from "@/components/banner/servicewithImage";
import { BrandsServices } from "@/components/brands/brandsServices";
import { MarqueeOne } from "@/components/marquee/MarqueeOne";
import { TeamOne } from "@/components/teams/TeamOne";
import { WhyWeAreOne } from "@/components/why_we_are/WhyWeAreOne";
import { Layout } from "@/layouts/Layout";
import { LocationColumns } from "@/components/locations/LocationColumns";

export default function Service() {
  const locationData = {
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
          "Wittenau",
        ],
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
          "Treptow",
        ],
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
          "Zehlendorf",
        ],
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
          "Weißensee",
        ],
      },
    ],
  };

  const brandenburgSectionData = {
    heading: "Wir fahren auch im Speckgürtel von Berlin in Brandenburg",
    paragraph1:
      "Auch außerhalb Berlins kannst du dich auf uns verlassen. Im gesamten Berliner Speckgürtel und vielen Städten in Brandenburg sind wir täglich unterwegs. Ob Potsdam, Falkensee, Bernau oder Königs Wusterhausen – wir sorgen für verlässliche Mobilität im Umland.",
    paragraph2:
      "Hier siehst du einige der Orte in Brandenburg, die ebenfalls zu unserem Einzugsgebiet zählen:",
  };

  const brandenburgLocationData = {
    columns: [
      {
        heading: "Nord",
        items: [
          "Birkenwerder",
          "Borgsdorf",
          "Glienicke/Nordbahn",
          "Hennigsdorf",
          "Oranienburg",
          "Velten",
        ],
      },
      {
        heading: "Süd",
        items: [
          "Blankenfelde-Mahlow",
          "Dahlewitz",
          "Eichwalde",
          "Königs Wusterhausen",
          "Mittenwalde",
          "Rangsdorf",
          "Schulzendorf",
          "Schönefeld",
          "Waßmannsdorf",
          "Wildau",
          "Zeuthen",
          "Zossen",
        ],
      },
      {
        heading: "West",
        items: [
          "Brieselang",
          "Dallgow-Döberitz",
          "Elstal",
          "Falkensee",
          "Kleinmachnow",
          "Ludwigsfelde",
          "Potsdam",
          "Stahnsdorf",
          "Teltow",
          "Werder (Havel)",
          "Wustermark",
        ],
      },
      {
        heading: "Ost",
        items: [
          "Ahrensfelde",
          "Altlandsberg",
          "Bernau bei Berlin",
          "Blumberg",
          "Eiche",
          "Hoppegarten",
          "Neuenhagen bei Berlin",
          "Panketal",
          "Strausberg",
        ],
      },
    ],
  };

  const sectionRequestData = {
    heading: "Jetzt Anfrage stellen und Fahrt sichern",
    paragraph1:
      "Du brauchst eine einmalige oder regelmäßige Fahrt zur Schule, einen zuverlässigen Begleitservice zum Arzt oder suchst einen barrierefreien Fahrdienst für Senior:innen oder Menschen mit Behinderung?",
    paragraph2:
      "Dann sind wir gern für dich da – persönlich, pünktlich und mit Herz. Unser Team bringt dich sicher voran.",
    paragraph3:
      "Stelle jetzt deine Anfrage – und wir melden uns schnellstmöglich bei dir.",
  };

  const sectionContactData = {
    heading:
      "Du bist dir gerade noch unsicher, ob wir in deinem Gebiet fahren?",
    paragraph1:
      "Kein Sorge! Schreib uns einfach eine Nachricht über dieses Kontaktformular. Wir prüfen jede Anfrage individuell und finden gemeinsam eine Lösung.",
  };

  return (
    <Layout header={1} footer={1}>
      {/* banner one */}
      <ServiceBanner />
      <BrandsServices />
      <ServicewithImage />
      <Section3 />
      <LocationColumns data={locationData} />
      <SectionBrandenburg
        heading={brandenburgSectionData.heading}
        paragraph1={brandenburgSectionData.paragraph1}
        paragraph2={brandenburgSectionData.paragraph2}
      />
      <LocationColumns data={brandenburgLocationData} />
      <SectionRequest
        heading={sectionRequestData.heading}
        paragraph1={sectionRequestData.paragraph1}
        paragraph2={sectionRequestData.paragraph2}
        paragraph3={sectionRequestData.paragraph3}
      />
      <SectionContact
        heading={sectionContactData.heading}
        paragraph1={sectionContactData.paragraph1}
      />
    </Layout>
  );
}
