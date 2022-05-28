import express from "express";
import ini from "node-ini";
import path from "path";
import os from "os"
import mysql from "mysql"
import cors from "cors";

const PORT = 19869;

const app = express();

app.use(cors());

app.listen(PORT, function(){(console.log(`listening on port ${PORT}`))});

const homedir = os.homedir();
let mysql_config = ini.parseSync('../../.my.cnf').client;
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
<<<<<<< HEAD
})

app.get("/studios", async function(req, res, next){
    var context = {};
    pool.query("SELECT * FROM Studios", function(err, rows, fields) {
        if(err){
            next(err);
            return;
          }
        context.results = JSON.stringify(rows);
=======
})*/

app.get("/studios/:params", async function(req, res, next){
    pool.query("select * from Studios;", function(error, results, fields){
        if(error){
            res.send(JSON.stringify(error));
        }
>>>>>>> 8f402069202a16a07a351c5033fb6bfe53934e03
        res.send(results);
    })
});


/*app.get("/", async function(req, res){
    pool.query("show tables;", function(error, results, fields) {
        if(error){
            res.write(JSON.stringify(error));
            res.end;
        }
        res.send(results);
    })
})*/