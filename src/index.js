import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert';
import { initializeIcons } from '@uifabric/icons';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import { AlertTemplateNotification } from './AlertNotification';
import { alertNotificationOptions } from './AlertNotification/setting';

// import './Style/global';

initializeIcons();

const Root = () => (
  <AlertProvider template={AlertTemplateNotification} {...alertNotificationOptions}>
    <App />
  </AlertProvider>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
