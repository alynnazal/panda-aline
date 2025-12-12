import React from "react";

const ImgBanner2 = "/images/bannerbehindertimg1.jpg";

export const ServiceBanner = () => {
  return (
    <section
      className="banner__area banner__bg"
      style={{ backgroundImage: `url(${ImgBanner2})` }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12">
            <div className="banner__content banner__content--centered">
              <h2 className="title" data-aos="fade-up" data-aos-delay="200">
                Das Einzugsgebiet unseres Fahrdienstes in Berlin und Brandenburg
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
