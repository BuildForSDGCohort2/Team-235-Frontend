import React from 'react';

const Breadcrumbs = React.lazy(() => import("./views/base/breadcrumbs/Breadcrumbs"));
const Categories = React.lazy(() => import("./views/categories/Categories"));
const Supplies = React.lazy(() => import("./views/supplies/Supplies"));
const StockDetails = React.lazy(() => import("./views/StockDetails/stock-details"));
const AssetsColumn = React.lazy(() => import("./views/AssetsColumn/assets-column"));
const Settings = React.lazy(() => import("./views/settings/Settings"));
const About = React.lazy(() => import("./views/about/About"));
const Charts = React.lazy(() => import("./views/charts/Charts"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const UserManagement = React.lazy(() => import("./views/management/Management"));
const AddNewUser = React.lazy(() => import("./views/management/AddNewUser"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
const AddStock = React.lazy(() => import("./views/StockDetails/addStock"));
const Permission = React.lazy(() => import("./views/management/Permissions"));
const CreateNewRole = React.lazy(() =>import("./views/management/CreateRole"));
const ViewRole = React.lazy(() =>import("./views/management/ViewRole"));
const ViewUser = React.lazy(() =>import("./views/management/ViewUser"));
const ViewStock = React.lazy(() => import("./views/StockDetails/ViewStock"))

const routes = [
  { path: "/", exact: true, name: "Login Page", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/base/breadcrumbs",  name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/categories",  name: "Categories", component: Categories },
  { path: "/supplies",  name: "Supplies", component: Supplies },
  { path: "/stock-details",  name: "Stock Details", component: StockDetails },
  { path: "/assets-column",  name: "Assets Column", component: AssetsColumn },
  { path: "/settings", name: "Settings", component: Settings },
  { path: "/about",  name: "About", component: About },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/management",  name: "User Management", component: UserManagement},
  {path: "/add", name: "New User", component: AddNewUser},
  {path: "/addstock", name: "Add Stock", component: AddStock},
  {path: "/permission", name: "Permission", component: Permission},
  {path: "/createrole", name: "Create New Role", component: CreateNewRole},
  {path: "/viewrole", name: "View User Role", component: ViewRole},
  {path: "/viewuser", name: "View User Profile", component: ViewUser},
  {path: "/viewstock", name: "View Stock Details", component: ViewStock}
];

//make the dashboard the homepage

export default routes;
