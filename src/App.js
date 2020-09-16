import React  from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import Forgot from './views/pages/forgot/Forgot';


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
 
// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
 
 
const  App  = () => {
    
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route exact path="/" name="Login Page" render={(props) => <Login {...props}/>} />
              <Route exact path="/forgot" name="Forgot Page" render={(props) => <Forgot {...props}/>} />
              <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props}/>} />
              <Route exact path="/dashboard" name="Dashboard" render={(props) => <TheLayout {...props}/>}    />
              <Route exact path="/categories" name="Categories" render={(props) => <TheLayout {...props}/>} />
              <Route exact path = "/management" name="User Management" render={(props) => <TheLayout {...props}/>}/>
              <Route exact path="/add" name="New User" render={(props) => <TheLayout {...props}/>} />
              <Route exact path="/stock-details" name= "Stock Details" render={(props) => <TheLayout {...props}/>} />
              <Route exact path="/addstock" name= "Add Stock" render={(props) => <TheLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
}

export default App;
