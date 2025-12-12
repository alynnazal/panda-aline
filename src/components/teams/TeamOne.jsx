import React from "react";
import { TeamOneItem } from "./TeamOneItem";
import Link from "next/link";

const ert = "/images/ert.jpg";
const student = "/images/student.jpg";
const Support = "/images/support.webp";
const autism = "/images/autism.webp";

const petIcon = "/icon/pet_icon02.svg";
const rightArrow = "/icon/right_arrow.svg";
const teamShape = "/team/team_shape.png";

export const TeamOne = () => {
  const teamMembers = [
    {
      src: autism,
      href: "/team/t-123",
      name: "Autismusbeförderung",
      designation:
        "Mit Ruhe, Geduld und festen Abläufen sorgt Fahrdienst Panda für eine vertraute und sichere Beforderung von Menschen mit Autisms .",
    },
    {
      src: ert,
      name: "Behindertenbeförderung",
      href: "/team/t-234",
      designation:
        "Mit viel Geduld und Verständnis bringen wir Menschen mit körperlicher oder geistiger Einschränkung sicher und bequem ans Ziel, ob zur Schule, Arbeit, Werkstatt, Arzt, Fördereinrichtung oder Tagesstätte.",
    },
    {
      src: student,
      name: "Schülerbeförderung",
      href: "/team/t-345",
      designation:
        "Zuverlässig wird dein Kind zur Schule und wieder nach Hause gefahren freundlich, pünktlich und sicher.",
    },
    {
      src: Support,
      name: "Seniorenbeförderung",
      href: "/team/t-546",
      designation:
        "Sicher und bequem befördern wir Senioren zum Arzt, zur Tagespflege oder zur Familie mit Geduld, Zeit und einem Lächeln.",
    },
  ];

  return (
    <section className="team__area">
      <div className="container">
        {/* top */}
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div
              className="section__title text-center mb-40"
              style={{ marginTop: "60px" }}
            >
              <span className="sub-title">Fahrdienst Panda Berlin</span>
              <h2 className="title">Leistungen unseres Fahrdienstes</h2>
            </div>
          </div>
        </div>

        {/* list */}
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <TeamOneItem
              key={index}
              href={member.href}
              src={member.src}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
