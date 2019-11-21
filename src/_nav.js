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
      icon: "fa fa-database",
      children: [
        {
          name: "Add Data",
          url: "/data/add-data",
          icon: "fa fa-plus"
        },
        {
          name: "All Data",
          url: "/data/all-data",
          icon: "fa fa-list"
        }
      ]
    }
  ]
};
