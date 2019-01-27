const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const pokemonController = require('./controllers/pokemonController');

const methodOverride = require("method-override");



app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({extended : false}));

app.use("/", pokemonController);



app.listen(3000, () =>{
    console.log("Listening on port 3000");
});
