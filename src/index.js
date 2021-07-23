import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// setup redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { rootReducer } from './redux/rootReducer';

// tạo ra store tổng của ứng dụng
const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

  ,
  document.getElementById('root')
);

