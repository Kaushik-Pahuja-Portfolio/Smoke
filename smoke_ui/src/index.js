import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pkg from "../package.json";
import { BrowserRouter } from 'react-router-dom';

const siteurl = pkg.homepage;
const basename = siteurl? new URL(siteurl).pathname : "";

let pool = undefined;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
    <App pool={pool}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
//pool.end();