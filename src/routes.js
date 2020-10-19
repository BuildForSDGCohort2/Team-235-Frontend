import React from "react";

const Breadcrumbs = React.lazy(() => import("./views/base/breadcrumbs/Breadcrumbs"));
const Categories = React.lazy(() => import("./views/categories/Categories"));
const StockDetails = React.lazy(() => import("./views/StockDetails/stock-details"));
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
const ViewStock = React.lazy(() => import("./views/StockDetails/ViewStock"));
const Report = React.lazy(() => import("./views/Report/Report"));
const UpdateUser = React.lazy(() => import("./views/update/UpdateUser"));
const UpdateRole = React.lazy(() => import("./views/update/UpdateRole"));
const CategoryStocks = React.lazy(() => import("./views/widgets/CategoryStocks"));

const routes = [
  { path: "/", exact: true, name: "", component: Login },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/base/breadcrumbs",  name: "Breadcrumbs", component: Breadcrumbs },
  { path: "/categories",  name: "Categories", component: Categories },
  { path: "/stock-details",  name: "Stock Details", component: StockDetails },
  { path: "/charts", name: "Charts", component: Charts },
  { path: "/management",  name: "User Management", component: UserManagement},
  {path: "/add", name: "New User", component: AddNewUser},
  {path: "/addstock", name: "Add Stock", component: AddStock},
  {path: "/permission", name: "Permission", component: Permission},
  {path: "/createrole", name: "Create New Role", component: CreateNewRole},
  {path: "/viewrole", name: "View User Role", component: ViewRole},
  {path: "/viewuser", name: "View User Profile", component: ViewUser},
  {path: "/viewstock", name: "View Stock Details", component: ViewStock},
  {path: "/report", name: "Report", component: Report},
  {path: "/updateuser", name: "UpdateUser", component: UpdateUser},
  {path: "/updaterole", name: "UpdateRole", component: UpdateRole},
  {path: "/categorystocks", name: "Category Stocks", component: CategoryStocks}
];



export default routes;
