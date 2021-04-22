const superheroes = require("superheroes");
const supervillains = require("supervillains");

let hero = superheroes.random();
let villain = supervillains.random();
console.log(hero + " vs " + villain);