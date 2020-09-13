import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'
import { Provider } from 'react-redux'
import store from './store'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

React.icons = icons



const client = new ApolloClient({
   uri: "https://stock-tracker-team-235.herokuapp.com/graphql",
   cache: new InMemoryCache(),
   
});

ReactDOM.render(
<ApolloProvider client={client}>
  <Provider store={store}>
    <App/>
  </Provider>
</ApolloProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
