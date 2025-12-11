import React from "react";
import { TeamOneItem } from "./TeamOneItem";
import { getAllTeamMembers } from "@/data/team";

export const TeamList = () => {
  const teamMembers = getAllTeamMembers();

  return (
    <section className="team__area-three">
      <div className="container">
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <TeamOneItem
              key={member.id}
              id={member.id}
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
