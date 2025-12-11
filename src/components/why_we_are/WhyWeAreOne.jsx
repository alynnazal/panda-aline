import React from "react";

const whyWeAreImg = "/images/why_we_are_img.png";
const whyShape1 = "/images/why_shape01.svg";
const whyShape2 = "/images/why_shape02.svg";
const whyShape3 = "/images/why_shape03.svg";
const whyShape4 = "/images/why_shape04.svg";
const petIcon = "/icon/pet_icon02.svg";
const checkIcon = "/icon/check_icon.svg";

export const WhyWeAreOne = () => {
  return (
    <section className="why__we-are-area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* images */}
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="why__we-are-img">
              <img src={whyWeAreImg} alt="" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="why__we-are-content">
              <div className="section__title mb-10">
                <span className="sub-title">
                  WARUM WIR DIE BESTE WAHL SIND
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Barrierefreier Fahrdienst <br />
                  Alles, was Sie wissen müssen
                </h2>
              </div>
              <p>
                Wir bieten sichere, zuverlässige und barrierefreie Beförderung
                für Menschen mit Behinderung in Berlin & Brandenburg. Unser Team
                sorgt dafür, dass jede Fahrt komfortabel, pünktlich und
                individuell auf Ihre Bedürfnisse abgestimmt ist.
              </p>

              <div className="why__list-box">
                <ul className="list-wrap">
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Mehr Erfahrung</h4>
                      </div>
                      <p>
                        Unsere geschulten Fahrer:innen kennen die speziellen
                        Anforderungen von Menschen mit
                        Mobilitätseinschränkungen.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Barrierefreie Fahrzeuge</h4>
                      </div>
                      <p>
                        Unsere Fahrzeuge sind rollstuhlgerecht ausgestattet und
                        erfüllen alle Sicherheitsstandards.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">Unterstützung im Alltag</h4>
                      </div>
                      <p>
                        Wir helfen Ihnen dabei, Termine, Therapien und tägliche
                        Wege problemlos zu erreichen.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="why__list-box-item">
                      <div className="why__list-box-item-top">
                        <div className="icon">
                          <img src={checkIcon} alt="" className="injectable" />
                        </div>
                        <h4 className="title">24/7 Verfügbarkeit</h4>
                      </div>
                      <p>
                        Wir sind rund um die Uhr für Sie erreichbar, auch an
                        Wochenenden und Feiertagen.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
