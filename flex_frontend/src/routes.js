
import Dashboard from "./views/Dashboard.jsx";
import System from "./views/System"
import ScannersMenu from "./views/ScannersMenu";


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon: "dashboard",
    component: Dashboard,
    layout: "/admin",
    hide:false
  },
  {
    path: "/visualazation",
    name: "Visualizations",
    icon: "video_label",
    component: System,
    layout: "/admin",
    hide:false
  },
  {
    path: "/scanners",
    name: "Scanners",
    icon: "qr_code_scanner",
    component: ScannersMenu,
    layout: "/admin",
    hide:false
  },
  {
    path: "/settings",
    name: "Setting",
    icon: "settings",
    component: System,
    layout: "/admin",
    hide:false

  },
];

export default dashboardRoutes;
