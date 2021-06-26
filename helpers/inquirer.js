const inquire = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Crear Tarea",
      },
      {
        value: "2",
        name: "Listar",
      },
      {
        value: "3",
        name: "opt3",
      },
      {
        value: "4",
        name: "opt4",
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.log("============================".red);
  console.log("   Selecciona Una Opcion   ".rainbow);
  console.log("============================\n".yellow);

  await inquire.prompt(menuOpts).then((res) => console.log({ res }));
};
module.exports = {
  inquirerMenu,
};
