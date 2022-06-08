import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './store';
import thunk from 'redux-thunk';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore(rootReducer, applyMiddleware(thunk));

const renderReactDom = () =>{
  ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <Router basename="/">
            <App />
          </Router>
        </Provider>
      </React.StrictMode>, document.getElementById('root'),
  );
};

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    renderReactDom();
  }, false);
} else {
  renderReactDom();
}
