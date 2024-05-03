import projects from "./schemaTypes/projects";
import team from "./schemaTypes/team";
import teamMember from "./schemaTypes/teamMember";

export const schema = {
  types: [projects, team, teamMember],
};
