"use client";

import React from "react";
import { Swiper, SwiperSlide } from "../swiper/SwiperRoot";

const testimonialImg = "/images/testimonial_img.jpg";
const testimonialImgShape = "/images/testimonial_img_shape.svg";
const testimonialShape03 = "/images/testimonial_shape03.png";
const reviewShape = "/images/review_shape.svg";
const starIcon = "/icon/star.svg";
const quoteIcon = "/icon/quote.svg";
const testiAuthor = "/images/testi_author01.png";
const testimonialShape01 = "/images/testimonial_shape01.png";
const testimonialShape02 = "/images/testimonial_shape02.png";

export const TestimonialOne = () => {
  const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <section className="testimonial__area">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* img content */}
          <div className="col-lg-6 col-md-8 order-0 order-lg-2">
            <div className="testimonial__img">
              <div className="mask-img testimonial__img-mask">
                <img src={testimonialImg} alt="img" />
              </div>
            </div>
          </div>

          {/* testimonials */}
          <div className="col-lg-6">
            <div className="testimonial__item-wrap">
              <Swiper {...swiperSettings} className="testimonial-active">
                <SwiperSlide>
                  <div className="testimonial__item">
                    <div className="testimonial__icon">
                      <img src={quoteIcon} alt="" className="injectable" />
                    </div>
                    <div className="testimonial__content">
                      <h2 className="title">Pet Health Important</h2>
                      <p>
                        “ Duis aute irure dolor in repreerit in voluptate
                        velitesse We understand that your furry aute irure dolor
                        in repreerit in voluptate ute irure dolor in repreerit
                        in voluptate understand that you ”
                      </p>
                      <div className="testimonial__author">
                        <div className="testimonial__author-thumb">
                          <img src={testiAuthor} alt="" />
                        </div>
                        <div className="testimonial__author-content">
                          <h4 className="title">Uraney Jacke</h4>
                          <span>Business Study</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial__item">
                    <div className="testimonial__icon">
                      <img src={quoteIcon} alt="" className="injectable" />
                    </div>
                    <div className="testimonial__content">
                      <h2 className="title">Pet Health Important</h2>
                      <p>
                        “ Duis aute irure dolor in repreerit in voluptate
                        velitesse We understand that your furry aute irure dolor
                        in repreerit in voluptate ute irure dolor in repreerit
                        in voluptate understand that you ”
                      </p>
                      <div className="testimonial__author">
                        <div className="testimonial__author-thumb">
                          <img src={testiAuthor} alt="" />
                        </div>
                        <div className="testimonial__author-content">
                          <h4 className="title">Uraney Jacke</h4>
                          <span>Business Study</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* shapes */}
    </section>
  );
};
