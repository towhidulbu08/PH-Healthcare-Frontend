const prefix = "/doctor";

export const doctorRoutes = [
  {
    title: "Schedule",

    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Create Schedules",
        url: `${prefix}`,
      },
    ],
  },
  {
    title: "App Settings",
    url: "#",
    items: [
      {
        title: "Routing",
        url: "#",
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true,
      },
    ],
  },
];
