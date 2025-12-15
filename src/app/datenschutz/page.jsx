import { Layout } from "@/layouts/Layout";
import React from "react";

export default function Datenschutz() {
  return (
    <Layout breadcrumbTitle="Datenschutz" hideNewsLetter header={1} footer={1}>
      <section className="team__area" style={{ padding: "80px 0" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section__title text-center mb-40">
                <h2 className="title">Datenschutzerklärung</h2>
              </div>
              <div className="content" style={{ marginTop: "40px" }}>
                <h4>1. Datenschutz auf einen Blick</h4>
                <h5>Allgemeine Hinweise</h5>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
                <h4 style={{ marginTop: "30px" }}>2. Verantwortliche Stelle</h4>
                <p>
                  Die verantwortliche Stelle für die Datenverarbeitung auf
                  dieser Website ist:
                  <br />
                  <br />
                  Fahrdienst Panda
                  <br />
                  Neunburger Straße 22B
                  <br />
                  10969 Berlin
                  <br />
                  <br />
                  Telefon: +49 176 63263948
                  <br />
                  E-Mail: kontakt@fahrdienst-panda.de
                </p>
                <h4 style={{ marginTop: "30px" }}>
                  3. Datenerfassung auf dieser Website
                </h4>
                <h5>Kontaktformular</h5>
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                  werden Ihre Angaben aus dem Anfrageformular inklusive der von
                  Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert.
                </p>
                <h4 style={{ marginTop: "30px" }}>4. Ihre Rechte</h4>
                <p>
                  Sie haben jederzeit das Recht, Auskunft über Ihre bei uns
                  gespeicherten personenbezogenen Daten zu erhalten. Außerdem
                  haben Sie das Recht auf Berichtigung, Löschung oder
                  Einschränkung der Verarbeitung sowie Widerspruch gegen die
                  Verarbeitung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
