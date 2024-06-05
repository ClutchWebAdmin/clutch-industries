export default {
  name: "investorUpdates",
  title: "Investor Updates",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "video",
      title: "Embedded Video",
      type: "text",
      description: "Embed code snippet (e.g., YouTube or Vimeo link)",
    },
    {
      name: "shortParagraph",
      title: "Short Paragraph",
      type: "text",
    },
  ],
};
