import React from "react";
import Link from "next/link";

const breadcrumbImg = "/images/breadcrumb_img.png";
const breadcrumbShape1 = "/images/breadcrumb_shape01.png";
const breadcrumbShape2 = "/images/breadcrumb_shape02.png";

export const Breadcrumb = ({ title, subtitle }) => {
  return (
    <section className="breadcrumb__area fix">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="breadcrumb__content">
              <h3 className="title">{title}</h3>
              <nav className="breadcrumb">
                <span property="itemListElement" typeof="ListItem">
                  <Link href="/">Home</Link>
                </span>
                <span className="breadcrumb-separator">
                  <i className="flaticon-right-arrow-angle"></i>
                </span>
                <span property="itemListElement" typeof="ListItem">
                  {subtitle || title}
                </span>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
