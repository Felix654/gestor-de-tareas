require("colors");

const menu = () => {
  return new Promise((res) => {
    console.log("============================".red);
    console.log("   Selecciona Una Opcion   ".rainbow);
    console.log("============================\n".yellow);

    
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question("Elige la opcion: ", (opt) => {
      res(opt);
      readLine.close();
    });
  });
};
const pausa = () => {
  return new Promise((res) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`Persiona ${"ENTER".red} para continuar`, () => {
      readLine.close();
      res();
    });
  });
};

module.exports = {
  menu,
  pausa,
};
