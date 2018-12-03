import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/font-awesome.less';
import 'nprogress/nprogress.css';
import './styles/index.less';
import Layout from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename="/rtblog">
    <Layout />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
