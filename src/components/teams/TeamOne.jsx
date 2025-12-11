import React from "react";
import { TeamOneItem } from "./TeamOneItem";
import Link from "next/link";

const teamImg01 = "/team/team_img01.jpg";
const teamImg02 = "/team/team_img02.jpg";
const teamImg03 = "/team/team_img03.jpg";
const teamImg04 = "/team/team_img04.jpg";
const petIcon = "/icon/pet_icon02.svg";
const rightArrow = "/icon/right_arrow.svg";
const teamShape = "/team/team_shape.png";

export const TeamOne = () => {
  const teamMembers = [
    {
      src: teamImg01,
      name: "Autismusbeförderung",
      designation: "Mit Ruhe, Geduld und festen Abläufen sorgt Fahrdienst Panda für eine vertraute und sichere Beforderung von Menschen mit Autisms .",
    },
    {
      src: teamImg02,
      name: "Behindertenbeförderung",
      designation: "Mit viel Geduld und Verständnis bringen wir Menschen mit körperlicher oder geistiger Einschränkung sicher und bequem ans Zielob zur Schule, Arbeit, Werkstatt, Arzt, Fördereinrichtung oder Tagesstätte.",
    },
    {
      src: teamImg03,
      name: "Schülerbeförderung",
      designation: "Zuverlässig wird dein Kind zur Schule und wieder nach Hause gefahren freundlich, pünktlich und sicher.",
    },
    {
      src: teamImg04,
      name: "Seniorenbeförderung",
      designation: "Sicher und bequem befördern wir Senioren zum Arzt, zur Tagespflege oder zur Familie mit Geduld, Zeit und einem Lächeln.",
    },
  ];

  return (
    <section className="team__area">
      <div className="container">
        {/* top */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section__title text-center mb-40">
              <span className="sub-title">
                Fahrdienst Panda Berlin
                
              </span>
              <h2 className="title">
                Leistungen unseres Fahrdienstes
              </h2>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <TeamOneItem
              key={index}
              src={member.src}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>

        <div className="team__bottom-content">
          <p>Our Valuable Expert Doctors Team</p>
          <Link href="/team" className="btn">
            See All Doctors
            <img src={rightArrow} alt="right arrow" className="injectable" />
          </Link>
        </div>
      </div>

      {/* shape */}
      <div className="team__shape">
        <img src={teamShape} alt="shape" className="ribbonRotate" />
      </div>
    </section>
  );
};
