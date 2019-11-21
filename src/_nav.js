export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info"
      }
    },
    {
      title: true,
      name: "Management",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Data",
      url: "/data",
      icon: "icon-puzzle",
      children: [
        {
          name: "Add Data",
          url: "/data/add-data",
          icon: "icon-puzzle"
        },
        {
          name: "All Data",
          url: "/data/all-data",
          icon: "icon-puzzle"
        }
      ]
    }
  ]
};
