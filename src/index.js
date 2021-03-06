import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='container'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

