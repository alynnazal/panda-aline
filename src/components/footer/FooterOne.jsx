import React from "react";
import Link from "next/link";

const wLogo = "/logo/whitelogo.jpg";
const newsletterShape = "/images/footer_newsletter_shape.svg";
const footerShape01 = "/images/footer_shape01.png";
const footerShape02 = "/images/footer_shape02.png";

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
                    <h4 className="footer__widget-title">Kontakt</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
                          <a href="tel:+4917663263948">+49 176 63263948</a>
                        </li>
                        <li>
                          <a
                            href="mailto:kontakt@fahrdienst-panda.de"
                            style={{ whiteSpace: "nowrap" }}
                          >
                            kontakt@fahrdienst-panda.de
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer__widget">
                    <div className="footer__logo" style={{ marginTop: "50px" }}>
                      <Link href="/">
                        <img src={wLogo} alt="logo" />
                      </Link>
                    </div>
                    <div className="footer__social">
                      <ul className="list-wrap">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer__widget">
                    <h4 className="footer__widget-title">Standort</h4>
                    <div className="footer__link">
                      <ul className="list-wrap">
                        <li>
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
                  <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
