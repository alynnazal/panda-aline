import React from "react";
import { VideoPlayer } from "../video/VideoPlayer";

const aboutImg = "/images/about_img.png";
const videoShape = "/images/about_video_shape.svg";
const petIcon = "/icon/pet_icon02.svg";
const experienceShape = "/images/experience_shape.svg";
const authorSign = "/images/author_sign.png";
const author1 = "/images/author_01.png";
const author2 = "/images/author_02.png";
const author3 = "/images/author_03.png";
const author4 = "/images/author_04.png";
const aboutShape1 = "/images/about_shape01.png";
const aboutShape2 = "/images/about_shape02.png";
const aboutShape3 = "/images/about_shape03.png";

export const AboutOne = () => {
  return (
    <section className="about__area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="about__img">
              <img src={aboutImg} alt="" />
              <div className="video__box">
                <div className="video__box-shape">
                  <img src={videoShape} alt="" className="injectable" />
                </div>
                <h5 className="title">
                  Watch Our <br />
                  Working Video
                </h5>

                <VideoPlayer
                  trigger={
                    <a href="#vid" className="popup-video play-btn">
                      <i className="fas fa-play"></i>
                    </a>
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="about__content">
              <div className="section__title mb-20">
                <span className="sub-title">
                  Mehr Über Uns
                  <strong className="shake">
                    <img src={petIcon} alt="" className="injectable" />
                  </strong>
                </span>
                <h2 className="title">
                  Dein zuverlässiger Fahrdienst in Berlin & Brandenburg <br />
                </h2>
              </div>
              <div className="about__content-inner">
                <div className="experience__box">
                  <div className="experience__box-shape">
                    <img src={experienceShape} alt="" className="injectable" />
                  </div>
                  <div className="experience__box-content">
                    <h4 className="title">
                      15 <span>Yr</span>
                    </h4>
                    <p>Experience</p>
                  </div>
                </div>
                <p>
                  Fahrdienst Panda ist Ihr Spezialist für die regelmäßige
                  werktägliche Förderung von Menschen mit Behinderung zur
                  Arbeitsstätte, Therapie oder Tagesstätte in Berlin und
                  Brandenburg. Unser Personal wird sorgfältig ausgewählt und
                  geschult.
                </p>
              </div>
              <p>
                Alle Mitarbeiter zeichnen sich durch hohe
                Zuverlässigkeit, Freundlichkeit und Hilfsbereitschaft aus. Gern
                beraten wir Sie telefonisch und erstellen Ihnen ein kostenloses
                und unverbindliches Angebot zur Vorlage beim Kostenträger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
