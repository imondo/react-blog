import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import Loading from './components/Loading';
import Layout from './components/Layout';

interface IRouteMap {
  path: string;
  component: any;
  routes?: any;
}

const LoadComponent = (view: string): any => {
  return () => import(`./pages/${view}`);
};

const RouterList: IRouteMap[] = [
  {
    path: '/',
    component: LoadComponent('Home')
  },
  {
    path: '/about',
    component: LoadComponent('About')
  },
  {
    path: '/archive',
    component: LoadComponent('Archive')
  },
  {
    path: '/detail/:id',
    component: LoadComponent('Home/Detail')
  },
  {
    path: '/classify',
    component: LoadComponent('Classify')
  },
  {
    path: '/search',
    component: LoadComponent('Classify')
  }
];

// const routeConfig = routes.map((route, i) => {
//   return (
//     <Route
//       key={i}
//       path={route.path}
//       exact={true}
//       // render={props => <route.component {...props} routes={route.routes} />}
//       component={Loadable({
//         loader: route.component,
//         loading: Loading
//       })}
//     />
//   );
// });

const RouterMap = () => (
  <Router basename="/rtblog">
    <Layout>
      <Switch>
        {RouterList.map((item, i) => (
          <Route
            key={i}
            exact={true}
            path={item.path}
            component={Loadable({
              loader: item.component,
              loading: Loading
            })}
          />
        ))}
      </Switch>
    </Layout>
  </Router>
)

export default RouterMap;
