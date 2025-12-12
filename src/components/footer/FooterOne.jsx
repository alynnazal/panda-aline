import React from "react";
import Link from "next/link";

export const FooterOne = () => {
  return (
    <>
      <footer>
        <div className="footer__area">
          <div className="footer__top fix">
            <div className="container">
              <div className="footerNew">
                <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4
                      className="footer__widget-title"
                      style={{ textAlign: "center" }}
                    >
                      Kontakt
                    </h4>
                    <div
                      className="footer__link"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <ul
                        className="list-wrap"
                        style={{ textAlign: "center", padding: 0 }}
                      >
                        <li>
                          <a
                            href="mailto:kontakt@fahrdienst-panda.de"
                            style={{
                              color: "#fff",
                              whiteSpace: "nowrap",
                              display: "inline-block",
                              width: "100%",
                            }}
                          >
                            kontakt@fahrdienst-panda.de
                          </a>
                        </li>
                        <li>
                          <a
                            href="tel:+4917663263948"
                            style={{
                              color: "#fff",
                              display: "inline-block",
                              width: "100%",
                            }}
                          >
                            +49 176 63263948
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4
                      className="footer__widget-title"
                      style={{ textAlign: "center" }}
                    >
                      Standort
                    </h4>
                    <div
                      className="footer__link"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <ul
                        className="list-wrap"
                        style={{ textAlign: "center", padding: 0 }}
                      >
                        <li
                          style={{
                            color: "#fff",
                            display: "inline-block",
                            width: "100%",
                          }}
                        >
                          Neunburger Straße 22B
                          <br />
                          10969 Berlin
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="copyright-text text-center">
                  <p style={{ color: "#fff" }}>
                    Copyright © 2025. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
