import React from 'react';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Categories = React.lazy(() => import('./views/categories/Categories'));
const Supplies = React.lazy(() => import('./views/supplies/Supplies'));
const StockDetails = React.lazy(() => import('./views/StockDetails/stock-details'));
const AssetsColumn = React.lazy(() => import('./views/AssetsColumn/assets-column'));
const Settings = React.lazy(() => import('./views/settings/Settings'));
const About = React.lazy(() => import('./views/about/About'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const UserManagement = React.lazy(() => import('./views/management/Management'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/base/breadcrumbs',exact: true,  name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/categories',exact: true,  name: 'Categories', component: Categories },
  { path: '/supplies',exact: true,  name: 'Supplies', component: Supplies },
  { path: '/stock-details',exact: true,  name: 'Stock Details', component: StockDetails },
  { path: '/assets-column',exact: true,  name: 'Assets Column', component: AssetsColumn },
  { path: '/settings',exact: true, name: 'Settings', component: Settings },
  { path: '/about',exact: true,  name: 'About', component: About },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/management',exact: true,  name: 'User Management', component: UserManagement},
  
];

export default routes;
