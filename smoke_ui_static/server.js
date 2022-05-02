'use strict';

const PORT = 3000;

// The variable stocks has the same value as the variable stocks in the file 'stocks.js'
const stocks = require('./stocks.js').stocks;

const express = require("express");
const app = express();


app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Note: Don't add or change anything above this line.

// Add your code here

function findStockByPrice(search, stocks){
    let i = 0
    //res.send(`The ${typeof stocks}`);
    for (const s in Object.keys(stocks)){
        
        if (search === "highest"){
            if (stocks[s].price > stocks[i].price){
                i = s
            }
        }
        else if (search === 'lowest'){
            if (stocks[s].price < stocks[i].price){
                i = s
            }
        }
    }
    return stocks[i]
}





// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});