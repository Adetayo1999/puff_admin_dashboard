import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
const Products = lazy(() => import("../pages/Products"));

const loadModules = (path) => {
  return lazy(() => import(`../pages/${path}`));
};

const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/forms",
    component: Forms,
  },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/charts",
    component: Charts,
  },
  {
    path: "/buttons",
    component: Buttons,
  },
  {
    path: "/modals",
    component: Modals,
  },
  {
    path: "/tables",
    component: Tables,
  },
  {
    path: "/404",
    component: Page404,
  },
  {
    path: "/blank",
    component: Blank,
  },
  {
    path: "/dashboard/revenue",
    component: loadModules("dashboard/revenue"),
  },
  {
    path: "/dashboard/escalations",
    component: loadModules("dashboard/escalations"),
  },
  {
    path: "/dashboard/marketing",
    component: loadModules("dashboard/marketing"),
  },
  {
    path: "/dashboard/wallet",
    component: loadModules("dashboard/wallet"),
  },
  {
    path: "/dashboard/user",
    component: loadModules("dashboard/user"),
  },
  {
    path: "/dashboard/warehouse",
    component: loadModules("dashboard/warehouse"),
  },
  {
    path: "/dashboard/revenue-category",
    component: loadModules("dashboard/revenue-category"),
  },
  {
    path: "/dashboard/salary",
    component: loadModules("dashboard/salary"),
  },
  {
    path: "/warehouse/activities",
    component: loadModules("warehouse/activities"),
  },
  {
    path: "/warehouse/vendors",
    component: loadModules("warehouse/vendors"),
  },
  {
    path: "/warehouse/inventory",
    component: loadModules("warehouse/inventory"),
  },
  {
    path: "/warehouse/stock-req-form",
    component: loadModules("warehouse/stock-req-form"),
  },
  {
    path: "/warehouse/stock-inventory",
    component: loadModules("warehouse/stock-inventory"),
  },
  {
    path: "/warehouse/logistics",
    component: loadModules("warehouse/logistics"),
  },
  {
    path: "/warehouse/escalate",
    component: loadModules("warehouse/escalate"),
  },
  {
    path: "/crm/escalate",
    component: loadModules("crm/escalate"),
  },
  {
    path: "/crm/orders",
    component: loadModules("crm/orders"),
  },
  {
    path: "/crm/finance",
    component: loadModules("crm/finance"),
  },
  {
    path: "/crm/logistics",
    component: loadModules("crm/logistics"),
  },
];

export default routes;
