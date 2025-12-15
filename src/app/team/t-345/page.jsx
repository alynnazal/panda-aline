import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import React from "react";

const teamDetailsImg = "/team/team_details.jpg";
const rightArrowIcon = "/icon/right_arrow.svg";

export default function TeamDetails() {
  return (
    <Layout header={1} footer={1}>
      <section className="team__details-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="team__details-content">
                <h2 className="name">
                  Schülerbeförderung für Kinder mit Behinderung.{" "}
                </h2>
                <span>Sicher. Speziell. Zuverlässig.</span>
                <p>
                  Der tägliche Schulweg kann für Kinder mit körperlichen oder
                  geistigen Beeinträchtigungen eine besondere Herausforderung
                  sein. Deshalb bieten wir einen spezialisierten Fahrdienst
                  ausschließlich für Kinder mit Behinderung an sicher,
                  zuverlässig und mit größter Fürsorge. Unsere Aufgabe ist es,
                  jedes Kind sicher zur Schule und wieder nach Hause zu bringen.
                  Mit viel Geduld, Einfühlungsvermögen und geschultem Personal
                  unterstützen wir Familien in ganz Berlin und Umgebung ob
                  Berlin-Mitte, Kreuzberg, Neukölln, Spandau, Pankow,
                  Oranienburg oder Strausberg.
                </p>
                <div className="experience-wrap">
                  <h4 className="title">
                    Warum unsere Schülerbeförderung speziell für Kinder mit
                    Behinderung die richtige Wahl ist
                  </h4>
                  <p>
                    Wir verstehen die individuellen Bedürfnisse von Kindern mit
                    körperlichen, geistigen oder mehrfachen Behinderungen. Daher
                    sind unsere Fahrzeuge, Abläufe und unser Personal
                    vollständig darauf abgestimmt, einen sicheren, komfortablen
                    und respektvollen Transport zu gewährleisten. Unsere
                    barrierefreien, angepassten Transportlösungen machen den
                    Schulweg für dein Kind so einfach und angenehm wie möglich.
                  </p>
                </div>
                <div className="contact__info-wrap team__details-info">
                  <h6 className="title">
                    Unsere Vorteile für den Transport von Kindern mit
                    Behinderung
                  </h6>
                  <p>
                    <p>
                      ✔{" "}
                      <strong>
                        Speziell ausgestattete, barrierefreie Fahrzeuge
                      </strong>
                      <br />
                      Unsere Fahrzeuge verfügen über moderne Rollstuhlplätze,
                      Rampen, Sicherungssysteme und kindgerechte
                      Sicherheitsausstattung – perfekt abgestimmt auf besondere
                      Bedürfnisse.
                    </p>

                    <p>
                      ✔ <strong>Professionell geschultes Personal</strong>
                      <br />
                      Unsere Fahrerinnen und Fahrer sind ausschließlich im
                      Transport von Menschen und Kindern mit Behinderungen tätig
                      und speziell geschult im Umgang mit verschiedenen
                      Krankheitsbildern und Mobilitätseinschränkungen.
                    </p>

                    <p>
                      ✔ <strong>Sanfter &amp; geduldiger Umgang</strong>
                      <br />
                      Jedes Kind wird mit Ruhe, Respekt und Empathie begleitet –
                      ideal für Kinder, die auf klare Abläufe, Sicherheit und
                      Verlässlichkeit angewiesen sind.
                    </p>

                    <p>
                      ✔ <strong>Feste Routen und pünktliche Abholung</strong>
                      <br />
                      Wir garantieren strukturierte Fahrpläne, feste Abholzeiten
                      und eine sichere Rückfahrt – verlässlich jeden Tag.
                    </p>

                    <p>
                      ✔{" "}
                      <strong>
                        Individuelle Planung für jede Art von Behinderung
                      </strong>
                      <br />
                      Ob Rollstuhl, Begleitperson, medizinische Ausstattung oder
                      besondere Betreuung – wir planen jede Fahrt
                      maßgeschneidert.
                    </p>

                    <p>
                      ✔ <strong>Unterstützung bei Kostenübernahme</strong>
                      <br />
                      Wir helfen gern bei Fragen zur Finanzierung über
                      Pflegekassen, Ämter oder andere Kostenträger.
                    </p>

                    <p>
                      ✔{" "}
                      <strong>
                        Direkte &amp; unkomplizierte Kommunikation
                      </strong>
                      <br />
                      Wir halten Eltern und Einrichtungen ständig informiert –
                      transparent, freundlich und zuverlässig.
                    </p>
                  </p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-5 col-md-8">
              <div className="team__details-img">
                <img src={teamDetailsImg} alt="team member" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
