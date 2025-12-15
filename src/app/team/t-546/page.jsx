import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import React from "react";

const teamDetailsImg = "/team/team_details.jpg";
const seniorImg = "/images/Senioren-befoerderung.jpg";
const rightArrowIcon = "/icon/right_arrow.svg";

export default function TeamDetails() {
  return (
    <Layout>
      <section className="team__details-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="team__details-img">
                <img src={seniorImg} alt="team member" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team__details-content">
                <h2 className="name">
                  Seniorenbeförderung für Menschen mit Behinderung{" "}
                </h2>
                <span>Sicher, respektvoll & fürsorglich mit Fahrdienst Panda.</span>
                <p>
                  Im Alter kann Mobilität zur Herausforderung werden – besonders für Seniorinnen und
Senioren mit körperlichen Einschränkungen oder Behinderungen. Dennoch bleiben
Arztbesuche, Therapietermine, Einkäufe und soziale Kontakte entscheidend für
Lebensfreude, Selbstständigkeit und Teilhabe.

                </p>
                <div className="experience-wrap">
                  <h4 className="title">
                    Warum unsere Schülerbeförderung speziell für älteren
Menschen mit Behinderung ausgerichtet ist.
                  </h4>
                  <p>
                    Fahrdienst Panda bietet dir in Berlin und Brandenburg einen zuverlässigen, barrierefreien
und warmherzigen Seniorenfahrdienst, der speziell auf die Bedürfnisse von älteren
Menschen mit Behinderung ausgerichtet ist.
Wir holen dich pünktlich zu Hause ab, begleiten dich sicher zu deinem Ziel und bringen dich
anschließend wieder sorgsam zurück.
Ob es zur Physiotherapie geht, zur Tagespflege, ins Krankenhaus, zu Freunden, zu
Familienfeiern oder zu wichtigen Alltagswegen – wir stehen dir freundlich, geduldig und
unterstützend zur Seite.
                  </p>
                </div>
                <div className="contact__info-wrap team__details-info">
                  <h6 className="title">
                    Deine Vorteile mit unserem
Seniorenfahrdienst für Menschen mit
Behinderung



                  </h6>
                  <p>
                    <p>
                      <strong>
                        Ein vertrauensvoller und sicherer Transport ist ein wesentlicher Teil eines selbstbestimmten
Lebens im Alter.
Darum bietet Fahrdienst Panda dir einen Service, der komfortabel, verständnisvoll und
barrierefrei ist.<br /> Die wichtigsten Vorteile unserer Seniorenbeförderung im Überblick:
                      </strong>
                      
                    </p>

                    <p>
                      ✔ Rollstuhlgerechte und komfortable Fahrzeuge
                    </p>

                    <p>
                      ✔ Geduldige, erfahrene und geschulte Fahrer:innen
                      
                    </p>

                    <p>
                      ✔ Individuelle Unterstützung beim Ein- und Aussteigen
                      
                    </p>

                    <p>
                      ✔{" "}
                      
                         Flexible Fahrtzeiten – abgestimmt auf deinen Alltag
                      
                      
                    </p>

                    <p>
                      ✔ Transparente & faire Preise ohne Überraschungen
                     
                    </p>

                    <p>
                      ✔{" "}
                     
                       Einfache Buchung, persönliche Betreuung & klare Kommunikation
                      
                  
                    </p>
                     <p>
                      ✔{" "}
                      
                       Auf Wunsch feste Fahrer:innen für regelmäßige Fahrten
                     
                    </p>
                    <p>
                      <strong>
                        Mit Fahrdienst Panda entscheidest du dich für einen Transportservice, der sicher,
menschlich und liebevoll ist – und der auf die besonderen Bedürfnisse von Seniorinnen
und Senioren mit Behinderung eingeht. <br />

                      </strong>
                      
                        Selbstbestimmt im Alter – mit einem
Fahrdienst, der versteht.<br /> Senioren mit Behinderung benötigen oft mehr Zeit, Ruhe und Unterstützung.
Genau darauf sind wir spezialisiert.
Wir möchten dir helfen, deine täglichen Wege stressfrei, sicher und angenehm zu
gestalten – und gleichzeitig deine Selbstständigkeit und Teilhabe zu fördern.
Ob kurze Fahrten oder regelmäßige Pendelstrecken: Wir sorgen dafür, dass du dich bei
jeder Fahrt gut aufgehoben fühlst.
Gemeinsam tragen wir dazu bei, Barrieren abzubauen und älteren Menschen ein aktives
Leben zu ermöglichen – egal, welche körperlichen Einschränkungen bestehen.
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
