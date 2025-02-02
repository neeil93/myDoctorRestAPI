import express from "express";
import bodyParser from "body-parser";
import chalk from "chalk";
import cors from "cors";
import pack from "../package.json";
import path from "path";
import mongoose from 'mongoose';
import configPKG from "config";
import Routes from "./routes.js";

// if NODE_ENV value not define then dev value will be assign
const mode = process.env.NODE_ENV || "dev";
// mode can be access anywhere in the project
const config = configPKG.get(mode);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

Routes(app);

const start = () =>
  app.listen(config.port, () => {
    console.log(chalk.yellow("......................................."));
    console.log(chalk.green(config.name));
    console.log(chalk.green(`Port:\t\t${config.port}`));
    console.log(chalk.green(`Mode:\t\t${config.mode}`));
    console.log(chalk.green(`App version:\t${pack.version}`));
    console.log(chalk.green("database connection is established"));
    console.log(chalk.yellow("......................................."));
  });

const dbConnection = () => {
    mongoose.connect(config.database.connectionUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', async function() {
      console.log('MongoDB Connected successfully...');
      start();
    });    
};

dbConnection();
