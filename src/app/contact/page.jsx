"use client";

import { Layout } from "@/layouts/Layout";
import Link from "next/link";
import React, { useState } from "react";

const rightArrow = "/icon/right_arrow.svg";

export default function Contact() {
  const [contactFormLoading, setContactFormLoading] = useState(false);
  const [callbackFormLoading, setCallbackFormLoading] = useState(false);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactFormLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const responseElement = form.nextElementSibling;
    if (responseElement) {
      responseElement.textContent = "";
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        if (responseElement) {
          responseElement.textContent = "Nachricht erfolgreich gesendet!";
          responseElement.style.color = "green";
        }
        form.reset();
      } else {
        if (responseElement) {
          responseElement.textContent = result.error || "Fehler beim Senden der Nachricht";
          responseElement.style.color = "red";
        }
      }
    } catch (error) {
      if (responseElement) {
        responseElement.textContent = "Fehler beim Senden der Nachricht";
        responseElement.style.color = "red";
      }
    } finally {
      setContactFormLoading(false);
    }
  };

  const handleCallbackSubmit = async (e) => {
    e.preventDefault();
    setCallbackFormLoading(true);
    
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    const responseElement = form.nextElementSibling;
    if (responseElement) {
      responseElement.textContent = "";
    }

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        if (responseElement) {
          responseElement.textContent = "Rückruf-Anfrage erfolgreich gesendet!";
          responseElement.style.color = "green";
        }
        form.reset();
      } else {
        if (responseElement) {
          responseElement.textContent = result.error || "Fehler beim Senden der Anfrage";
          responseElement.style.color = "red";
        }
      }
    } catch (error) {
      if (responseElement) {
        responseElement.textContent = "Fehler beim Senden der Anfrage";
        responseElement.style.color = "red";
      }
    } finally {
      setCallbackFormLoading(false);
    }
  };
  return (
    <Layout
      // breadcrumbTitle="Contact Page"
      // breadcrumbSubtitle={"Contact"}
      header={1}
      footer={1}
    >
      <section className="contact__area">
        <div className="container">
          <div className="row justify-content-center">
            {/* info */}

            {/* form */}
            <div className="col-lg-10 col-xl-9">
              <div className="contact__form-wrap">
                <form
                  onSubmit={handleContactSubmit}
                  id="contact-form"
                  className="contact__form"
                >
                  <h2 className="title">Deine Fahrdienst-Schnellanfrage</h2>
                  <span>
                    Ihre E-Mail-Adresse wird nicht veröffentlicht. Pflichtfelder
                    sind mit * markiert.
                  </span>
                  <div className="row gutter-20">
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="name"
                          type="text"
                          placeholder="Ihr Name *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="institution"
                          type="text"
                          placeholder="Institution/Organisation"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="pickup_address"
                          type="text"
                          placeholder="Abholadresse - Straße, Hausnummer, Postleitzahl, Stadt *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label
                          htmlFor="pickup_time"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontSize: "14px",
                            color: "#666",
                          }}
                        >
                          Abholzeit (z.B. 12:00 Uhr)
                        </label>
                        <input
                          id="pickup_time"
                          name="pickup_time"
                          type="time"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label
                          htmlFor="collection_day"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontSize: "14px",
                            color: "#666",
                          }}
                        >
                          Abholtag (z.B. 12.07.2024)
                        </label>
                        <input
                          id="collection_day"
                          name="collection_day"
                          type="date"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="destination_address"
                          type="text"
                          placeholder="Zieladresse - Straße, Hausnummer, Postleitzahl, Stadt *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <select name="return_trip">
                          <option value="">
                            Rückfahrt hinzufügen? - Bitte wählen Sie:
                          </option>
                          <option value="yes">Ja</option>
                          <option value="no">Nein</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <label
                          htmlFor="return_trip_time"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontSize: "14px",
                            color: "#666",
                          }}
                        >
                          Wann soll die Rückfahrt stattfinden? (z.B. 12:00 Uhr)
                        </label>
                        <input
                          id="return_trip_time"
                          name="return_trip_time"
                          type="time"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          name="email"
                          type="email"
                          placeholder="E-Mail *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input
                          name="telephone"
                          type="tel"
                          placeholder="Telefonnummer *"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <select name="transport_type" required>
                          <option value="">
                            Art des Transports * - Welche Art von Promotion
                            möchten Sie?
                          </option>
                          <option value="transportation_with_wheelchair">
                            Transport mit Rollstuhl
                          </option>
                          <option value="wheelchair_transport_convertible">
                            Rollstuhltransport (umrüstbar)
                          </option>
                          <option value="transportation_without_wheelchair">
                            Transport ohne Rollstuhl
                          </option>
                          <option value="car_up_to_4_people">
                            Auto (bis zu 4 Personen)
                          </option>
                          <option value="minibus_db_8_persons">
                            Minibus (DB 8 Personen)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <select name="recurring_trip">
                          <option value="">
                            Wiederkehrende Fahrt? - Bitte wählen Sie:
                          </option>
                          <option value="yes">Ja</option>
                          <option value="no">Nein</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <textarea
                          name="news"
                          placeholder="News"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn" disabled={contactFormLoading}>
                    {contactFormLoading ? "Wird gesendet..." : "Nachricht senden"}
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
          </div>

          {/* callback form */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">
              <div className="contact__form-wrap">
                <form
                  onSubmit={handleCallbackSubmit}
                  id="callback-form"
                  className="contact__form"
                >
                  <h2 className="title">
                    Oder nutzen Sie unseren einfachen Rückruf-Service!
                  </h2>
                  <div className="row gutter-20">
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="callback_name"
                          type="text"
                          placeholder="Ihr Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <input
                          name="callback_telephone"
                          type="tel"
                          placeholder="Telefonnummer"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="btn" disabled={callbackFormLoading}>
                    {callbackFormLoading ? "Wird gesendet..." : "Rückruf anfordern"}
                    <img src={rightArrow} alt="" className="injectable" />
                  </button>
                </form>
                <p className="ajax-response mb-0"></p>
              </div>
            </div>
          </div>

          {/* map */}
        </div>
      </section>
    </Layout>
  );
}
