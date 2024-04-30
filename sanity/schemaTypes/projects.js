export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
      },
    },
    {
      name: "milestone",
      title: "Milestone",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "complete" },
          { title: "In Progress", value: "inProgress" },
          { title: "Sold", value: "sold" },
          { title: "For Sale", value: "forSale" },
        ],
      },
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "text",
    },
    {
      name: "projectTimeline",
      title: "Project Timeline",
      type: "object",
      fields: [
        {
          name: "constructionStart",
          title: "Construction Start",
          type: "string",
        },
        {
          name: "constructionStartNotes",
          title: "Construction Start Notes",
          type: "string",
        },
        {
          name: "constructionEnd",
          title: "Construction End",
          type: "string",
        },
        {
          name: "constructionEndNotes",
          title: "Construction End Notes",
          type: "string",
        },
      ],
    },
    {
      name: "projectDetails",
      title: "Project Details",
      type: "object",
      fields: [
        {
          name: "projectType",
          title: "Project Type",
          type: "string",
          options: {
            list: [
              { title: "Commercial", value: "Commercial" },
              { title: "Residential", value: "Residential" },
              { title: "Mixed-Use", value: "Mixed-Use" },
            ],
          },
        },
        {
          name: "location",
          title: "Location",
          type: "string",
        },
        {
          name: "units",
          title: "Units",
          type: "object",
          fields: [
            { name: "ThreeBedroom", title: "Three Bedroom", type: "number" },
            { name: "TwoBedroom", title: "Two Bedroom", type: "number" },
            { name: "OneBedroom", title: "One Bedroom", type: "number" },
            { name: "Studio", title: "Studio", type: "number" },
            { name: "Storage", title: "Storage", type: "number" },
            { name: "Commercial", title: "Commercial", type: "number" },
            { name: "Garages", title: "Garages", type: "number" },
          ],
        },
        {
          name: "squareFootage",
          title: "Square Footage",
          type: "number",
        },
        {
          name: "strategicImportance",
          title: "Strategic Importance",
          type: "text",
        },
        {
          name: "conclusion",
          title: "Conclusion",
          type: "text",
        },
      ],
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
  ],
};
