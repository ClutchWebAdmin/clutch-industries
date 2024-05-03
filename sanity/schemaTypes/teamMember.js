export default {
  name: "teamMember",
  title: "Team Member",
  type: "object",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "title",
      media: "photo",
    },
  },
};
