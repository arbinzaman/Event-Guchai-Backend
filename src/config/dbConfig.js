const express = require("express");
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "bkxlrwtmemh81aeknnw9-mysql.services.clever-cloud.com",
    user: "urwwmksjexojxkn0",
    password: "nw3aZdz7yG2QBKzBLxcu",
    database: "bkxlrwtmemh81aeknnw9",
  });
// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "event_guchai",
//   });

  module.exports = db;