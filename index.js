var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
var extra = " I like" + chalk.red(" RED");
console.log(message + extra);