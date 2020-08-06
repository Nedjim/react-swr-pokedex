import React from 'react';
import ReactDOM from 'react-dom';
import { SWRConfig } from 'swr'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// fetcher is used to transform the data into JSON
const fetcher = (...args) => fetch(...args).then(res => res.json());

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
