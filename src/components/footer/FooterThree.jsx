import React from "react";
import Link from "next/link";

const wLogo = "/logo/whitelogo.jpg";

export const FooterThree = () => {
  return (
    <footer>
      <div className="footer__area">
        <div className="footer__top fix">
          <div className="container">
            <div className="footerNew">
              <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title" style={{ textAlign: "center" }}>
                    Kontakt
                  </h4>
                  <div className="footer__link" style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="list-wrap" style={{ textAlign: "center", padding: 0 }}>
                      <li>
                        <a
                          href="mailto:kontakt@fahrdienst-panda.de"
                          style={{ whiteSpace: "nowrap", display: "inline-block", width: "100%" }}
                        >
                          kontakt@fahrdienst-panda.de
                        </a>
                      </li>
                      <li>
                        <a href="tel:+493016638349" style={{ display: "inline-block", width: "100%" }}>
                          030/16638349
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
                  <h4 className="footer__widget-title" style={{ textAlign: "center" }}>
                    Standort
                  </h4>
                  <div className="footer__link" style={{ display: "flex", justifyContent: "center" }}>
                    <ul className="list-wrap" style={{ textAlign: "center", padding: 0 }}>
                      <li style={{ display: "inline-block", width: "100%" }}>
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
              <div className="col-lg-6">
                <div className="copyright-text text-center">
                  <p style={{ color: "#fff" }}>Copyright © 2025. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer__bottom-menu" style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                  <Link href="/impressum" style={{ color: "#fff" }}>Impressum</Link>
                  <Link href="/datenschutz" style={{ color: "#fff" }}>Datenschutz</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
