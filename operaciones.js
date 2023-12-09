const fs = require("fs");

const registrar = (Animal_Name, Age, Species, Animal_Color, Case_Sickness) => {
  const originFile = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));

  const case_ID = Math.floor(Math.random() * 100).toString();
  // el *100 limita a max 100 ... *1000 limita el maximo a 1000 y asi...

  if (!Animal_Name || !Age || !Species || !Animal_Color || !Case_Sickness) {
    console.log("Missing Data // Faltan Datos");
    return;
  }

  originFile.push({
    case_ID,
    Animal_Name,
    Age,
    Species,
    Animal_Color,
    Case_Sickness,
  });

  fs.writeFileSync("./citas.json", JSON.stringify(originFile), (err) => {
    if (err) {
      console.log(err);
    }
  });
  console.log(
    `Registrado: ${Animal_Name}, ${Age}, ${Species}, ${Animal_Color}, ${Case_Sickness}`
  );
};

const leer = () => {
  const originFile = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
  if (!originFile == []) {
    console.log("empty file//archivo vacio");
    return;
  }

  console.log(originFile);
};



module.exports = { registrar, leer };
// los puse en español, por que asi los pedia en el desafio para ejecutar en terminal
