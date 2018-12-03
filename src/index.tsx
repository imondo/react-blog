import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/font-awesome.less';
import 'nprogress/nprogress.css';
import './styles/index.less';
import RouterMap from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RouterMap />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
