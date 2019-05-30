import Dashboard from "../views/Dashboard.js";
import Icons from "../views/Icons.js";
import UserProfile from "../views/UserProfile.js";
import Customer from "../views/Customer.js";
import Agenda from "../views/Agenda.js";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/customer",
    name: "Pacientes",
    icon: "pe-7s-users",
    component: Customer
  },
  { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
  {
    path: "/agenda",
    name: "Agenda",
    icon: "pe-7s-folder",
    component: Agenda
  },
  {
    path: "/user",
    name: "Perfil Usuario",
    icon: "pe-7s-user",
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
