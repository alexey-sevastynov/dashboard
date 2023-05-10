import {
  svgDashboard,
  svgProduct,
  svgCustomers,
  svgPromote,
  svgIncome,
  svgHelp,
} from "./icon";

export const btnsNavMenu = [
  {
    id: 0,
    icon: svgDashboard,
    title: "Dashboard",
    subTitle: false,
    active: false,
  },
  {
    id: 1,
    icon: svgProduct,
    title: "Product",
    subTitle: true,
    active: false,
  },
  {
    id: 2,
    icon: svgCustomers,
    title: "Customers",
    subTitle: true,
    active: true,
  },
  { id: 3, icon: svgIncome, title: "Income", subTitle: true, active: false },
  {
    id: 4,
    icon: svgPromote,
    title: "Promote",
    subTitle: true,
    active: false,
  },
  { id: 5, icon: svgHelp, title: "Help", subTitle: true, active: false },
];
