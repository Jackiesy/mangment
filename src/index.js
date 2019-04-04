import ReactDOM from 'react-dom';
import dva from 'dva';
import './index.css';
import { LocaleProvider } from 'antd';
import { Router } from 'dva/router';

import { createBrowserHistory as createHistory } from 'history';
// 1. Initialize
const app = dva(
  {
    history: createHistory(),
}
);

// 2. Plugins
// app.use({});

// 3. Model
 app.model(require('./models/login_models').default);
 app.model(require('./models/menu_models').default);
// mock
require('./mocks/index');

// 4. Router
// -> 初始化路由
app.router(({ history, app }) => (
  <LocaleProvider >
    <Router history={history}>{app}</Router>
  </LocaleProvider>
));
export default {
  app,
  store: app._store,

};

app.router(require('./router').default);

// 5. Start
app.start('#root');

