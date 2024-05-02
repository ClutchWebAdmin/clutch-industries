export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectTitle",
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "milestone",
      title: "Milestone",
      type: "string",
    },
    {
      name: "includeInTimeline",
      title: "Include In Timeline?",
      type: "boolean",
      validation: (rule) => rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    },
    {
      name: "projectTimeline",
      title: "Project Timeline",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "constructionStart",
          title: "Construction Start",
          type: "date",
          options: {
            dateFormat: "MMMM YYYY",
          },
          validation: (rule) => rule.required(),
        },
        {
          name: "constructionStartNotes",
          title: "Construction Start Notes",
          type: "string",
        },
        {
          name: "constructionEnd",
          title: "Construction End",
          type: "date",
          options: {
            dateFormat: "MMMM YYYY",
          },
          validation: (rule) => rule.required(),
        },
        {
          name: "constructionEndNotes",
          title: "Construction End Notes",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: "projectDetails",
      title: "Project Details",
      type: "object",
      validation: (rule) => rule.required(),
      fields: [
        {
          name: "projectType",
          title: "Project Type",
          type: "string",
          validation: (rule) => rule.required(),
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
          description: "City, State",
          validation: (rule) => rule.required(),
        },
        {
          name: "units",
          title: "Units",
          type: "object",
          validation: (rule) => rule.required(),
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
          validation: (rule) => rule.required(),
        },
        {
          name: "conclusion",
          title: "Conclusion",
          type: "text",
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      validation: (rule) => rule.required(),
    },
  ],
};
