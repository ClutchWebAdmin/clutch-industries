import projects from "./schemaTypes/projects";
import team from "./schemaTypes/team";
import teamMember from "./schemaTypes/teamMember";
import investorUpdates from "./schemaTypes/investorUpdates";

export const schema = {
  types: [projects, team, teamMember, investorUpdates],
};
