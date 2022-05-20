import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import pkg from "../package.json";
import { BrowserRouter } from 'react-router-dom';

const siteurl = pkg.homepage;
const basename = siteurl? new URL(siteurl).pathname : "";

var fs = require('fs')
, ini = require('ini')

const path=require('path');
const VERBOSE=true;
const homedir = require('os').homedir();
let mysql_config = ini.parse((path.join(homedir, ".my.cnf")));

let mysql = require('mysql');

let sql_conn = mysql.createPool(mysql_config);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
    <App sql_conn={sql_conn}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
sql_conn.end();