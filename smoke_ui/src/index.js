import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pkg from "../package.json";
import { BrowserRouter } from 'react-router-dom';

const siteurl = pkg.homepage;
const basename = siteurl? new URL(siteurl).pathname : "";

/*let ini = require('node-ini');
const path = require('path');
const homedir = require('os').homedir();
let mysql_config = ini.parseSync('../.my.cnf').client;
let mysql = require('mysql');
let pool = mysql.createPool({
  connectionLimit : 10,
  host            : mysql_config.host,
  user            : mysql_config.user,
  password        : mysql_config.password,
  database        : mysql_config.database});


pool.query("select 'god damn'");*/

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