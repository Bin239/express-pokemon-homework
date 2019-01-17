const express = require("express");

const app = express();

const Pokemon = require("./model/pokemon");

//show the pokemon list
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {
        pokemonList: Pokemon
    });

});
//show pokemon with specific id
app.get("/pokemon/:id", (req, res) => {
    res.render("show.ejs", {
        pokemonList: Pokemon[req.params.id],
        id: req.params.id
    });
});


app.listen(3000, () =>{
    console.log("Listening on port 3000");
});