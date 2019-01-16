const express = require("express");

const app = express();

const Pokemon = require("./model/pokemon");

app.get("/pokemon", (req, res) => {
    res.send(Pokemon);
});


app.listen(3000, () =>{
    console.log("Listening on port 3000");
});