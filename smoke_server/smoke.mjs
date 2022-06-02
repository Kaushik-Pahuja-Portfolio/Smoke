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

app.get("/rawquery/:query", async function(req, res){
    pool.query(req.params.query, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    })
})

app.get("/Studios/:params", async function(req, res, next){
    let sql = "SELECT * FROM Studios ";
    let values = {};
    try {
        JSON.parse(req.params.params);
    }
    catch(error){
        console.log(error);
    }
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
    });
});


app.get("/Studios-Insert/:params", async function(req, res, next){
        let sql = "INSERT INTO Studios "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    });
});


app.get("/Studios-Update/:params", async function(req, res, next){
    let sql = "UPDATE * Studios SET";
    let values = JSON.parse(req.params.params);
    console.log(Object.keys(values));
    if(Object.keys(values).length != 0){
        console.log(Object.keys(values).length)
        Object.keys(values).forEach((param, index) => {
            if(index !== 0) sql += ", ";
            sql += `${param} = ${values[param]} `;
        });
    }
    sql += `WHERE studio_id = ${param.studio_id};`
    console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    });
});


app.get("/Studios-Delete/:studio_id", async function(req, res, next){
    let sql = `Delete FROM Studios WHERE studio_id = ${req.params.id}`;
    console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    });
});


app.get("/Players/:params", async function(req, res, next){
    let sql = "SELECT * FROM Players ";
    let values = JSON.parse(req.params.params);
    console.log(Object.keys(values));
    if(Object.keys(values).length != 0){
        console.log(Object.keys(values).length)
        sql += "WHERE "
        Object.keys(values).forEach((param, index) => {
            if(index !== 0) sql += "AND ";
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
    });
});


app.get("/Players-Insert/:params", async function(req, res, next){
        let sql = "INSERT INTO Players "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    });
});


app.get("/Players-Update/:params", async function(req, res, next){
    let sql = "UPDATE * Players SET";
    let values = JSON.parse(req.params.params);
    console.log(Object.keys(values));
    if(Object.keys(values).length != 0){
        console.log(Object.keys(values).length)
        Object.keys(values).forEach((param, index) => {
            if(index !== 0) sql += ", ";
            sql += `${param} = ${values[param]} `;
        });
    }
    sql += `WHERE player_id = ${values.player_id};`
    console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    });
});


app.get("/Games/:params", async function(req, res, next){
    let sql = "select * from Games join Studios using(studio_id) ";
    console.log(req.params.params);
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
    });
});

app.get("/Games-Insert/:params", async function(req, res, next){
        let sql = "INSERT INTO Games "
        if(Object.keys(params).length != 0){
            sql += '('
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${param}, `;
            });
            sql = sql.slice(0, -2);
            sql += ') VALUES '
            Object.keys(params).forEach((param, index) => {
                if(index !== 0) sql += " ";
                sql += `${params[param]}, `;
            });
            sql = sql.slice(0, -2);
        }
        sql.concat(";");
        console.log(sql);
    pool.query(sql, function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end();
        }
        res.send(results);
    });
});