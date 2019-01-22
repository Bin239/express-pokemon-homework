const express = require("express");

const app = express();

const Pokemon = require("./model/pokemon");

const methodOverride = require("method-override");

const bodyParser = require("body-parser")


app.use(express.static(__dirname + "/views"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({extended : false}));


//show the pokemon list
app.get("/", (req, res) => {
    res.render("index.ejs", {
        pokemonList: Pokemon
    });

});

app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs");
});

//Edit a Pokemon
app.get("/pokemon/:id/:edit", (req, res) => {
    res.render("edit.ejs", {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});

//show pokemon with specific id
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemonList: Pokemon[req.params.id],
        id: req.params.id
    });
});

app.get("/pokemon/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        pokemonList: Pokemon[req.params.id],
        id: req.params.id
    });
});

//Delete a pokemon
app.delete("/pokemon/:id", (req, res) => {
    Pokemon.splice(req.params.id,1);
    res.redirect("/");
});

//create a pokemon
app.put("/pokemon/:id", (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.redirect("/pokemon");
});

app.post("/pokemon", (req, res) => {
    Pokemon.push(req.body);
    res.redirect("/");
});



app.listen(3000, () =>{
    console.log("Listening on port 3000");
});