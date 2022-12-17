var express = require("express");
const sequelize = require('./models/connection_db');


var app = express();app.listen(3000, () => {
 console.log("Server running on port 3000");

});

sequelize.authenticate().then(() => {
  console.log("Success!");
  }).catch((err) => {
    console.log(err);
  });


  app.get("/", (req, res, next) => {
    res.json();
    });
