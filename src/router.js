import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Detail from './pages/Home/Detail';
import Classify from './pages/Classify';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/archive',
    component: Archive
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/search',
    component: Classify
  }
]

const routeConfig = routes.map((route, i) => {
  return <Route
            key={i}
            path = { route.path } 
            exact 
            render = { props => ( 
              <route.component {...props} routes = { route.routes } />
            )}
          />;
})

export default routeConfig;


