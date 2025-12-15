import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import React from "react";

const teamDetailsImg = "/team/team_details.jpg";
const Autismimg = "/images/Autism.jpg";
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
                  <ul className="list-wrap">
                    <li>
                      <div className="icon">
                        <i className="flaticon-phone"></i>
                      </div>
                      <a href="tel:0123456789">+123 8989 444</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-placeholder"></i>
                      </div>
                      256 Avenue, Newyork City
                    </li>
                    <li>
                      <div className="icon">
                        <i className="flaticon-mail"></i>
                      </div>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </li>
                    <li>
                      <div className="icon">
                        <i className="fas fa-share-alt"></i>
                      </div>
                      <ul className="list-wrap contact__social">
                        <li>
                          <Link
                            href="https://www.facebook.com/"
                            target="_blank"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://twitter.com" target="_blank">
                            <i className="fab fa-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.whatsapp.com/"
                            target="_blank"
                          >
                            <i className="fab fa-whatsapp"></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://www.instagram.com/"
                            target="_blank"
                          >
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="contact__form-wrap team__details-form">
                  <form id="contact-form" className="contact__form">
                    <h2 className="title">Post a comment</h2>
                    <span>
                      Your email address will not be published. Required fields
                      are marked *
                    </span>
                    <div className="row gutter-20">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input name="name" type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="email"
                            type="email"
                            placeholder="E-mail"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            name="website"
                            type="url"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn">
                      Send Us Message
                      <img src={rightArrowIcon} alt="" className="injectable" />
                    </button>
                  </form>
                  <p className="ajax-response mb-0"></p>
                </div>
              </div>
            </div>{" "}
            <div className="col-lg-5 col-md-8">
              <div className="team__details-img">
                <img src={Autismimg} alt="team member" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
