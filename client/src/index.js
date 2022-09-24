import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import App from './app/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

const root = document.getElementById('root');
const store = createStore(rootReducer, applyMiddleware(thunk));

const renderReactDom = () =>{
  let app = createRoot(root)
  app.render(
    <React.StrictMode>
        <Provider store={store}>
          <Router basename="/">
            <App />
          </Router>
        </Provider>
      </React.StrictMode>
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
