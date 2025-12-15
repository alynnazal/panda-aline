import { Layout } from "@/layouts/Layout";
import React from "react";

export default function Impressum() {
  return (
    <Layout breadcrumbTitle="Impressum" hideNewsLetter header={1} footer={1}>
      <section className="team__area" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40">
                <h2 className="title">Impressum</h2>
              </div>
              <div className="content" style={{ marginTop: "40px" }}>
                <h4>Angaben gemäß § 5 TMG</h4>
                <p>
                  Fahrdienst Panda
                  <br />
                  Neunburger Straße 22B
                  <br />
                  10969 Berlin
                </p>
                <h4 style={{ marginTop: "30px" }}>Kontakt</h4>
                <p>
                  Telefon: +49 176 63263948
                  <br />
                  E-Mail: kontakt@fahrdienst-panda.de
                </p>
                <h4 style={{ marginTop: "30px" }}>
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h4>
                <p>
                  Fahrdienst Panda
                  <br />
                  Neunburger Straße 22B
                  <br />
                  10969 Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
