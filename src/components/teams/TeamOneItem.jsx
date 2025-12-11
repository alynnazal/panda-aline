import React from "react";
import Link from "next/link";

const shapeOne = "/team/team_img_shape01.svg";
const shapeTwo = "/team/team_img_shape02.svg";

export const TeamOneItem = ({ id, href, src, name, designation }) => {
  // Use href if provided, otherwise construct from id
  const linkHref = href || (id ? `/team/${id}` : "#");

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
      <div className="team__item">
        <div className="team__item-img">
          <div className="mask-img-wrap">
            <img src={src} alt="team member" />
          </div>

          <div className="team__social">
            <ul className="list-wrap">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="team__item-content">
          <h4 className="title">
            <Link href={linkHref}>{name}</Link>
          </h4>
          <span>{designation}</span>
        </div>
      </div>
    </div>
  );
};
