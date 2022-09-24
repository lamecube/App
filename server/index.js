//Bring In the Primary Middle-Ware
const express = require("express");
const helmet = require("helmet");
const chalk = require("chalk");
const cors = require("cors");
require("dotenv").config();

//Set Globalse
const PORT = process.env.PORT || 5000;
const ENV = process.env.NODE_ENV || "development";
const path = require("path");
global._dbConfig = path.resolve(__dirname + "/data/dbConfig");
global._jwt = path.resolve(__dirname + "/api/auth/preAuth/jwt");
global._URL = process.env.ROOT_URL || "localhost:" + PORT;

//Bring in the Routes.. Always after Globals
const primaryRouter = require("./api/server");

//Configure the server
const server = express();
server.set("view engine", "ejs"); //Used for .render() method in Docs
server.use(helmet()); //https://client.apidevnow.com
server.use(cors());
server.use(express.json());
server.use("/css", express.static(__dirname + "/views/css")); //CSS

//Through Some Style Into The Mix
const lg = console.log;
const blu = chalk.blue;
const grn = chalk.green;

//Implement Routes
server.use("/", primaryRouter);

//Implement Static Routes
server.use("/", (error, req, res, next) => {
  if (error) {
    //console.log(error)
    res.status(200).json({ errors: error });
  } else {
    next();
  }
});

server.use("*", ( req, res) => {
  res.status(200).json({ errors: 'You\'ve Some how managed to bypass the gate keeper.'});
});

//Turn this bad chicken with some style yo
server.listen(PORT, () => {
  lg(`
      ${grn("*************************************")} 
          Server listening on PORT: ${blu(PORT)} 
      ${grn("*************************************")}`);
  lg(`         ♫♪.ılılıll${blu("|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|")}llılılı.♫♪\n`);
});

module.exports = server;
