import express from "express";
import ini from "node-ini";
import path from "path";
import os from "os"
import mysql from "mysql"

const PORT = 19866;

const app = express();

app.listen(PORT, function(){(console.log(`listening on port ${PORT}`))});

const homedir = os.homedir();
let mysql_config = ini.parseSync('../../.my.cnf').client;
let pool = mysql.createPool({
  connectionLimit : 10,
  host            : mysql_config.host,
  user            : mysql_config.user,
  password        : mysql_config.password,
  database        : mysql_config.database});

app.get("/", async function(req, res){
    pool.query("show tables;", function(error, results, fields) {
        if(error){
            res.write(JSON.stringif(error));
            res.end;
        }
        res.send(results);
    })
})