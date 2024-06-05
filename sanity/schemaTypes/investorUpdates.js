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
      description:
        "Embed code snippet, should be responsive and in <iframe></iframe> tags",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortParagraph",
      title: "Short Paragraph",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
