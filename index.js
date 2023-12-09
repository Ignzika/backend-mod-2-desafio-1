const { registrar, leer } = require("./operaciones.js");

const [Action_User, Animal_Name, Age, Species, Animal_Color, Case_Sickness] =
  process.argv.slice(2);

if (Action_User === "registrar") {
  registrar(Animal_Name, Age, Species, Animal_Color, Case_Sickness);
}

if (Action_User === "leer") {
  leer();
}
