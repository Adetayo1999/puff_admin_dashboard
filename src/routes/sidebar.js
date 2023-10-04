/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    // path: "/app/dashboard",
    icon: "HomeIcon", // the component being exported from icons/index.js
    name: "Dashboard", // name that appear in Sidebar
    routes: [
      {
        name: "Wallet",
        path: "/dashboard/wallet",
      },
      {
        name: "Revenue",
        path: "/dashboard/revenue",
      },
      {
        name: "Marketing",
        path: "/dashboard/marketing",
      },
      {
        name: "Revenue / Category",
        path: "/dashboard/revenue-category",
      },
      {
        name: "Salary",
        path: "/dashboard/salary",
      },
      {
        name: "Warehouse",
        path: "/dashboard/warehouse",
      },
      {
        name: "User",
        path: "/dashboard/user",
      },
      {
        name: "Escalations",
        path: "/dashboard/escalations",
      },
    ],
  },
  {
    name: "Operations",
    icon: "CartIcon",
    routes: [
      {
        name: "Project / Task",
        path: "/operations/project",
      },
      {
        name: "Finance",
        path: "/operations/finance",
      },
      {
        name: "Logistics",
        path: "/operations/logistics",
      },
      {
        name: "Schedule",
        path: "/operations/schedule",
      },
      {
        name: "Forum",
        path: "/operations/forum",
      },
      {
        name: "Escalate",
        path: "/operations/escalate",
      },
    ],
  },
  {
    icon: "FormsIcon",
    name: "CRM",
    routes: [
      {
        name: "Orders",
        path: "/crm/orders",
      },
      {
        name: "Finance",
        path: "/crm/finance",
      },
      {
        name: "Logisitics",
        path: "/crm/logisitics",
      },
      {
        name: "Schedule",
        path: "/crm/schedule",
      },
      {
        name: "Escalate",
        path: "/crm/escalate",
      },
      {
        name: "Process FC",
        path: "/crm/process-fc",
      },
    ],
  },
  {
    icon: "CardsIcon",
    name: "HR",
    routes: [
      {
        name: "Employees",
        path: "/hr/employees",
      },
      {
        name: "Add User",
        path: "/hr/add-user",
      },
      {
        name: "Payroll",
        path: "/hr/payroll",
      },
      {
        name: "Resources",
        path: "/hr/resources",
      },
    ],
  },
  {
    icon: "PagesIcon",
    name: "Warehouse",
    routes: [
      {
        name: "Activities",
        path: "/warehouse/activities",
      },
      {
        name: "Inventory",
        path: "/warehouse/inventory",
      },
      {
        name: "Vendors",
        path: "/warehouse/vendors",
      },
      {
        name: "Stock Req. Form",
        path: "/warehouse/stock-req-form",
      },
      {
        name: "Stock Inventory",
        path: "/warehouse/stock-inventory",
      },
      {
        name: "Logistics",
        path: "/warehouse/logistics",
      },
      {
        name: "Escalate",
        path: "/warehouse/escalate",
      },
    ],
  },
  {
    path: "/app/charts",
    icon: "ChartsIcon",
    name: "Charts",
  },
  {
    path: "/app/buttons",
    icon: "ButtonsIcon",
    name: "Buttons",
  },
  {
    path: "/app/modals",
    icon: "ModalsIcon",
    name: "Modals",
  },
  {
    path: "/app/tables",
    icon: "TablesIcon",
    name: "Tables",
  },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/app/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/app/blank",
  //       name: "Blank",
  //     },
  //   ],
  // },
];

export default routes;
