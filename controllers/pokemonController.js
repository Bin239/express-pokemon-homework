const express = require("express");
const router = express.Router();

const Pokemon = require("../model/pokemon.js");


//show the pokemon list
router.get("/", (req, res) => {
    res.render("index.ejs", {
        pokemonList: Pokemon
    });

});

router.get("/new", (req, res) => {
    res.render("new.ejs");
});

router.post("/", (req, res) => {
    Pokemon.push(req.body);
    res.redirect("/pokemon");
});


router.get("/:id", (req, res) => {
    res.render("show.ejs", {
        id: req.params.id,
        pokemonList: Pokemon[req.params.id]
    });
});

//Edit a Pokemon
router.get("/:id/edit", (req, res) => {
    res.render("edit.ejs", {
        pokemon: Pokemon[req.params.id],
        id: req.params.id
    });
});

//create a pokemon
router.put("/:id", (req, res) => {
    Pokemon[req.params.id] = req.body;
    res.render("show.ejs", {
        id: req.params.id,
        thisPokemon: Pokemon[req.params.id]
    })
});


//Delete a pokemon
router.delete("/:id", (req, res) => {
    Pokemon.splice(req.params.id,1);
    res.redirect("/");
});

module.exports = router;
