import express from "express";
import ini from "node-ini";
import path from "path";
import os from "os"
import mysql from "mysql"
import cors from "cors";

const PORT = 19866;

const app = express();

app.use(cors());

app.listen(PORT, function(){(console.log(`listening on port ${PORT}`))});

const homedir = os.homedir();
let mysql_config = ini.parseSync(`${homedir}/.my.cnf`).client;
let pool = mysql.createPool({
  connectionLimit : 10,
  host            : mysql_config.host,
  user            : mysql_config.user,
  password        : mysql_config.password,
  database        : mysql_config.database});

/*app.get("/:query", async function(req, res){
    pool.query(req.params.query, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    })
})*/

app.get("/studios/:params", async function(req, res, next){
    pool.query("select * from Studios;", function(error, results, fields){
        if(error){
            res.send(JSON.stringify(error));
        }
        res.send(results);
    })
});

app.get("/Games/:params", async function(req, res, next){
    let sql = "select * from Games join Studios using(studio_id) ";
    let values = JSON.parse(req.params.params);
    console.log(Object.keys(values));
    if(Object.keys(values).length != 0){
        console.log(Object.keys(values).length)
        sql += "where "
        Object.keys(values).forEach((param, index) => {
            if(index !== 0) sql += "and ";
            sql += `${param} = ${values[param]} `;
        });
    }
    sql += ";"
    console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    })
});