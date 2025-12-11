// Import all team member data files
import { teamMemberData as t123 } from "./t-123";

// Map team member IDs to their data
const teamDataMap = {
  "t-123": t123,
  // Add more team members here as needed
  // "t-124": t124,
  // "t-125": t125,
};

// Function to get team member data by ID
export function getTeamMemberData(id) {
  return teamDataMap[id] || null;
}

// Export all team member IDs for listing
export function getAllTeamMemberIds() {
  return Object.keys(teamDataMap);
}

// Get all team members for listing (returns simplified data for list view)
export function getAllTeamMembers() {
  return Object.values(teamDataMap).map((member) => ({
    id: member.id,
    src: member.image,
    name: member.name,
    designation: member.subtitle,
  }));
}
