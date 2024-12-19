export default {
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Our Team",
      type: "string",
      hidden: true,
    },
    {
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [{ type: "teamMember" }],
      validation: (rule) => rule.required(),
    },
  ],
};
