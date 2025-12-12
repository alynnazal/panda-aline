"use client";

import React from "react";
import Link from "next/link";
import ImgBanner from "/public/images/about_img.png";

const ImgBanner2 = "/images/bannerbehindertimg1.jpg";
const bannerBg = "/banner/banner_bg.jpg";
const titleImg01 = "/banner/banner_title_img01.png";
const titleImg02 = "/banner/banner_title_img02.png";
const rightArrow = "/icon/right_arrow.svg";
const bannerImg01 = "/banner/banner_img01.png";
const petIcon01 = "/icon/pet_icon01.svg";
const bannerShape01 = "/banner/banner_shape01.png";
const bannerShape02 = "/banner/banner_shape02.png";
const bannerShape03 = "/banner/banner_shape03.png";
const bannerShape04 = "/banner/banner_shape04.png";

export const BannerOne = () => {
  return (
    <section
      className="banner__area banner__bg"
      style={{ backgroundImage: `url(${ImgBanner2})` }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="banner__content">
              <h2 className="title" style={{ color: "#fff" }} data-aos="fade-up" data-aos-delay="200">
                Behindertenfahrdienst & Schülerbeförderung in Berlin &
                Brandenburg
              </h2>
              <p style={{ color: "#fff" }} data-aos="fade-up" data-aos-delay="400">
                Fahrdienst Panda bietet sicheren Behindertentransport und
                Schülerbeförderung in Berlin und Brandenburg.Unsere speziell
                geschulten Fahrerinnen bringen Kinder, Seniorinnen und Menschen
                mit Behinderung in rollstuhlgerechten Fahrzeugen zuverlässig und
                pünktlich ans Ziel – ob zur Schule, Arbeit, Fördereinrichtung
                oder Tagesstätte.
              </p>
              <Link
                href="/about"
                className="btn"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Jetzt Fahrt Anfragen
                <img src={rightArrow} alt="" className="injectable" />
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-9">
            <div className="banner__img text-end">
              <img
                style={{ opacity: 0}}
                src={bannerImg01}
                alt="img"
                data-aos="fade-left"
                data-aos-delay="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
