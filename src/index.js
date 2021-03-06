import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostReducer from "./Store/Reducer/post";
import AuthReducer from "./Store/Reducer/auth";
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {combineReducers,createStore,compose,applyMiddleware} from "redux"

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    postReducer:PostReducer, 
    authReducer:AuthReducer
  });
const store =createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(
          <Provider store={store}> 
            <App />    
          </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();
