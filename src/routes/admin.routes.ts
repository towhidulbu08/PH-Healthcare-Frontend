const prefix = "/admin";

export const adminRoutes = [
  {
    title: "Management",

    items: [
      {
        title: "Overview",
        url: `${prefix}`,
      },
      {
        title: "Doctor Appoval",
        url: `${prefix}/approve-doctor`,
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
